import React from "react";
import { motion } from "framer-motion";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import Footer from "./Footer";
import { Colors } from "../styles/global";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Section = ({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    custom={index}
    className="scroll-mt-20"
  >
    <h2
      className={`text-xl font-semibold mt-8 mb-2 text-gray-800 border-l-4 ${Colors.PrimaryColorLight} pl-3`}
    >
      {title}
    </h2>
    <p className="text-gray-700 text-[14px] leading-relaxed mb-4">{children}</p>
  </motion.div>
);

const privacySections = [
  {
    title: "1. Purpose of Policy",
    content:
      "Our firm’s privacy policy outlines how we collect, use, and safeguard personal data gathered through our website and services.",
  },
  {
    title: "2. Legal Compliance",
    content:
      "This policy follows the provisions of the Information Technology Act, 2000, and associated rules.",
  },
  {
    title: "3. Types of Data Collected",
    content:
      "We collect personal details like your name, job title, address, contact number, email, and any information shared voluntarily.",
  },
  {
    title: "4. Sensitive Data",
    content:
      "Certain sensitive information such as health or legal background is collected with your explicit consent and only when relevant.",
  },
  {
    title: "5. Data from Third Parties",
    content:
      "Information may also be obtained from external sources like employers, public databases, or government bodies.",
  },
  {
    title: "6. Use of Information",
    content:
      "We use your data to deliver services, improve user experience, process payments, ensure compliance, and for legitimate business purposes.",
  },
  {
    title: "7. Confidentiality Assurance",
    content:
      "Your personal data is protected and shared only when necessary with strict confidentiality safeguards.",
  },
  {
    title: "8. Marketing and Communication",
    content:
      "We will only send marketing content if you have given prior consent and you may opt out at any time.",
  },
  {
    title: "9. No Sale of Data",
    content:
      "We do not sell or lease personal information to any third parties.",
  },
  {
    title: "10. Permitted Sharing",
    content:
      "Data may be shared with affiliates, service providers, legal bodies, or courts for compliance or operational reasons.",
  },
  {
    title: "11. Accuracy of Data",
    content:
      "Users are responsible for keeping their shared information accurate and updated.",
  },
  {
    title: "12. Access and Updates",
    content:
      "We provide options to access, review, and request changes to your personal information upon verification.",
  },
  {
    title: "13. Data Retention",
    content:
      "Information is stored securely in both electronic and physical formats for as long as required legally or operationally.",
  },
  {
    title: "14. Force Majeure Disclaimer",
    content:
      "We are not liable for data breaches caused by unforeseen events beyond our control such as natural disasters or cyberattacks.",
  },
  {
    title: "15. Consent Withdrawal",
    content:
      "You may withdraw consent at any time via email, which may affect our ability to provide services that require that data.",
  },
  {
    title: "16. Right to Deletion",
    content:
      "You may request data deletion, though some data may be retained for legal reasons.",
  },
  {
    title: "17. Limited Deletion Capability",
    content:
      "Certain legal obligations may prevent us from deleting some information even upon request.",
  },
  {
    title: "18. Data Protection Commitment",
    content:
      "We are committed to protecting your data through strong technical and organizational measures.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="my-4">
        <CustomizedNavigation />
      </div>
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl px-8 py-10 border border-gray-200 text-sm md:text-base">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-3xl font-extrabold text-center ${Colors.PrimaryColorLight} mb-6`}
          >
            Privacy Policy
          </motion.h1>

          {privacySections.map((section, index) => (
            <Section key={index} index={index + 1} title={section.title}>
              {section.content}
            </Section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
