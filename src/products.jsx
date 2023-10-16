import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Verxid from "./assets/ver.png";
import Geono from "./assets/geo.png";
import Tiqit from "./assets/tiq.png";
import Quid from "./assets/quid.png";
import Longtext from "./longtext";
import "../src/index.css";
const products = () => {
  const longText =
    "Verxid is an approved proprietary end-to-end, highly secure touchless biometric software of BTL integrated into approved smartphones to enhance and offer multi-factor biometrics capture and authentication. It can serve as a self-service touchless biometric solution that can unify systems seamlessly as an Authentication Call to Action means. This secured platform only allows the biometric process to run on the smart-mobile device and delivers the captured or authenticated data to the premised or cloud server. Thus, Verxid brings this simplified, realistic, and operational progression to people from the comfort of any location and provides the most secure, high-performing process of capturing a high volume of users more quickly. Verxid is viable for any use case interface that requires identification and only requires a low-end camera with a flash or torch to capture the user's ten fingerprints and face. Some use case for Verxid include Pensioners, Civil Personnel, Resident Card, Criminal Data Base, Road-Safety, Education, and many more that needs identification process.";

  // You can adjust the maxLength as needed
  const maxLength = 300;
  return (
    <div>
      <Nav />
      <div
        className="bg-[#3AC1EF] border"
        style={{ padding: "1rem", paddingLeft: "3rem" }}
      >
        <h3 className="text-4l uppercase text-[#fff] font-semibold">
          our products
        </h3>
      </div>
      <div className="">
        <div className="flex p-24 space-x-14 card">
          <div>
            <img
              src={Verxid}
              alt="smart revenue"
              className="w-50 h-48  mt-6 object-contain"
            />
          </div>
          <div>
            <Longtext text={longText} maxLength={maxLength} />
            <div className="items-center">
              <Link
                className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-4 items-center mt-2 ml-10 rounded-full"
                to="https://www.verxid.com"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex p-24 space-x-14 card">
          <div>
            <img
              src={Geono}
              alt="geonotifeye"
              className="w-50 h-48 mt-6  object-contain"
            />
          </div>
          <div>
            <div className="p-10 mb-5">
              <h3 className="text-[#3AC1EF] font-bold text-2xl capitalize">
                geonotifeye
              </h3>
              <h2 className="text-[#71849B] italic mt-2 capitalize">
                own your city
              </h2>
              <p className="custom-text text-[#71849B] mt-2 capitalize">
                GEONOTIFEYE is a communication intelligence geofencing
                technology that allows users who are witnesses or victims of an
                incident to trigger a location-based alert using the app. This
                alert triggered is received by people of interest who are
                physically present in the incident's proximity in real-time.
                Thus, the alert notification helps those who the incident might
                impact on making an informed decision on the present situation
                of their immediate environment.
              </p>
            </div>
            <div className="items-center">
              <Link
                className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-4 items-center mt-2 ml-10 rounded-full"
                to="https://www.geonotifeye.com"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex p-24 space-x-14 card">
          <div>
            <img
              src={Tiqit}
              alt="smart revenue"
              className="w-50 h-48 mt-6 object-contain"
            />
          </div>
          <div>
            <div className="p-10 mb-5">
              <h3 className="text-[#3AC1EF] font-bold text-2xl capitalize">
                tiqit
              </h3>
              <h2 className="text-[#71849B] italic mt-2 capitalize">
                spice up your lifestyle
              </h2>
              <p className="custom-text text-[#71849B] mt-2 capitalize">
                tiQit is an online ticketing application that acts as an
                intermediary between merchants (cinemas/event owners) and
                prospective customers (event/cinema-goers) who wish to buy
                tickets to movies and events on the go. TiQit is designed to
                benefit users as well as the cinemas/event owners. It will
                enable users to find cinemas/events, see movies showing and
                available events, watch trailers and book tickets on the one
                hand, and give cinemas and event owners access to an extended
                customer base and management.
              </p>
            </div>
            <div className="items-center">
              <Link
                className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-4 items-center mt-2 ml-10 rounded-full"
                to="https://www.verxid.com"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex p-24 space-x-14 card">
          <div>
            <img
              src={Tiqit}
              alt="quidpay"
              className="w-50 h-48 mt-6 object-contain"
            />
          </div>
          <div>
            <div className="p-10 mb-5">
              <h3 className="text-[#3AC1EF] font-bold text-2xl capitalize">
                quid pay
              </h3>
              <h2 className="text-[#71849B] italic mt-2 capitalize">
                pay bills easily
              </h2>
              <p className="custom-text text-[#71849B] mt-2 capitalize">
                Quid is a user-friendly payment platform developed to make
                paying bills simple and pleasurable. The platform lets customers
                pay for almost anything from the convenience of their mobile
                phones by connecting them to different vendors/billers
              </p>
            </div>
            <div className="items-center">
              <Link className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-4 items-center mt-2 ml-10 rounded-full">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default products;
