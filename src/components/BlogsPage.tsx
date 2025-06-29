import { useState, useMemo, useCallback, useEffect } from "react";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import { Colors } from "@/styles/global";
import EmptySearchResult from "./blogs/EmptySearchResult";
import BlogsSearchBar from "./blogs/BlogsSearchBar";
import { getAllBlogs } from "@/services/blogs";

interface Blog {
  id: string;
  title: string;
  content?: string;
  authorName: string;
  date: string;
  image?: string;
  tags?: string[];
}

const BlogsPage = () => {
  const blogsPerPage = 9;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroupStart, setPageGroupStart] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiBlogs = await getAllBlogs();
        console.log(apiBlogs);
        const mappedBlogs: Blog[] = apiBlogs.map((blog) => ({
          id: blog._id,
          title: blog.title,
          content: blog.content,
          authorName: blog.authorName,
          date: new Date(blog.createdAt).toLocaleDateString(),
          image: blog.imageURL, // Replace with actual image if available
          tags: [],
        }));
        setBlogs(mappedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return blogs;

    const words = query.split(/\s+/);
    return blogs.filter((blog) => {
      const text = `${blog.title} ${blog.content} ${blog.authorName} ${(
        blog.tags || []
      ).join(" ")}`.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }, [searchQuery, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const visiblePages = Math.min(totalPages, 5);

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * blogsPerPage;
    return filteredBlogs.slice(start, start + blogsPerPage);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (page < pageGroupStart) {
        setPageGroupStart(Math.max(1, page - 2));
      } else if (page >= pageGroupStart + visiblePages) {
        setPageGroupStart(Math.min(totalPages - visiblePages + 1, page - 2));
      }
    },
    [pageGroupStart, totalPages, visiblePages]
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

    for (let i = pageGroupStart; i <= groupEnd; i++) {
      buttons.push(addButton(i));
    }

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
      <>
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
      </>
    );
  };

  const renderMobilePagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex sm:hidden items-center justify-center mt-8 space-x-1 text-sm">
        {currentPage > 1 && (
          <button
            key="prev"
            onClick={() => handlePageChange(currentPage - 1)}
            className={pageButtonClass(false)}
          >
            Previous
          </button>
        )}
        <button
          key="current"
          className={pageButtonClass(true)}
          style={{ backgroundColor: Colors.PrimaryColor }}
        >
          {currentPage}
        </button>
        {currentPage < totalPages && (
          <button
            key="next"
            onClick={() => handlePageChange(currentPage + 1)}
            className={pageButtonClass(false)}
          >
            Next
          </button>
        )}
      </div>
    );
  };

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: blogsPerPage }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-white shadow-md rounded-lg p-4 space-y-4"
        >
          <div className="h-40 bg-gray-200 rounded-md" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-x-hidden">
      <CustomizedNavigation />
      <section
        className="py-20 sm:py-28"
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

          {loading ? (
            renderSkeletons()
          ) : currentBlogs.length > 0 ? (
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
