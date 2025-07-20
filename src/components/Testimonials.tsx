import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/mockData/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const checkScrollPosition = () => {
    const container = sliderRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 relative overflow-hidden bg-[#0B1C2C]"
    >
      {/* Gold pattern dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI0NCQTE0QSIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Client Testimonials
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Don't just take our word for it. Here's what our clients say about
            their experience working with our legal team.
          </p>
        </motion.div>

        <div className="relative">
          {/* Left Button */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl bg-[#CBA14A] hover:bg-[#b98d37]"
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="h-6 w-6 text-[#0B1C2C]" />
            </motion.button>
          )}

          {/* Right Button */}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl bg-[#CBA14A] hover:bg-[#b98d37]"
              aria-label="Scroll testimonials right"
            >
              <ChevronRight className="h-6 w-6 text-[#0B1C2C]" />
            </motion.button>
          )}

          {/* Testimonial Cards */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scroll-smooth px-4 pb-6 no-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex-shrink-0"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="w-[300px] sm:w-[350px] h-full transition-all duration-300 group shadow-md hover:shadow-xl bg-[#14283c] border border-[#1F2D3A]">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#CBA14A] text-xl">
                          ★
                        </span>
                      ))}
                    </div>

                    <blockquote className="mb-6 leading-relaxed italic flex-grow text-gray-300">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="border-t border-[#1F2D3A] pt-4">
                      <h4 className="font-bold text-white">
                        {testimonial.client}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {testimonial.position}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;