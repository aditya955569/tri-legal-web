"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Colors } from "@/styles/global";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import Footer from "./Footer";
import { postInternshipDetails } from "@/services/internship";

const Internship = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    location: "",
    year: "",
    resume: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const studyYears = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
    "Fifth Year",
    "Graduate (LLB)",
    "Post Graduate (LLM)",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const driveRegex = /^https:\/\/drive\.google\.com\/.+$/;

    const emptyFields = Object.entries(formData).filter(
      ([, value]) => !value.trim()
    );

    if (emptyFields.length > 0) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!driveRegex.test(formData.resume)) {
      toast.error("Please enter a valid Google Drive link.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        college: formData.college,
        location: formData.location,
        year: formData.year,
        resume: formData.resume,
      };
      const response = await postInternshipDetails(payload);

      if (response.success) {
        toast.success(
          "Thank you! Your internship application has been received."
        );
        setFormData({
          name: "",
          email: "",
          college: "",
          location: "",
          year: "",
          resume: "",
        });
      } else {
        toast.error(
          response.message || "Failed to submit application. Try again later."
        );
      }
    } catch (error) {
      toast.error("There was an error submitting your application.");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    { name: "name", label: "Full Name", placeholder: "Your full name" },
    { name: "email", label: "Email", placeholder: "example@domain.com" },
    { name: "college", label: "College Name", placeholder: "Your college" },
    { name: "location", label: "Location", placeholder: "City, State" },
    {
      name: "resume",
      label: "Resume (Google Drive link)",
      placeholder: "https://drive.google.com/...",
    },
  ];

  return (
    <div>
      <CustomizedNavigation />

      <section
        className="min-h-screen px-6 py-28 flex items-center justify-center"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.PrimaryColorLight}11, ${Colors.White})`,
        }}
      >
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">
            <h2
              className="text-4xl font-bold"
              style={{ color: Colors.Slate700 }}
            >
              VidhiVidh Internship Program – Lucknow
            </h2>

            <p className="text-base" style={{ color: Colors.Slate600 }}>
              At <strong>VidhiVidh</strong>, we are committed to mentoring and
              developing future legal professionals...
            </p>

            <p className="text-base" style={{ color: Colors.Slate600 }}>
              Each intern is paired with a mentor who guides their learning...
            </p>

            <h4
              className="font-semibold text-lg mt-4"
              style={{ color: Colors.Slate700 }}
            >
              Post-Internship Requirements
            </h4>
            <ul
              className="list-disc pl-6 text-sm"
              style={{ color: Colors.Slate600 }}
            >
              <li>Two-page internship report</li>
              <li>Mandatory presentation (topic provided by mentor)</li>
              <li>Optional: Academic paper submission</li>
              <li>Completion of Internship Finalization Form</li>
              <li>Internship Certificate upon completion</li>
            </ul>

            <h4
              className="font-semibold text-lg mt-4"
              style={{ color: Colors.Slate700 }}
            >
              Dress Code
            </h4>
            <ul
              className="list-disc pl-6 text-sm"
              style={{ color: Colors.Slate600 }}
            >
              <li>Females: Semi-formal western or Indian wear</li>
              <li>Males: Trousers, collared shirts, and jackets</li>
              <li>No jeans or casual wear except on 2nd/4th Saturdays</li>
            </ul>

            <h4
              className="font-semibold text-lg mt-4"
              style={{ color: Colors.Slate700 }}
            >
              Office Timings
            </h4>
            <p className="text-sm" style={{ color: Colors.Slate600 }}>
              10:00 AM to 7:00 PM | Saturdays working (except 2nd and 4th)
            </p>

            <h4
              className="font-semibold text-lg mt-4"
              style={{ color: Colors.Slate700 }}
            >
              Do's & Don'ts
            </h4>
            <ul
              className="list-disc pl-6 text-sm"
              style={{ color: Colors.Slate600 }}
            >
              <li>Bring your own laptop</li>
              <li>No pen drives/USBs allowed</li>
              <li>Confidential data must not be shared externally</li>
            </ul>

            <h4
              className="font-semibold text-lg mt-4"
              style={{ color: Colors.Slate700 }}
            >
              Stipend
            </h4>
            <p className="text-sm" style={{ color: Colors.Slate600 }}>
              This is an unpaid internship. However, exceptional performance may
              lead to job opportunities at VidhiVidh.
            </p>

            <h4
              className="font-semibold text-lg mt-4"
              style={{ color: Colors.Slate700 }}
            >
              What We Offer at VidhiVidh
            </h4>
            <ul
              className="list-disc pl-6 text-sm"
              style={{ color: Colors.Slate600 }}
            >
              <li>
                <span
                  className="font-semibold text-sm mt-4"
                  style={{ color: Colors.Slate700 }}
                >
                  Certificate of Completion:
                </span>{" "}
                Issued to all interns upon successful completion of the program.
              </li>
              <li>
                <span
                  className="font-semibold text-sm mt-4"
                  style={{ color: Colors.Slate700 }}
                >
                  Practical Exposure:{" "}
                </span>
                Hands-on legal experience through active participation in
                real-world assignments.
              </li>
              <li>
                <span
                  className="font-semibold text-sm mt-4"
                  style={{ color: Colors.Slate700 }}
                >
                  Freedom to Choose:
                </span>{" "}
                Interns have the autonomy to select their preferred area of
                legal practice and collaborate with relevant professionals at
                VidhiVidh.
              </li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-1/2 flex justify-center items-start">
            <Card className="w-full max-w-lg border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle
                  className="text-3xl font-bold"
                  style={{ color: Colors.Slate700 }}
                >
                  Apply Now
                </CardTitle>
                <p
                  className="text-base mt-2 max-w-lg mx-auto"
                  style={{ color: Colors.Slate600 }}
                >
                  Submit your application for a chance to intern with us.
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium mb-1"
                        style={{ color: Colors.Slate600 }}
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
                        className="border"
                        style={{ borderColor: Colors.Slate400 }}
                      />
                    </div>
                  ))}

                  {/* Year of Study Dropdown */}
                  <div>
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium mb-1"
                      style={{ color: Colors.Slate600 }}
                    >
                      Year of Study
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-[0.625rem] rounded-md bg-white text-sm font-normal border outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition duration-200"
                      style={{
                        color: Colors.Slate700,
                        borderColor: Colors.Slate400,
                      }}
                    >
                      <option value="">-- Select Year --</option>
                      {studyYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full font-semibold shadow-md"
                    style={{
                      backgroundColor: Colors.PrimaryColor,
                      color: Colors.White,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        Colors.PrimaryColorHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        Colors.PrimaryColor)
                    }
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internship;
