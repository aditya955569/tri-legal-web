"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Colors } from "@/styles/global";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import Footer from "./Footer";
import { domains, upDistricts } from "@/mockData/teamWithUs";
import { createAdvocateDetails } from "@/services/joinUs";

const TeamWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    registration: "",
    district: "",
    domain: "",
    state: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const [otherDomain, setOtherDomain] = useState("");

  const fields = [
    { name: "name", label: "Full Name", placeholder: "Your full name" },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "10-digit mobile number",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "example@domain.com",
    },
    { name: "address", label: "Full Address", placeholder: "Your address" },
    { name: "pincode", label: "Pincode", placeholder: "6-digit postal code" },
    {
      name: "registration",
      label: "Bar Council Reg. Number",
      placeholder: "UP/1234/2020",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "pincode") {
      if (name === "phone" && (value.length > 10 || /\D/.test(value))) return;
      if (name === "pincode" && (value.length > 6 || /\D/.test(value))) return;
    }

    // if (name === "registration") {
    //   // Remove anything not A-Z or 0-9, force uppercase
    //   let input = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    //   let formatted = "";

    //   // Only allow 2 letters first
    //   const prefix = input.slice(0, 2);
    //   if (!/^[A-Z]{0,2}$/.test(prefix)) return;

    //   if (input.length <= 2) {
    //     formatted = prefix;
    //   } else if (input.length <= 6) {
    //     const digits1 = input.slice(2, 6);
    //     if (!/^\d*$/.test(digits1)) return;
    //     formatted = `${prefix}/${digits1}`;
    //   } else if (input.length <= 10) {
    //     const digits1 = input.slice(2, 6);
    //     const digits2 = input.slice(6, 10);
    //     if (!/^\d{4}$/.test(digits1) || !/^\d*$/.test(digits2)) return;
    //     formatted = `${prefix}/${digits1}/${digits2}`;
    //   } else {
    //     return; // Prevent input longer than pattern
    //   }

    //   setFormData((prev) => ({ ...prev, [name]: formatted }));
    //   setErrors((prev) => ({ ...prev, [name]: "" }));
    //   return;
    // }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const pincodeRegex = /^\d{6}$/;
    const registrationRegex = /^UP\/\d{4}\/\d{4}$/;

    const newErrors: Record<string, string> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits starting with 6-9";
    }

    if (!pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }

    if (!registrationRegex.test(formData.registration)) {
      newErrors.registration = "Format should be UP/1234/2020";
    }

    if (formData.domain === "Others" && !otherDomain.trim()) {
      newErrors.domain = "Please enter your domain";
    }

    if (!formData.district.trim()) {
      newErrors.district = "Please select your district";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const finalData = {
      ...formData,
      domain: formData.domain === "Others" ? otherDomain : formData.domain,
    };

    setSubmitting(true);
    try {
      console.log("formData is : ", formData);
      const response = await createAdvocateDetails(finalData);
      console.log("response after submitting details : ", response);
      if (response.success) {
        toast.success("Thank you for joining the network!");
      } else {
        toast.error(
          "Submission failed. Please try again later or contact support if the issue persists."
        );
      }

      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        pincode: "",
        registration: "",
        district: "",
        domain: "",
        state: "",
      });
      setOtherDomain("");
      setErrors({});
    } catch (error) {
      toast.error("Submission failed. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <CustomizedNavigation />

      <section className="min-h-screen px-6 py-28 flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2
              className="text-4xl font-bold"
              style={{ color: Colors.TextColor2 }}
            >
              Connect With VidhiVidh – Advocate Network
            </h2>
            <p className="text-base" style={{ color: Colors.TextColor6 }}>
              VidhiVidh is building a trusted and professional legal network of
              advocates across Uttar Pradesh. If you're practicing law and want
              to contribute, collaborate, and grow, join our professional
              advocate community today.
            </p>
            <p className="text-base" style={{ color: Colors.TextColor6 }}>
              Your verified information helps us create a strong legal community
              where trust and transparency thrive. All fields below are
              mandatory and must follow the required format.
            </p>
          </div>

          <div
            className="w-full lg:w-1/2 flex justify-center items-center"
            // style={{ backgroundColor: Colors.CardBgPrimaryColor }}
          >
            <Card
              className="w-full max-w-lg border-0 shadow-xl"
              style={{ backgroundColor: Colors.CardBgPrimaryColor }}
            >
              <CardHeader className="text-center">
                <CardTitle
                  className="text-3xl font-bold"
                  style={{ color: Colors.TextColor3 }}
                >
                  Join Our Advocate Network
                </CardTitle>
                <p
                  className="text-base mt-2"
                  style={{ color: Colors.TextColor5 }}
                >
                  All fields are mandatory.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium mb-1"
                        style={{ color: Colors.TextColor5 }}
                      >
                        {field.label}
                      </label>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className={`border ${
                          errors[field.name]
                            ? "border-red-500"
                            : "border-slate-400"
                        }`}
                        inputMode={
                          ["phone", "pincode"].includes(field.name)
                            ? "numeric"
                            : "text"
                        }
                      />
                      {errors[field.name] && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Domain Dropdown */}

                  {/* <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: Colors.TextColor5 }}
                    >
                      District
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          district: e.target.value,
                        }));
                        setErrors((prev) => ({ ...prev, district: "" }));
                      }}
                      required
                      className={`w-full px-3 py-[0.625rem] rounded-md bg-white text-sm font-normal
      ${errors.district ? "border-red-500" : "border-slate-400"}
      border outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition duration-200`}
                      style={{
                        color: Colors.Slate700,
                        fontSize: "0.875rem",
                      }}
                    >
                      <option value="">-- Select District --</option>
                      {upDistricts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.district}
                      </p>
                    )}
                  </div> */}

                  <div>
                    {/* District Input Field */}
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: Colors.TextColor5 }}
                    >
                      District
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          district: e.target.value,
                        }));
                        setErrors((prev) => ({ ...prev, district: "" }));
                      }}
                      required
                      className={`w-full px-3 py-[0.625rem] rounded-md text-sm font-normal
    ${errors.district ? "border-red-500" : "border-slate-400"}
    border outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition duration-200`}
                      style={{
                        color: Colors.TextColor6,
                        fontSize: "0.875rem",
                        backgroundColor: Colors.InputFieldBgColor,
                      }}
                      placeholder="Enter District"
                    />
                    {errors.district && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.district}
                      </p>
                    )}

                    {/* State Input Field */}
                    <label
                      className="block text-sm font-medium mb-1 mt-4"
                      style={{ color: Colors.TextColor5 }}
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }));
                        setErrors((prev) => ({ ...prev, state: "" }));
                      }}
                      required
                      className={`w-full px-3 py-[0.625rem] rounded-md text-sm font-normal
    ${errors.state ? "border-red-500" : "border-slate-400"}
    border outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition duration-200`}
                      style={{
                        color: Colors.TextColor6,
                        fontSize: "0.875rem",
                        backgroundColor: Colors.InputFieldBgColor,
                      }}
                      placeholder="Enter State"
                    />
                    {errors.state && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: Colors.TextColor5 }}
                    >
                      Domain
                    </label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          domain: e.target.value,
                        }));
                        setErrors((prev) => ({ ...prev, domain: "" }));
                      }}
                      required
                      className={`w-full px-3 py-[0.625rem] rounded-md text-sm font-normal
      ${errors.domain ? "border-red-500" : "border-slate-400"}
      border outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition duration-200`}
                      style={{
                        color: Colors.InputFieldPlaceholderTextColor,
                        fontSize: "0.875rem", // same as text-sm
                        backgroundColor: Colors.InputFieldBgColor,
                      }}
                    >
                      <option value="" style={{ color: Colors.TextColor6 }}>
                        -- Select Domain --
                      </option>
                      {domains.map((domain, index) => (
                        <option
                          key={`domain-${index}`}
                          value={domain}
                          style={{ color: Colors.TextColor6 }}
                        >
                          {domain}
                        </option>
                      ))}
                    </select>
                    {errors.domain && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.domain}
                      </p>
                    )}
                  </div>

                  {/* Other Domain Field (conditionally shown) */}
                  {formData.domain === "Others" && (
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        style={{ color: Colors.TextColor5 }}
                      >
                        Enter Other Domain
                      </label>
                      <Input
                        value={otherDomain}
                        onChange={(e) => {
                          setOtherDomain(e.target.value);
                          setErrors((prev) => ({ ...prev, domain: "" }));
                        }}
                        placeholder="Your domain"
                        className={`border ${
                          errors.domain ? "border-red-500" : "border-slate-400"
                        }`}
                        style={{
                          color: Colors.TextColor5,
                          fontSize: "0.875rem",
                          borderRadius: "0.375rem",
                        }}
                      />
                      {errors.domain && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.domain}
                        </p>
                      )}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full font-semibold shadow-md"
                    style={{
                      backgroundColor: Colors.ButtonBgColor1,
                      color: Colors.TextColor2,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        Colors.HoverButtonColor1)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        Colors.ButtonBgColor1)
                    }
                  >
                    {submitting ? "Submitting..." : "Submit Details"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TeamWithUs;
