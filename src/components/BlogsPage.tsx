import { useState, useMemo, useCallback, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import CustomizedNavigation from "./CustomizedNavigation";
import { dummyBlogs } from "@/mockData/dummyBlogs";
import { Colors } from "@/styles/global";
import EmptySearchResult from "./blogs/EmptySearchResult";
import BlogsSearchBar from "./blogs/BlogsSearchBar";

interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  tags?: string[];
}

const BlogsPage = () => {
  const blogsPerPage = 9;
  const visiblePages = Math.ceil(dummyBlogs.length / blogsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroupStart, setPageGroupStart] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return dummyBlogs;

    const words = query.split(/\s+/);
    return dummyBlogs.filter((blog) => {
      const text = `${blog.title} ${blog.description} ${blog.author} ${(
        blog.tags || []
      ).join(" ")}`.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * blogsPerPage;
    return filteredBlogs.slice(start, start + blogsPerPage);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (page < pageGroupStart) setPageGroupStart(Math.max(1, page - 2));
      else if (page >= pageGroupStart + visiblePages)
        setPageGroupStart(Math.min(totalPages - visiblePages + 1, page - 2));
    },
    [pageGroupStart, totalPages]
  );

  const pageButtonClass = (active: boolean) =>
    `min-w-[36px] h-9 px-2 py-1 rounded-md mx-0.5 text-xs sm:text-sm font-medium ${
      active
        ? "text-white"
        : `bg-white border border-gray-300 text-[${Colors.Slate700}] hover:bg-gray-100`
    }`;

  const renderPaginationButtons = () => {
    const buttons = [];
    const groupEnd = Math.min(pageGroupStart + visiblePages - 1, totalPages);

    const addButton = (page: number) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={pageButtonClass(currentPage === page)}
        style={{
          backgroundColor:
            currentPage === page ? Colors.PrimaryColor : undefined,
        }}
      >
        {page}
      </button>
    );

    if (pageGroupStart > 1) {
      buttons.push(addButton(1));
      if (pageGroupStart > 2)
        buttons.push(
          <span key="start-ellipsis" className="px-1 text-slate-500">
            ...
          </span>
        );
    }

    for (let i = pageGroupStart; i <= groupEnd; i++) buttons.push(addButton(i));

    if (groupEnd < totalPages) {
      if (groupEnd < totalPages - 1)
        buttons.push(
          <span key="end-ellipsis" className="px-1 text-slate-500">
            ...
          </span>
        );
      buttons.push(addButton(totalPages));
    }

    return buttons;
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const navButtonStyle = (disabled: boolean) => ({
      color: disabled ? Colors.Slate400 : Colors.Slate600,
      backgroundColor: disabled ? Colors.LightGrayBackground : "white",
      cursor: disabled ? "not-allowed" : "pointer",
    });

    return (
      <div className="flex items-center justify-center mt-8">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center overflow-x-auto">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="min-w-[70px] h-9 px-2 py-1 text-xs sm:text-sm rounded-l-md border mr-1"
            style={navButtonStyle(currentPage === 1)}
          >
            Previous
          </button>
          <div className="flex items-center">{renderPaginationButtons()}</div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="min-w-[70px] h-9 px-2 py-1 text-xs sm:text-sm rounded-r-md border ml-1"
            style={navButtonStyle(currentPage === totalPages)}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderMobilePagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex sm:hidden items-center justify-center mt-8 space-x-1 text-sm">
        {[
          <button
            key="prev"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={pageButtonClass(false)}
            style={{
              backgroundColor:
                currentPage === 1 ? Colors.LightGrayBackground : "white",
              color: currentPage === 1 ? Colors.Slate400 : Colors.Slate600,
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>,
          currentPage > 2 && (
            <button
              key="prev-num"
              onClick={() => handlePageChange(currentPage - 1)}
              className={pageButtonClass(false)}
              style={{ color: Colors.Slate700 }}
            >
              {currentPage - 1}
            </button>
          ),
          <button
            key="current"
            className={pageButtonClass(true)}
            style={{ backgroundColor: Colors.PrimaryColor }}
          >
            {currentPage}
          </button>,
          currentPage < totalPages - 1 && (
            <button
              key="next-num"
              onClick={() => handlePageChange(currentPage + 1)}
              className={pageButtonClass(false)}
              style={{ color: Colors.Slate700 }}
            >
              {currentPage + 1}
            </button>
          ),
          currentPage < totalPages - 2 && (
            <span key="ellipsis" className="px-1 text-slate-500">
              ...
            </span>
          ),
          <button
            key="next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={pageButtonClass(false)}
            style={{
              backgroundColor:
                currentPage === totalPages
                  ? Colors.LightGrayBackground
                  : "white",
              color:
                currentPage === totalPages ? Colors.Slate400 : Colors.Slate600,
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>,
        ]}
      </div>
    );
  };

  return (
    <div className="relative overflow-x-hidden">
      <CustomizedNavigation />
      <section
        className="py-10 sm:py-20"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.LightGrayBackground}, #eff6ff, #e0e7ff)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: Colors.Slate700 }}
            >
              VidhiVidh Legal Insights
            </h2>
            <p
              className="text-sm max-w-2xl mx-auto leading-relaxed"
              style={{ color: Colors.Slate600 }}
            >
              Stay updated with the latest legal developments, expert case
              breakdowns, and thoughtful insights on evolving laws.
            </p>
          </div>

          <BlogsSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setCurrentPage={setCurrentPage}
            setPageGroupStart={setPageGroupStart}
          />

          {currentBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              {isMobile ? renderMobilePagination() : renderPagination()}
            </>
          ) : (
            <EmptySearchResult
              setSearchQuery={setSearchQuery}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogsPage;
