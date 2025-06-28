export interface InternDetails {
  name: string;
  email: string;
  college: string;
  location: string;
  year: string;
  resume: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const postInternshipDetails = async (
  payload: InternDetails
): Promise<ApiResponse> => {
  const API_URL = "https://blogs-ooi1.onrender.com";

  try {
    const response = await fetch(`${API_URL}/api/v1/interns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to submit internship application: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();

    return {
      success: true,
      message: "Application submitted successfully",
      data: result,
    };
  } catch (error: any) {
    console.error("Error submitting internship application:", error);
    return {
      success: false,
      message: error.message || "Something went wrong while submitting",
    };
  }
};
