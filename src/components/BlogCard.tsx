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
    <div className="relative group w-full">
      <Card
        className="h-full flex flex-col bg-white border transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 rounded-2xl overflow-hidden"
        style={{ borderColor: Colors.Slate300 }}
      >
        {/* Image Section */}
        <CardHeader className="p-0">
          <div className="overflow-hidden">
            <img
              src={blog.image || "/default-blog.jpg"}
              alt={blog.title}
              className="w-full h-44 sm:h-52 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
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
