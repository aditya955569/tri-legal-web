import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { attorneys } from "@/mockData/legalTeamDetails";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const AUTO_SLIDE_DELAY = 3000; // ms
const SWIPE_THRESHOLD = 50; // px

const Attorneys = () => {
  // refs for desktop animation
  const cardsRef = useRef<HTMLDivElement | null>(null);

  // slider refs & state (mobile)
  const sliderViewportRef = useRef<HTMLDivElement | null>(null);
  const sliderTrackRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const autoSlideTimerRef = useRef<number | null>(null);
  const isTransitioningRef = useRef(false); // Prevent rapid transitions

  // touch tracking
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  // measure slide width on mount and resize
  useEffect(() => {
    const measure = () => {
      const w = sliderViewportRef.current?.clientWidth ?? 0;
      setSlideWidth(w);
    };

    // measure initially and on resize
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // desktop GSAP entry animation
  useEffect(() => {
    if (cardsRef.current) {
      const cards = gsap.utils.toArray<HTMLDivElement>(
        cardsRef.current.querySelectorAll(".attorney-card")
      );

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  // limit attorneys list for mobile
  const mobileAttorneys = attorneys.slice(0, 3);

  // Helper function to navigate to next slide with loop
  const goToNextSlide = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setCurrentIndex((prev) => {
      if (prev >= mobileAttorneys.length - 1) {
        return 0; // Loop back to first slide
      }
      return prev + 1;
    });

    // Reset the transitioning flag after a short delay
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 700); // Match the transition duration
  };

  // Helper function to navigate to previous slide with loop
  const goToPrevSlide = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return mobileAttorneys.length - 1; // Loop to last slide
      }
      return prev - 1;
    });

    // Reset the transitioning flag after a short delay
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 700); // Match the transition duration
  };

  // autoplay functions
  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideTimerRef.current = window.setInterval(() => {
      goToNextSlide();
    }, AUTO_SLIDE_DELAY);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      window.clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };

  // start autoplay when slideWidth available
  useEffect(() => {
    if (slideWidth > 0 && mobileAttorneys.length > 1) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [slideWidth]);

  // touch handlers for manual swipe (pauses autoplay while dragging)
  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) {
      startAutoSlide();
      return;
    }
    const dx = touchStartX.current - touchCurrentX.current;

    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx > 0) {
        // swipe left → next
        goToNextSlide();
      } else {
        // swipe right → prev
        goToPrevSlide();
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
    startAutoSlide();
  };

  // helper to compute transform style (pixel-based -> crisp)
  const trackTransformStyle =
    slideWidth > 0
      ? { transform: `translateX(-${currentIndex * slideWidth}px)` }
      : {};

  return (
    <section
      style={{ backgroundColor: Colors.PrimaryBgColor }}
      className="py-20 relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.TextColor1 }}
          >
            Our Legal Team
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: Colors.TextColor5 }}
          >
            Meet our experienced attorneys who bring decades of combined
            expertise to every case, ensuring the highest quality legal
            representation.
          </p>
        </div>

        {/* MOBILE SLIDER: single card visible at a time */}
        <div
          ref={sliderViewportRef}
          className="md:hidden overflow-hidden relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ height: "480px" }}
        >
          {/* Left Button */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white transition-opacity opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white transition-opacity opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            ref={sliderTrackRef}
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              ...trackTransformStyle,
              width:
                slideWidth > 0
                  ? `${mobileAttorneys.length * slideWidth}px`
                  : "100%",
            }}
          >
            {mobileAttorneys.map((attorney, index) => {
              const imgSrc =
                attorney.image &&
                (attorney.image.startsWith("http") ||
                  attorney.image.startsWith("/"))
                  ? attorney.image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

              return (
                <div
                  key={index}
                  style={{ flex: "0 0 auto", width: slideWidth || "100%" }}
                  className="px-4 box-border"
                >
                  <Card
                    className="attorney-card border overflow-hidden mx-auto"
                    style={{
                      borderColor: Colors.CardBgSecondaryColor,
                      backgroundColor: Colors.CardBgPrimaryColor,
                      maxWidth: 720,
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={attorney.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[320px] object-cover"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.14), rgba(0,0,0,0))",
                        }}
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: Colors.TextColor1 }}
                      >
                        {attorney.name}
                      </h3>

                      {/* Specialization - Slightly bold */}
                      <p
                        className="mb-3 font-medium"
                        style={{ color: Colors.TextColor5 }}
                      >
                        {attorney.specialization}
                      </p>

                      {/* Title - Enhanced professional font */}
                      <p
                        className="mb-2"
                        style={{
                          color: Colors.TextColor3,
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.82rem",
                          fontWeight: 500,
                          letterSpacing: "0.3px",
                        }}
                      >
                        {attorney.title}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP GRID: 3-column layout with GSAP animations */}
        <div
          ref={cardsRef}
          className="hidden md:grid md:grid-cols-3 gap-8 mt-10"
        >
          {attorneys.slice(0, 3).map((attorney, index) => {
            const imgSrc =
              attorney.image &&
              (attorney.image.startsWith("http") ||
                attorney.image.startsWith("/"))
                ? attorney.image
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

            return (
              <Card
                key={index}
                className="attorney-card border overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: Colors.CardBgSecondaryColor,
                  backgroundColor: Colors.CardBgPrimaryColor,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={attorney.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: "auto" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: Colors.TextColor1 }}
                  >
                    {attorney.name}
                  </h3>
                  <p
                    className="mb-3"
                    style={{ color: Colors.TextColor5, fontWeight: 600 }}
                  >
                    {attorney.specialization}
                  </p>
                  <p
                    className="font-semibold mb-2"
                    style={{
                      color: Colors.TextColor3,
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {attorney.title}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View More link */}
        <div className="text-right mt-10">
          <Link
            to="/attorneys"
            onMouseEnter={() => stopAutoSlide()}
            onMouseLeave={() => startAutoSlide()}
            style={{
              backgroundColor: Colors.CardBgSecondaryColor,
              borderColor: Colors.BorderLineColor1,
              color: Colors.IconsColor,
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
