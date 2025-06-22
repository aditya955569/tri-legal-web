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
    <p className="text-gray-700 text-[17px] leading-relaxed mb-4">{children}</p>
  </motion.div>
);

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="my-4">
        <CustomizedNavigation />
      </div>
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl px-8 py-10 border border-gray-200">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-3xl font-extrabold text-center ${Colors.PrimaryColorLight} mb-6`}
          >
            Privacy Policy
          </motion.h1>

          <Section index={1} title="1. Purpose of Policy">
            Our firm’s privacy policy outlines how we collect, use, and
            safeguard personal data gathered through our website and services.
          </Section>

          <Section index={2} title="2. Legal Compliance">
            This policy follows the provisions of the Information Technology
            Act, 2000, and associated rules.
          </Section>

          <Section index={3} title="3. Types of Data Collected">
            We collect personal details like your name, job title, address,
            contact number, email, and any information shared voluntarily.
          </Section>

          <Section index={4} title="4. Sensitive Data">
            Certain sensitive information such as health or legal background is
            collected with your explicit consent and only when relevant.
          </Section>

          <Section index={5} title="5. Data from Third Parties">
            Information may also be obtained from external sources like
            employers, public databases, or government bodies.
          </Section>

          <Section index={6} title="6. Use of Information">
            We use your data to deliver services, improve user experience,
            process payments, ensure compliance, and for legitimate business
            purposes.
          </Section>

          <Section index={7} title="7. Confidentiality Assurance">
            Your personal data is protected and shared only when necessary with
            strict confidentiality safeguards.
          </Section>

          <Section index={8} title="8. Marketing and Communication">
            We will only send marketing content if you have given prior consent
            and you may opt out at any time.
          </Section>

          <Section index={9} title="9. No Sale of Data">
            We do not sell or lease personal information to any third parties.
          </Section>

          <Section index={10} title="10. Permitted Sharing">
            Data may be shared with affiliates, service providers, legal bodies,
            or courts for compliance or operational reasons.
          </Section>

          <Section
            index={11}
            title="11. Data Storage and International Handling"
          >
            Personal data may be processed or stored outside India, adhering to
            applicable laws and adequate data protection practices.
          </Section>

          <Section index={12} title="12. Accuracy of Data">
            Users are responsible for keeping their shared information accurate
            and updated.
          </Section>

          <Section index={13} title="13. Access and Updates">
            We provide options to access, review, and request changes to your
            personal information upon verification.
          </Section>

          <Section index={14} title="14. Data Retention">
            Information is stored securely in both electronic and physical
            formats for as long as required legally or operationally.
          </Section>

          <Section index={15} title="15. Force Majeure Disclaimer">
            We are not liable for data breaches caused by unforeseen events
            beyond our control such as natural disasters or cyberattacks.
          </Section>

          <Section index={16} title="16. Consent Withdrawal">
            You may withdraw consent at any time via email, which may affect our
            ability to provide services that require that data.
          </Section>

          <Section index={17} title="17. Right to Deletion">
            You may request data deletion, though some data may be retained for
            legal reasons.
          </Section>

          <Section index={18} title="18. Limited Deletion Capability">
            Certain legal obligations may prevent us from deleting some
            information even upon request.
          </Section>

          <Section index={19} title="19. Data Protection Commitment">
            We are committed to protecting your data through strong technical
            and organizational measures.
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
