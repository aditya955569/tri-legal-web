import { motion } from "framer-motion";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import { Colors } from "@/styles/global";

import Footer from "./Footer";
const LegalDisclaimer = () => {
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
            Legal Disclaimer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 text-[17px] leading-relaxed mb-6"
          >
            The content available on this website is for general informational
            purposes only. It should not be treated as legal advice or a
            substitute for professional counsel. VidhiVidh disclaims any
            liability for decisions or actions taken based on the content
            provided here.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="scroll-mt-20"
          >
            <h2
              className={`text-xl font-semibold mt-8 mb-2 text-gray-800 border-l-4 ${Colors.PrimaryColorLight} pl-3`}
            >
              No Attorney-Client Relationship
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              Viewing or using this website does not establish an
              attorney-client relationship with VidhiVidh. Communication through
              this platform does not constitute legal representation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="scroll-mt-20"
          >
            <h2
              className={`text-xl font-semibold mt-8 mb-2 text-gray-800 border-l-4 ${Colors.PrimaryColorLight} pl-3`}
            >
              Accuracy of Information
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              While we make efforts to maintain up-to-date and accurate content,
              VidhiVidh does not warrant the completeness or reliability of any
              information on the site. Legal content may become outdated or no
              longer applicable.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="scroll-mt-20"
          >
            <h2
              className={`text-xl font-semibold mt-8 mb-2 text-gray-800 border-l-4 ${Colors.PrimaryColorLight} pl-3`}
            >
              External Links
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              Links to third-party websites are provided for convenience only.
              VidhiVidh does not endorse or accept responsibility for the
              content or practices of any external websites.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="scroll-mt-20"
          >
            <h2
              className={`text-xl font-semibold mt-8 mb-2 text-gray-800 border-l-4 ${Colors.PrimaryColorLight} pl-3`}
            >
              Content Revisions
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              VidhiVidh reserves the right to change, update, or remove any
              content on this website at any time without prior notice.
              Continued use implies acceptance of any changes made.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="scroll-mt-20"
          >
            <h2
              className={`text-xl font-semibold mt-8 mb-2 text-gray-800 border-l-4 ${Colors.PrimaryColorLight} pl-3`}
            >
              Legal Jurisdiction
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              This website and its usage are governed by the laws of India. Any
              disputes related to this site shall be under the exclusive
              jurisdiction of courts located in Lucknow, Uttar Pradesh.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalDisclaimer;
