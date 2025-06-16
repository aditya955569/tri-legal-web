import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dummyBlogs } from "@/mockData/dummyBlogs";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

const BlogsPage = () => {
  const blogsPerPage = 9;
  const totalPages = Math.ceil(dummyBlogs.length / blogsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroupStart, setPageGroupStart] = useState(1);
  const blogRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentBlogs = dummyBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // Animation effects
  useEffect(() => {
    blogRefs.current.forEach((ref) => {
      if (ref) gsap.set(ref, { opacity: 0, y: 20 });
    });

    const animations = blogRefs.current.map((blog, index) => {
      if (!blog) return null;

      return gsap.to(blog, {
        y: 0,
        opacity: 1,
        delay: index * 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blog,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      animations.forEach((anim) => anim?.scrollTrigger?.kill());
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [currentBlogs]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Adjust page group if needed
    if (page < pageGroupStart) {
      setPageGroupStart(Math.max(1, page - 2));
    } else if (page >= pageGroupStart + 5) {
      setPageGroupStart(Math.min(totalPages - 4, page - 2));
    }
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const visiblePages = 5;
    const groupEnd = Math.min(pageGroupStart + visiblePages - 1, totalPages);

    // Always show first page if not in current range
    if (pageGroupStart > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-4 py-2 rounded-md mx-1 text-sm font-medium ${
            currentPage === 1
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-slate-700 hover:bg-gray-100"
          }`}
        >
          1
        </button>
      );
      if (pageGroupStart > 2) {
        pageNumbers.push(
          <span key="left-ellipsis" className="px-2 text-slate-500">
            ...
          </span>
        );
      }
    }

    // Current range of pages
    for (let i = pageGroupStart; i <= groupEnd; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-md mx-1 text-sm font-medium ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-slate-700 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }

    // Always show last page if not in current range
    if (groupEnd < totalPages) {
      if (groupEnd < totalPages - 1) {
        pageNumbers.push(
          <span key="right-ellipsis" className="px-2 text-slate-500">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-4 py-2 rounded-md mx-1 text-sm font-medium ${
            currentPage === totalPages
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-slate-700 hover:bg-gray-100"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex items-center justify-center mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 rounded-l-md border ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed bg-gray-100"
              : "text-slate-600 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {pageNumbers}

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 rounded-r-md border ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed bg-gray-100"
              : "text-slate-600 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              VidhiVidhan Legal Insights
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Expert legal analysis and commentary on important cases and
              legislation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog: Blog, index: number) => (
              <div
                key={blog.id}
                ref={(el) => (blogRefs.current[index] = el)}
                className="opacity-0" // Initial state for GSAP
              >
                <Card className="h-full flex flex-col bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
                  <CardHeader className="p-0 overflow-hidden rounded-t-lg">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                    <div className="mt-auto text-sm text-slate-500">
                      <span className="block font-medium">{blog.author}</span>
                      <span>
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {totalPages > 1 && renderPagination()}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogsPage;
