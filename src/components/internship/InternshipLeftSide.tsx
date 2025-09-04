import { Colors } from "@/styles/global";

const InternshipLeftSide = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-6 text-left">
      <h2 className="text-4xl font-bold" style={{ color: Colors.TextColor2 }}>
        VidhiVidh Internship Program – Lucknow
      </h2>

      <p className="text-base" style={{ color: Colors.TextColor6 }}>
        At <strong>VidhiVidh</strong>, we are committed to mentoring and
        developing future legal professionals...
      </p>

      <p className="text-base" style={{ color: Colors.TextColor6 }}>
        Each intern is paired with a mentor who guides their learning...
      </p>

      <h4
        className="font-semibold text-lg mt-4"
        style={{ color: Colors.TextColor2 }}
      >
        Post-Internship Requirements
      </h4>
      <ul
        className="list-disc pl-6 text-sm"
        style={{ color: Colors.TextColor6 }}
      >
        <li>Two-page internship report</li>
        <li>Mandatory presentation (topic provided by mentor)</li>
        <li>Optional: Academic paper submission</li>
        <li>Completion of Internship Finalization Form</li>
        <li>Internship Certificate upon completion</li>
      </ul>

      <h4
        className="font-semibold text-lg mt-4"
        style={{ color: Colors.TextColor2 }}
      >
        Dress Code
      </h4>
      <ul
        className="list-disc pl-6 text-sm"
        style={{ color: Colors.TextColor6 }}
      >
        <li>Females: Semi-formal western or Indian wear</li>
        <li>Males: Trousers, collared shirts, and jackets</li>
        <li>No jeans or casual wear except on 2nd/4th Saturdays</li>
      </ul>

      <h4
        className="font-semibold text-lg mt-4"
        style={{ color: Colors.TextColor2 }}
      >
        Office Timings
      </h4>
      <p className="text-sm" style={{ color: Colors.TextColor6 }}>
        10:00 AM to 7:00 PM | Saturdays working (except 2nd and 4th)
      </p>

      <h4
        className="font-semibold text-lg mt-4"
        style={{ color: Colors.TextColor2 }}
      >
        Do's & Don'ts
      </h4>
      <ul
        className="list-disc pl-6 text-sm"
        style={{ color: Colors.TextColor6 }}
      >
        <li>Bring your own laptop</li>
        <li>No pen drives/USBs allowed</li>
        <li>Confidential data must not be shared externally</li>
      </ul>

      <h4
        className="font-semibold text-lg mt-4"
        style={{ color: Colors.TextColor2 }}
      >
        Stipend
      </h4>
      <p className="text-sm" style={{ color: Colors.TextColor6 }}>
        This is an unpaid internship. However, exceptional performance may lead
        to job opportunities at VidhiVidh.
      </p>

      <h4
        className="font-semibold text-lg mt-4"
        style={{ color: Colors.TextColor2 }}
      >
        What We Offer at VidhiVidh
      </h4>
      <ul
        className="list-disc pl-6 text-sm"
        style={{ color: Colors.TextColor6 }}
      >
        <li>
          <span
            className="font-semibold text-sm mt-4"
            style={{ color: Colors.TextColor6 }}
          >
            Certificate of Completion:
          </span>{" "}
          Issued to all interns upon successful completion of the program.
        </li>
        <li>
          <span
            className="font-semibold text-sm mt-4"
            style={{ color: Colors.TextColor2 }}
          >
            Practical Exposure:{" "}
          </span>
          Hands-on legal experience through active participation in real-world
          assignments.
        </li>
        <li>
          <span
            className="font-semibold text-sm mt-4"
            style={{ color: Colors.TextColor6 }}
          >
            Freedom to Choose:
          </span>{" "}
          Interns have the autonomy to select their preferred area of legal
          practice and collaborate with relevant professionals at VidhiVidh.
        </li>
      </ul>
    </div>
  );
};

export default InternshipLeftSide;
