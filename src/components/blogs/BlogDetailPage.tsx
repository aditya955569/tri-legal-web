import { useParams } from "react-router-dom";
import { dummyBlogs } from "@/mockData/dummyBlogs";
import { Colors } from "@/styles/global";
import CustomizedNavigation from "../customized/CustomizedNavigation";
import CustomizedFooter from "../customized/CustomizedFooter";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = dummyBlogs.find((b) => b.id == id);

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
            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4"
              style={{ color: Colors.Slate700 }}
            >
              {blog.title}
            </h1>

            {/* Author and Date */}
            <div className="text-sm sm:text-base text-slate-500 flex flex-wrap items-center gap-2 mb-6">
              <span>
                By{" "}
                <span className="font-medium text-slate-600">
                  {blog.author}
                </span>
              </span>
              <span className="mx-2">•</span>
              <span>{blog.date}</span>
            </div>

            {/* Divider */}
            <hr className="border-t border-slate-300 mb-8" />

            {/* Blog Content */}
            <article
              className="prose prose-lg sm:prose-xl max-w-none"
              style={{ color: Colors.Slate700 }}
            >
              <p>{blog.description}</p>
            </article>

            {/* Bottom Divider */}
            <hr className="border-t border-slate-200 mt-12" />
          </div>
        </div>
      </section>
      <CustomizedFooter />
    </>
  );
};

export default BlogDetailPage;
