import { Colors } from "@/styles/global";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const shortDescription =
    blog.description.length > 20
      ? blog.description.slice(0, 20) + "..."
      : blog.description;

  const handleClick = () => {
    // navigate(`/blogPost/${blog.id}`);
    navigate(`/blogPost/${blog.id}`, { state: blog });
  };

  return (
    <div className="relative">
      <Card
        className="h-full flex flex-col bg-white transition-all duration-300 border hover:shadow-xl rounded-lg overflow-hidden"
        style={{
          borderColor: Colors.Slate400,
        }}
      >
        <CardHeader className="p-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
          />
        </CardHeader>

        <CardContent className="p-6 flex-grow flex flex-col relative">
          <CardTitle
            className="text-xl font-bold mb-3"
            style={{ color: Colors.Slate700 }}
          >
            {blog.title}
          </CardTitle>

          <p className="text-sm mb-10" style={{ color: Colors.Slate600 }}>
            {shortDescription}
          </p>

          {/* Author & Date */}
          <div
            className="text-sm pt-2 mt-auto"
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

          {/* Read More Button - positioned bottom right */}
          <div className="absolute bottom-6 right-6">
            <button
              className="text-sm font-medium px-4 py-2 rounded-md shadow hover:shadow-md transition-all duration-300"
              onClick={handleClick}
              style={{
                backgroundColor: Colors.PrimaryColor,
                color: Colors.White,
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
