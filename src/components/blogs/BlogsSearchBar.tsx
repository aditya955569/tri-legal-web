import { Colors } from "@/styles/global";
import { Input } from "../ui/input";

const BlogsSearchBar = ({
  searchQuery,
  setSearchQuery,
  setCurrentPage,
  setPageGroupStart,
}) => {
  return (
    <div className="mb-10 max-w-lg mx-auto relative">
      <Input
        type="text"
        placeholder="Search blogs by title, description, author or tags..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
          setPageGroupStart(1);
        }}
        className="pl-4 pr-10 text-sm"
        style={{
          border: `1px solid ${Colors.Slate400}`,
          borderRadius: 6,
        }}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
        <svg
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
  );
};

export default BlogsSearchBar;
