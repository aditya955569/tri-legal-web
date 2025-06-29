import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Colors } from "@/styles/global";
import CustomizedNavigation from "../customized/CustomizedNavigation";
import { getAllBlogs } from "@/services/blogs";
import Footer from "../Footer";
import { marked } from "marked";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaFacebook, FaRegCopy, FaShareAlt } from "react-icons/fa";
import { toast } from "sonner";

const BlogDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareRef = useRef(null);

  useEffect(() => {
    if (location.state) return;

    const fetchBlog = async () => {
      try {
        const allBlogs = await getAllBlogs();
        const foundBlog = allBlogs.find((b) => b._id === id);

        if (foundBlog) {
          setBlog({
            id: foundBlog._id,
            title: foundBlog.title,
            content: foundBlog.content,
            image: foundBlog.image ?? "",
            authorName: foundBlog.authorName,
            date: new Date(foundBlog.createdAt).toLocaleDateString(),
          });
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, location.state]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const blogUrl = `https://metasharebackend.onrender.com/share/blog/${blog?.id}`;

  const handleShare = {
    whatsapp: () => {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(blogUrl)}`,
        "_blank"
      );
      setShowShareMenu(false);
    },
    facebook: () => {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          blogUrl
        )}`,
        "_blank"
      );
      setShowShareMenu(false);
    },
    twitter: () => {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          blogUrl
        )}&text=${encodeURIComponent(blog.title)}`,
        "_blank"
      );
      setShowShareMenu(false);
    },
    copy: async () => {
      try {
        await navigator.clipboard.writeText(blogUrl);
        toast.success("URL copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
      setShowShareMenu(false);
    },
  };
  console.log("loading loading : ", loading);
  return (
    <>
      <CustomizedNavigation />

      <section
        className="py-28"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.LightGrayBackground}, ${Colors.White}, ${Colors.Slate400}11)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <>
                <div className="animate-pulse">
                  {/* Title Skeleton */}
                  <div className="h-10 sm:h-12 bg-slate-300 rounded w-3/4 mb-6"></div>

                  {/* Author & Date Row */}
                  <div className="flex items-center justify-between flex-wrap mb-6">
                    <div className="flex gap-2">
                      <div className="h-4 w-24 bg-slate-300 rounded"></div>
                      <div className="h-4 w-16 bg-slate-300 rounded"></div>
                    </div>
                    <div className="h-8 w-8 bg-slate-300 rounded-full"></div>
                  </div>

                  <hr className="border-t border-slate-300 mb-8" />

                  {/* Paragraph Skeleton Lines */}
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`line-top-${i}`}
                        className="h-4 bg-slate-200 rounded w-full"
                      ></div>
                    ))}

                    <br />

                    {[...Array(2)].map((_, i) => (
                      <div
                        key={`line-mid-${i}`}
                        className="h-4 bg-slate-200 rounded w-full"
                      ></div>
                    ))}

                    {/* Varying Width Lines */}
                    {["w-5/6", "w-2/3", "w-3/4", "w-2/4"].map((width, i) => (
                      <div
                        key={`line-bottom-${i}`}
                        className={`h-4 bg-slate-200 rounded ${width}`}
                      ></div>
                    ))}
                  </div>

                  <hr className="border-t border-slate-200 mt-12" />
                </div>
              </>
            ) : blog ? (
              <>
                <h1
                  className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4"
                  style={{ color: Colors.Slate700 }}
                >
                  {blog.title}
                </h1>
                <div className="flex items-center justify-between flex-wrap mb-6">
                  <div className="text-sm sm:text-base text-slate-500 flex items-center gap-2">
                    <span>
                      By <span className="font-medium">{blog.authorName}</span>
                    </span>
                    <span className="mx-2">•</span>
                    <span>{blog.date}</span>
                  </div>

                  <div className="relative mt-2 sm:mt-0" ref={shareRef}>
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium border rounded-md shadow bg-white hover:bg-gray-100 transition"
                    >
                      <FaShareAlt size={14} />
                    </button>

                    {showShareMenu && (
                      <div className="absolute top-10 right-0 bg-white border rounded-md shadow-md z-30 p-2 min-w-[160px]">
                        <div
                          onClick={handleShare.whatsapp}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <FaWhatsapp size={16} color="#25D366" />
                          <span>WhatsApp</span>
                        </div>
                        <div
                          onClick={handleShare.facebook}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <FaFacebook size={16} color="#1877F2" />
                          <span>Facebook</span>
                        </div>
                        <div
                          onClick={handleShare.copy}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <FaRegCopy size={16} color="#555" />
                          <span>Copy URL</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <hr className="border-t border-slate-300 mb-8" />
                {/* <img
                  src={blog.image || "/default-blog.jpg"}
                  alt={blog.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <br />
                <hr className="border-t border-slate-300 mb-8" /> <br /> */}
                <article
                  className="prose prose-lg sm:prose-xl max-w-none"
                  style={{
                    color: Colors.Slate700,
                    lineHeight: "1.4", // Smaller line spacing (default is ~1.75)
                  }}
                  dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
                />

                <hr className="border-t border-slate-200 mt-12" />
              </>
            ) : (
              <h2 className="text-2xl font-semibold text-center text-slate-500 py-24">
                Blog not found
              </h2>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
