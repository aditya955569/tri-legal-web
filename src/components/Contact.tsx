"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
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
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_KEY ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_KEY ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        toast.error("Email service is not configured correctly.");
        setSending(false);
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "ahzamnaseem@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputFields = [
    {
      id: "firstName",
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      required: true,
      colSpan: "sm:col-span-1",
    },
    {
      id: "lastName",
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      required: true,
      colSpan: "sm:col-span-1",
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Email Address",
      required: true,
      colSpan: "sm:col-span-2",
    },
    {
      id: "phone",
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
      colSpan: "sm:col-span-2",
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: Colors.White }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.Slate700 }}
          >
            Schedule Your Consultation
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: Colors.Slate600 }}
          >
            Ready to discuss your legal needs? Contact us today for a
            confidential consultation with one of our experienced attorneys.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle
                className="text-2xl"
                style={{ color: Colors.Slate700 }}
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
                        style={{ color: Colors.Slate600 }}
                      >
                        {field.label}
                      </label>
                      <Input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        onInput={
                          field.name === "phone" ? handlePhoneInput : undefined
                        }
                        className="border"
                        style={{ borderColor: Colors.Slate400 }}
                        required={field.required}
                        inputMode={
                          field.name === "phone" ? "numeric" : undefined
                        }
                        pattern={field.name === "phone" ? "[0-9]*" : undefined}
                        maxLength={field.name === "phone" ? 10 : undefined}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm"
                    style={{ color: Colors.Slate600 }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your legal matter..."
                    className="border min-h-32"
                    style={{ borderColor: Colors.Slate400 }}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
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
                  {sending ? "Sending..." : "Schedule Consultation"}
                </Button>
              </form>

              {status && (
                <p className="text-center text-sm text-gray-500">{status}</p>
              )}
            </CardContent>
          </Card>

          {/* Google Map */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-auto rounded-xl overflow-hidden shadow-lg">
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
