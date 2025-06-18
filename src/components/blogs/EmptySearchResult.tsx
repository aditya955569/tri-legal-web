import { Colors } from "@/styles/global";

interface EmptySearchResultProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const EmptySearchResult: React.FC<EmptySearchResultProps> = ({
  setSearchQuery,
  setCurrentPage,
}) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium" style={{ color: Colors.Slate700 }}>
        No blogs found matching your search criteria
      </h3>
      <button
        onClick={() => {
          setSearchQuery("");
          setCurrentPage(1);
        }}
        className="mt-4 px-4 py-2 rounded-md transition-colors"
        style={{
          backgroundColor: Colors.PrimaryColor,
          color: Colors.White,
        }}
      >
        Clear search
      </button>
    </div>
  );
};

export default EmptySearchResult;
