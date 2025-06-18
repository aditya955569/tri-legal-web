import { useState, useMemo, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Footer from "./Footer";
import { dummyBlogs } from "@/mockData/dummyBlogs";
import CustomizedNavigation from "./CustomizedNavigation";
import { Colors } from "@/styles/global";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroupStart, setPageGroupStart] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return dummyBlogs;
    const lowerQuery = searchQuery.toLowerCase().trim();
    const queryWords = lowerQuery
      .split(/\s+/)
      .filter((word) => word.length > 0);

    return dummyBlogs.filter((blog) => {
      const blogText = `
        ${blog.title}
        ${blog.description}
        ${blog.author}
        ${(blog.tags || []).join(" ")}
      `.toLowerCase();

      return queryWords.every((word) => blogText.includes(word));
    });
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const currentBlogs = useMemo(() => {
    return filteredBlogs.slice(
      (currentPage - 1) * blogsPerPage,
      currentPage * blogsPerPage
    );
  }, [filteredBlogs, currentPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (page < pageGroupStart) {
        setPageGroupStart(Math.max(1, page - 2));
      } else if (page >= pageGroupStart + 5) {
        setPageGroupStart(Math.min(totalPages - 4, page - 2));
      }
    },
    [pageGroupStart, totalPages]
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);
      setCurrentPage(1);
      setPageGroupStart(1);
    },
    []
  );

  const renderPagination = useCallback(() => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const visiblePages = 5;
    const groupEnd = Math.min(pageGroupStart + visiblePages - 1, totalPages);

    const pageButtonClass = (isActive: boolean) =>
      `px-4 py-2 rounded-md mx-1 text-sm font-medium ${
        isActive
          ? `text-white`
          : `bg-white border border-gray-300 text-[${Colors.Slate700}] hover:bg-gray-100`
      }`;

    if (pageGroupStart > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={pageButtonClass(currentPage === 1)}
          style={{
            backgroundColor:
              currentPage === 1 ? Colors.PrimaryColor : undefined,
          }}
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

    for (let i = pageGroupStart; i <= groupEnd; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={pageButtonClass(currentPage === i)}
          style={{
            backgroundColor:
              currentPage === i ? Colors.PrimaryColor : undefined,
          }}
        >
          {i}
        </button>
      );
    }

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
          className={pageButtonClass(currentPage === totalPages)}
          style={{
            backgroundColor:
              currentPage === totalPages ? Colors.PrimaryColor : undefined,
          }}
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
          className="px-4 py-2 rounded-l-md border"
          style={{
            color: currentPage === 1 ? Colors.Slate400 : Colors.Slate600,
            backgroundColor:
              currentPage === 1 ? Colors.LightGrayBackground : "white",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>

        {pageNumbers}

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 rounded-r-md border"
          style={{
            color:
              currentPage === totalPages ? Colors.Slate400 : Colors.Slate600,
            backgroundColor:
              currentPage === totalPages ? Colors.LightGrayBackground : "white",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    );
  }, [currentPage, totalPages, pageGroupStart, handlePageChange]);

  return (
    <>
      <CustomizedNavigation />
      <section
        className="py-20"
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
              VidhiVidhan Legal Insights
            </h2>
            <p
              className="text-sm max-w-2xl mx-auto leading-relaxed"
              style={{ color: Colors.Slate600 }}
            >
              Stay updated with the latest legal developments, expert case
              breakdowns, and thoughtful insights on evolving laws.
            </p>
          </div>

          <div className="mb-10 max-w-lg mx-auto relative">
            <Input
              type="text"
              placeholder="Search blogs by title, description, author or tags..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-4 pr-10 text-sm"
              style={{
                border: `1px solid ${Colors.Slate400}`,
                borderRadius: 6,
              }}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
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
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>

          {currentBlogs.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog: Blog) => (
                  <Card
                    key={blog.id}
                    className="h-full flex flex-col bg-white transition-all duration-300 border hover:shadow-lg"
                    style={{
                      borderColor: Colors.Slate400,
                    }}
                  >
                    <CardHeader className="p-0 overflow-hidden rounded-t-lg">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle
                        className="text-xl font-bold mb-3 line-clamp-2"
                        style={{ color: Colors.Slate700 }}
                      >
                        {blog.title}
                      </CardTitle>
                      <p
                        className="mb-4 line-clamp-3"
                        style={{ color: Colors.Slate600 }}
                      >
                        {blog.description}
                      </p>
                      <div
                        className="mt-auto text-sm"
                        style={{ color: Colors.Slate600 }}
                      >
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
                ))}
              </div>

              {renderPagination()}
            </>
          ) : (
            <div className="text-center py-12">
              <h3
                className="text-xl font-medium"
                style={{ color: Colors.Slate700 }}
              >
                No blogs found matching your search criteria
              </h3>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="mt-4 px-4 py-2 rounded-md transition-colors"
                style={{
                  backgroundColor: Colors.PrimaryColor,
                  color: Colors.White,
                }}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogsPage;
