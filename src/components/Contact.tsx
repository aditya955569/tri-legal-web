"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { inputFields } from "@/mockData/contactUsFields";
import { Colors } from "@/styles/global";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    e.target.value = onlyDigits.slice(0, 10);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    setSending(true);
    try {
      const response = await fetch(
        "https://metasharebackend.onrender.com/api/schedule-consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        if (data.errors) {
          Object.values(data.errors).forEach((errMsg: any) =>
            toast.error(errMsg)
          );
        } else {
          toast.error(
            data.message || "Failed to send message. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="py-16"
      style={{ backgroundColor: Colors.PrimaryBgColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.TextColor3 }}
          >
            Schedule Your Consultation
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: Colors.TextColor5 }}
          >
            Ready to discuss your legal needs? Contact us today for a
            confidential consultation with one of our experienced attorneys.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form Card */}
          <Card
            className="border shadow-lg"
            style={{
              borderColor: Colors.BorderLineColor2,
              backgroundColor: Colors.CardBgPrimaryColor,
            }}
          >
            <CardHeader>
              <CardTitle
                className="text-2xl"
                style={{ color: Colors.TextColor3 }}
              >
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {inputFields.map((field) => (
                    <div key={field.id} className={field.colSpan}>
                      <label
                        htmlFor={field.id}
                        className="block mb-1 text-sm"
                        style={{ color: Colors.TextColor5 }}
                      >
                        {field.label}
                      </label>
                      <Input
                        key={field.name}
                        placeholder={field.label}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            [field.name]: e.target.value,
                          }))
                        }
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        aria-label={field.label}
                        aria-required={true}
                        className="border placeholder-gray-400 transition-all duration-200"
                        style={{
                          backgroundColor: Colors.PrimaryBgColor,
                          color: Colors.TextColor3,
                          borderColor:
                            focusedField === field.name
                              ? Colors.TextColor3
                              : Colors.BorderLineColor2,
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm"
                    style={{ color: Colors.TextColor5 }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your legal matter..."
                    required
                    style={{
                      backgroundColor: Colors.PrimaryBgColor,
                      color: Colors.TextColor3,
                      borderColor:
                        focusedField === "message"
                          ? Colors.TextColor3
                          : Colors.BorderLineColor2,
                    }}
                    className="border placeholder-gray-400 min-h-32 transition-all duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  style={{
                    color: isHovered ? Colors.TextColor1 : Colors.TextColor2,
                    backgroundColor: isHovered
                      ? Colors.HoverButtonColor1
                      : Colors.SecondaryBgColor,
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-full font-semibold shadow-md"
                >
                  {sending ? "Sending..." : "Schedule Consultation"}
                </Button>
              </form>

              {status && (
                <p className="text-center text-sm text-gray-400">{status}</p>
              )}
            </CardContent>
          </Card>

          {/* Google Map */}
          <div
            className="w-full h-[300px] sm:h-[400px] lg:h-auto rounded-xl overflow-hidden shadow-lg border-2"
            style={{ borderColor: Colors.BorderLineColor1 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.6962701265033!2d80.95103768216521!3d26.870655947951146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd72fa2eae05%3A0x76513c6666d645e5!2sLal%20Kothi!5e0!3m2!1sen!2sin!4v1749842249358!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
