import { Colors } from "@/styles/global";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaShareAlt, FaFacebook, FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareRef = useRef(null);

  const shortDescription =
    blog.content.length > 100
      ? blog.content.slice(0, 100) + "..."
      : blog.content;

  const handleClick = () => {
    navigate(`/blogPost/${blog.id}`, { state: blog });
  };

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

  // ✅ Close share menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative group w-full cursor-pointer">
      <Card
        className="h-full flex flex-col bg-white border transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 rounded-2xl overflow-hidden"
        style={{ borderColor: Colors.Slate300 }}
      >
        {/* Image Section */}
        {/* <CardHeader className="p-0 relative">
          <div className="overflow-hidden relative">
            <img
              src={blog.image || "/default-blog.jpg"}
              alt={blog.title}
              className="w-full object-scale-down sm:h-52 md:h-56 transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-2 right-2 z-20" ref={shareRef}>
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 rounded-full bg-white hover:bg-gray-100 shadow"
                aria-label="Share"
              >
                <Share2 size={18} />
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
        </CardHeader> */}

        <CardHeader className="p-0 relative">
          <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
            <img
              src={blog.image || "/default-blog.jpg"}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* ✅ Share Button at top-right of image */}
            <div className="absolute top-2 right-2 z-20" ref={shareRef}>
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 rounded-full bg-white hover:bg-gray-100 shadow"
                aria-label="Share"
              >
                <FaShareAlt size={18} color="#6366F1" />
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
        </CardHeader>

        {/* Content Section */}
        <CardContent className="p-4 sm:p-6 flex-grow flex flex-col relative">
          <CardTitle
            className="text-lg sm:text-xl font-bold mb-2 leading-snug"
            style={{ color: Colors.Slate800 }}
          >
            {blog.title}
          </CardTitle>

          <p
            className="text-sm sm:text-base text-justify mb-10"
            style={{ color: Colors.Slate600 }}
          >
            {shortDescription}
          </p>

          {/* Author Info */}
          <div
            className="text-xs sm:text-sm pt-2 mt-auto"
            style={{ color: Colors.Slate500 }}
          >
            <span className="block font-medium">{blog.authorName}</span>
            <span>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Read More Button */}
          <div className="absolute bottom-4 right-4">
            <button
              onClick={handleClick}
              className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md border transition-all duration-300"
              style={{
                backgroundColor: Colors.PrimaryColor,
                color: Colors.White,
                borderColor: Colors.PrimaryColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = Colors.White;
                e.currentTarget.style.color = Colors.PrimaryColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = Colors.PrimaryColor;
                e.currentTarget.style.color = Colors.White;
              }}
            >
              Read More
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
