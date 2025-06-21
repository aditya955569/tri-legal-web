import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Colors } from "@/styles/global";
import CustomizedNavigation from "../customized/CustomizedNavigation";
import CustomizedFooter from "../customized/CustomizedFooter";
import { getAllBlogs } from "@/services/blogs";

const BlogDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);

  console.log("blog blog blog : ", blog);

  useEffect(() => {
    if (location.state) return; // Blog was already passed from navigation

    const fetchBlog = async () => {
      try {
        const allBlogs = await getAllBlogs();
        const foundBlog = allBlogs.find((b) => b._id === id);

        if (foundBlog) {
          setBlog({
            id: foundBlog._id,
            title: foundBlog.title,
            content: foundBlog.content,
            author: foundBlog.authorName,
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

  return (
    <>
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

            <div className="text-sm sm:text-base text-slate-500 flex flex-wrap items-center gap-2 mb-6">
              <span>
                By{" "}
                <span className="font-medium text-slate-600">
                  {blog.authorName}
                </span>
              </span>
              <span className="mx-2">•</span>
              <span>{blog.date}</span>
            </div>

            <hr className="border-t border-slate-300 mb-8" />

            <article
              className="prose prose-lg sm:prose-xl max-w-none"
              style={{ color: Colors.Slate700 }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <hr className="border-t border-slate-200 mt-12" />
          </div>
        </div>
      </section>
      <CustomizedFooter />
    </>
  );
};

export default BlogDetailPage;
