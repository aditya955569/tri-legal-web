// Define Blog type based on actual response
export interface Blog {
    _id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    __v?: number;
    imageURL?:string
}

// Updated return type: just an array of Blog, not wrapped in { success, data }
export const getAllBlogs = async (): Promise<Blog[]> => {
    const API_URL = "https://blogs-ooi1.onrender.com";
    try {
        const response = await fetch(`${API_URL}/api/v1/blogs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }

        const blogs: Blog[] = await response.json();
        return blogs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};
