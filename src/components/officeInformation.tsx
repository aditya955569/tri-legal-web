import React from "react";
import { Button } from "./ui/button";

const OfficeInformation = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-slate-700 mb-4">
          Office Information
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-700">Address</h4>
            <p className="text-slate-600">
              123 Legal Plaza, Suite 500
              <br />
              Downtown District, NY 10001
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700">Phone</h4>
            <p className="text-slate-600">(555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700">Email</h4>
            <p className="text-slate-600">contact@lawfirm.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700">Office Hours</h4>
            <p className="text-slate-600">
              Monday - Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
        <h4 className="font-bold text-slate-700 mb-2">Emergency Contact</h4>
        <p className="text-slate-600 mb-4">
          For urgent legal matters requiring immediate attention, call our
          emergency hotline.
        </p>
        <Button
          variant="outline"
          className="border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white"
        >
          (555) 999-HELP
        </Button>
      </div>
    </div>
  );
};

export default OfficeInformation;
