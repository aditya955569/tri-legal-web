import { Colors } from "@/styles/global";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const shortDescription =
    blog.content.length > 100
      ? blog.content.slice(0, 100) + "..."
      : blog.content;

  const handleClick = () => {
    navigate(`/blogPost/${blog.id}`, { state: blog });
  };

  return (
    <div className="relative group">
      <Card
        className="h-full flex flex-col bg-white border transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 rounded-2xl overflow-hidden"
        style={{
          borderColor: Colors.Slate300,
        }}
      >
        <CardHeader className="p-0">
          <div className="overflow-hidden">
            <img
              src={blog.image || "/default-blog.jpg"}
              alt={blog.title}
              className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </CardHeader>

        <CardContent className="p-6 flex-grow flex flex-col relative">
          <CardTitle
            className="text-xl font-bold mb-2 leading-tight"
            style={{ color: Colors.Slate800 }}
          >
            {blog.title}
          </CardTitle>

          <p
            className="text-sm mb-10 text-justify"
            style={{ color: Colors.Slate600 }}
          >
            {shortDescription}
          </p>

          <div
            className="text-sm pt-2 mt-auto"
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
          <div className="absolute bottom-6 right-6">
            <button
              onClick={handleClick}
              className="text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 border"
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
