const OfficeInformation = () => {
  return (
    <div className="space-y-6 text-sm text-slate-300">
      <div>
        <h4 className="text-lg font-semibold text-white mb-3 font-serif tracking-tight">
          Office Information
        </h4>

        <div className="space-y-2">
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
              Lal Kothi, Near Atithi Inn, {/* <br /> */}
              Faizabad Rd, Nishatganj, Lucknow, 226007
            </p>
          </div>
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
  );
};

export default OfficeInformation;

{
  /* <div className="bg-blue-900/20 p-4 rounded-lg">
        <span className="block font-medium text-white mb-1">
          Emergency Contact
        </span>
        <p className="mb-3">
          For urgent legal matters, call our emergency hotline.
        </p>
        <Button
          variant="outline"
          className="border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white"
        >
          (555) 999-HELP
        </Button>
      </div> */
}
