import React from "react";
import Nav from "./nav";
import Smart from "./assets/img19.png";
import Bio from "./assets/img20.png";
import Doc from "./assets/img22.png";
import Payroll from "./assets/img21.png";
import Footer from "./footer";
import "../src/index.css";
const enterprise = () => {
  return (
    <div>
      <Nav />
      <div
        className="bg-[#3AC1EF]"
        style={{ padding: "1rem", paddingLeft: "5rem" }}
      >
        <h3 className="text-4l capitalize text-[#fff] font-semibold">
          enterprise system
        </h3>
      </div>
      <div>
        <div className="flex p-24 space-y-4 space-x-14 card">
          <div>
            <img
              src={Smart}
              alt="smart revenue"
              className="w-50 h-48 object-contain"
            />
          </div>
          <div>
            <h3 className="text-[#2C2E2E] font-bold text-3xl capitalize">
              Smart Revenue System(SRS)
            </h3>
            <p className="custom-text space-x-14 mt-5 text-[#838686]">
              Smart Revenue System (SRS) is an advanced enterprise revenue
              management solution, designed by our in-house developers for
              Organizations with the need to streamline their revenue collection
              and process management with cutting edge technology. Our SRS
              provides Core applications, giving your organization control over
              collection of revenues across all levels.
            </p>
          </div>
        </div>

        <div className="flex p-24 mb-5 space-y-4 space-x-14 card">
          <div>
            <img
              src={Bio}
              alt="bio system"
              className="w-50 h-48 object-contain"
            />
          </div>
          <div>
            <h3 className="text-[#2C2E2E] font-bold text-3xl capitalize">
              {" "}
              smart biometric system(SBS)
            </h3>
            <p className="custom-text space-x-14 mt-5 text-[#838686]">
              Biometric System is an advanced Automated Biometric Identification
              System (ABIS) used for large-scale biometric identification and
              deduplication using fingerprint, face recognition.
            </p>
          </div>
        </div>

        <div className="flex p-24 mb-5 space-y-4 space-x-14 card">
          <div>
            <img
              src={Doc}
              alt="doc system"
              className="w-50 h-48 object-contain"
            />
          </div>
          <div>
            <h3 className="text-[#2C2E2E] font-bold text-3xl capitalize">
              {" "}
              smart document management system(SDMS)
            </h3>
            <p className="custom-text space-x-14 mt-5 text-[#838686]">
              This system helps organizations to track, manage and store/
              archive documents, while eradicating dependencies on paper. It is
              capable of keeping record of the various versions created and
              modified by different users based on access control.
            </p>
          </div>
        </div>

        <div className="flex p-24 mb-5 space-y-4 space-x-14 card">
          <div>
            <img
              src={Payroll}
              alt="doc system"
              className="w-50 h-48 object-contain"
            />
          </div>
          <div>
            <h3 className="text-[#2C2E2E] font-bold text-3xl capitalize">
              {" "}
              smart payroll management system(SPMS)
            </h3>
            <p className="custom-text space-x-14 mt-5 text-[#838686]">
              Our Payroll management System handles all the processes and steps
              required to pay employee. Which includes keeping track of time
              worked, calculating wages, remitting benefits, withholding taxes
              and other deductions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default enterprise;
