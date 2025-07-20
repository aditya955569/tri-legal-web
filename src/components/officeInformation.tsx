import { Colors } from "@/styles/global";

const OfficeInformation = () => {
  return (
    <div className="space-y-6 text-sm" style={{ color: Colors.TextColor5 }}>
      <div>
        <h4
          className="text-lg font-semibold mb-3 font-serif tracking-tight"
          style={{ color: Colors.TextColor3 }}
        >
          Office Information
        </h4>

        <div className="space-y-2">
          <div>
            <span
              className="block font-medium"
              style={{ color: Colors.TextColor1 }}
            >
              Office Hours
            </span>
            <p>
              Mon–Fri: 10:00 AM – 7:00 PM
              <br />
              Sat: 10:00 AM – 5:00 PM
            </p>
          </div>
          <div>
            <span
              className="block font-medium"
              style={{ color: Colors.TextColor1 }}
            >
              Address
            </span>
            <p>
              Lal Kothi, Near Atithi Inn, {/* <br /> */}
              Faizabad Rd, Nishatganj, Lucknow, 226007
            </p>
          </div>
          <div>
            <span
              className="block font-medium"
              style={{ color: Colors.TextColor1 }}
            >
              Phone
            </span>
            <p>(+91) 630-719-6122</p>
          </div>
          <div>
            <span
              className="block font-medium"
              style={{ color: Colors.TextColor1 }}
            >
              Email
            </span>
            <p>contact@lawfirm.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeInformation;
