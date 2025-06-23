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
    <p className="text-gray-700 text-[15px] leading-relaxed mb-4">{children}</p>
  </motion.div>
);

const termsSections = [
  {
    title: "1. Regulatory Compliance",
    content:
      "In accordance with the Bar Council of India, this website does not solicit clients or advertise legal services. The content provided is intended solely for informational purposes and should not be construed as promotional material.",
  },
  {
    title: "2. User Acknowledgement",
    content:
      "You affirm that you are visiting this website voluntarily for informational purposes and not due to any form of solicitation or invitation by our firm or its members.",
  },
  {
    title: "3. No Legal Advice Offered",
    content:
      "Nothing contained on this site should be interpreted as legal advice. Transmission of information from this website does not create an attorney-client relationship. You should contact us further for professional legal advice regarding your specific situation",
  },
  {
    title: "4. External Links Disclaimer",
    content:
      "This site may contain links to third-party websites. We provide these links for your convenience, but we do not endorse or assume responsibility for any content or practices of these external sites.",
  },
  {
    title: "5. Modifications to Terms",
    content:
      "We reserve the right to revise these Terms and Conditions at any time without notice. Your continued use of the website signifies your acceptance of the updated terms. Please review this page periodically for changes.",
  },
  {
    title: "6. Content Accuracy",
    content:
      "The information on this site is published in good faith and for general awareness. We do not guarantee its completeness, reliability, or accuracy. Legal information can become outdated; please verify content before use.",
  },
  {
    title: "7. Intellectual Property Rights",
    content:
      "All content on this website—including text, graphics, logos, layout, and code—is protected by applicable intellectual property laws. You may not reproduce, store, distribute, or use this material for commercial purposes without our express written consent.",
  },
  {
    title: "8. Trademarks and Logos",
    content: (
      <>
        Logos, service marks, and trade names displayed on this site are{" "}
        property of <strong> VIDHIVIDH </strong> exclusively. No user is granted
        any license or right to use these without prior written permission.
      </>
    ),
  },
  {
    title: "9. Linking Policy",
    content:
      "Linking to this website without our prior consent is strictly prohibited. Unauthorized linking may result in legal consequences or removal of access.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "Our firm shall not be liable for any loss, direct or indirect, resulting from the use of this website or its contents. This includes damages arising from reliance on information, or errors or omissions in site content.",
  },
  {
    title: "11. Data and Privacy",
    content: (
      <>
        Any data or personal information shared through this website will be
        managed in accordance with our{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>
        . By using this site, you consent to our data handling practices.
      </>
    ),
  },
  {
    title: "12. Email and Notifications",
    content:
      "If you contact us through email or forms, you consent to receive informational messages related to our firm. You can opt out of communication at any time by following instructions in the emails.",
  },
  {
    title: "13. Legal Jurisdiction",
    content:
      "These Terms shall be governed by the laws of India. All disputes arising under or related to these terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.",
  },
  {
    title: "14. No Financial Transactions",
    content:
      "This website does not demand, request, or facilitate any kind of monetary exchange or financial transactions. Any payments, if applicable, will be explicitly communicated through official and secure channels. Users are advised to avoid transferring funds based on content or interactions through this site.",
  },
];

const TermsAndConditions = () => {
  return (
    <div>
      <div className="my-4">
        <CustomizedNavigation />
      </div>
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl px-8 py-10 border border-gray-200">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-3xl font-extrabold text-center ${Colors.PrimaryColorLight} mb-6`}
          >
            Terms and Conditions
          </motion.h1>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 text-[15px] leading-relaxed mb-6"
          >
            This website is operated by our law firm to provide general
            information about our practice areas and philosophy. By continuing
            to use this site, you agree to comply with the following terms and
            conditions. Your use of this platform indicates that you acknowledge
            and understand these policies.
          </motion.p>

          {/* Mapped Sections */}
          {termsSections.map((section, index) => (
            <Section key={index} index={index + 1} title={section.title}>
              {section.content}
            </Section>
          ))}

          {/* Contact Info */}
          <motion.p
            initial="hidden"
            whileInView="show"
            custom={14}
            className="mt-6 text-gray-700"
          >
            If you have any questions, please contact us at{" "}
            <a
              href="mailto:info@yourlawfirm.com"
              className="text-blue-600 underline"
            >
              info@yourlawfirm.com
            </a>
            .
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
