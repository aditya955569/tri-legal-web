import { useRouter } from "next/router";
import { dummyBlogs } from "@/mockData/dummyBlogs"; // or fetch via API
import { Colors } from "@/styles/global";

const BlogDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = dummyBlogs.find((b) => b.id == id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-slate-600">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6">
      <h1
        className="text-3xl sm:text-5xl font-bold mb-6"
        style={{ color: Colors.Slate700 }}
      >
        {blog.title}
      </h1>
      <div className="mb-4 text-sm text-slate-500">
        By {blog.author} · {blog.date}
      </div>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-h-[400px] object-cover rounded-md mb-6"
      />
      <p
        className="text-base leading-relaxed"
        style={{ color: Colors.Slate700 }}
      >
        {blog.description}
      </p>
    </div>
  );
};

export default BlogDetailPage;
