import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Colors } from "@/styles/global";

interface DisclaimerModalProps {
  handleDisclaimerResponse: (accepted: boolean) => void;
}

const DisclaimerModal = ({
  handleDisclaimerResponse,
}: DisclaimerModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (accepted: boolean) => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        duration: 0.4,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out",
        onComplete: () => handleDisclaimerResponse(accepted),
      });
    } else {
      handleDisclaimerResponse(accepted);
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, []);

  const disclaimerPoints = [
    "The content presented on this website is intended solely for informational purposes and should not be construed as legal advice. While we strive to ensure accuracy and relevance, the material may not reflect the most current legal developments, and users are advised to consult a qualified legal professional before making any decisions based on the information provided here.",
    "Accessing, browsing, or interacting with this website does not create, and is not intended to create, an attorney-client relationship between the user and our firm. No such relationship is established unless formally agreed upon through a signed engagement letter or written agreement acknowledging representation.",
    "This platform complies fully with the regulations and ethical standards set by the Bar Council of India and other relevant authorities. We do not advertise, solicit clients, or engage in promotional activities that contravene these guidelines. All content is shared in the spirit of transparency and public awareness.",
    "If you require legal assistance or have a matter that needs professional attention, we strongly recommend seeking advice from a licensed and experienced attorney who can assess your situation thoroughly and provide guidance tailored to your specific legal needs.",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        style={{ backgroundColor: Colors.PrimaryBgColor }}
        className="rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-scroll px-8 py-6 space-y-5 relative scrollbar-hide"
      >
        <div className="flex items-center gap-2 justify-center">
          <img
            src="/images/newLogo.jpeg"
            alt="VidhiVidh Logo"
            className="h-14 w-auto object-contain"
          />
        </div>
        <h2
          className="text-2xl text-center font-semibold"
          style={{ color: Colors.TextColor5 }}
        >
          Legal Disclaimer
        </h2>

        <ul className="space-y-3 list-none">
          {disclaimerPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start leading-relaxed"
              style={{ color: Colors.TextColor1 }}
            >
              <span
                className="font-bold mr-2"
                style={{ color: Colors.TextColor3 }}
              >
                •
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200 mt-4">
          <button
            onClick={() => handleClose(false)}
            className="px-5 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            style={{
              backgroundColor: Colors.CardBgSecondaryColor,
              color: Colors.ButtonBgColor1,
            }}
          >
            Decline
          </button>
          <button
            onClick={() => handleClose(true)}
            className="px-5 py-2 rounded-md  hover:bg-blue-700 transition"
            style={{
              backgroundColor: Colors.ButtonBgColor1,
              color: Colors.TextColor2,
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
