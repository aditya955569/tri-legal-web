const CustomizedOfficeInformation = () => {
  return (
    <div className="space-y-6 text-sm text-slate-300">
      <div>
        <h4 className="text-lg font-semibold text-white mb-3 font-serif tracking-tight">
          Office Information
        </h4>

        <div className="space-y-2">
          <div className="flex flex-row gap-8">
            <div>
              <span className="block font-medium text-white">Office Hours</span>
              <p>
                Mon–Fri: 10:00 AM – 7:00 PM
                <br />
                Sat: 10:00 AM – 5:00 PM
              </p>
            </div>
            <div>
              <span className="block font-medium text-white">Address</span>
              <p>
                Lal Kothi, Near Atithi Inn, <br />
                Faizabad Rd, Nishatganj, Lucknow, 226007
              </p>
            </div>
          </div>
          <div className=" flex flex-row gap-8">
            <div>
              <span className="block font-medium text-white">Phone</span>
              <p>(+91) 630-719-6122</p>
            </div>
            <div>
              <span className="block font-medium text-white">Email</span>
              <p>contact@lawfirm.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedOfficeInformation;
