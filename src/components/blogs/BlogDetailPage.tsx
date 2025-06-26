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

  if (loading) {
    return (
      <div className="text-center py-24 bg-slate-100 min-h-[60vh]">
        <h2 className="text-xl text-slate-500">Loading blog post...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-24 bg-slate-100 min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-slate-500">
          Blog not found
        </h2>
      </div>
    );
  }

  const blogUrl = `${window.location.origin}/blogPost/${blog.id}`;

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

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content.slice(0, 100)} />
        <meta property="og:image" content={blog.image || "/default-blog.jpg"} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.content.slice(0, 100)} />
        <meta
          name="twitter:image"
          content={blog.image || "/default-blog.jpg"}
        />
      </Helmet>

      <CustomizedNavigation />

      <section
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.LightGrayBackground}, ${Colors.White}, ${Colors.Slate400}11)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4"
              style={{ color: Colors.Slate700 }}
            >
              {blog.title}
            </h1>

            {/* Author and Share Row */}
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

            <article
              className="prose prose-lg sm:prose-xl max-w-none"
              style={{ color: Colors.Slate700 }}
              dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
            />

            <hr className="border-t border-slate-200 mt-12" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
