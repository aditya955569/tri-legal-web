export interface AdvocateDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  registration: string;
  district: string;
  domain: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const createAdvocateDetails = async (
  data: AdvocateDetails
): Promise<ApiResponse> => {
  const API_URL = "https://blogs-ooi1.onrender.com/api/v1/advocates";

  try {
    const payload = {
      name: data.name,
      phoneNumber: data.phone,
      email: data.email,
      pincode: data.pincode,
      bcrn: data.registration,
      district: data.district,
      domain: data.domain,
    };

    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to post advocate details: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return {
      success: true,
      message: "Data submitted successfully",
      data: result,
    };
  } catch (error: any) {
    console.error("Error submitting advocate details:", error);
    return {
      success: false,
      message: error.message || "Something went wrong while submitting",
    };
  }
};
