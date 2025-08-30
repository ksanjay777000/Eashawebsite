import React from "react";
import mobileImg from "../../../../assets/app.jpg";
import logo from "../../../../assets/app-logo.png";
import qrCode from "../../../../assets/app-scanner.png";
import appStore from "../../../../assets/iphone.png";
import playStore from "../../../../assets/play-store.png";
import "./Download.css";

const DownloadSection = () => {
  return (
    <section className="w-full bg-white py-0 px-4 lg:py-0">
      <div
        className="w-full flex flex-col md:flex-row items-center justify-center md:items-center gap-8 md:gap-15"
        style={{ margin: 0, padding: 0, lineHeight: 0 }}
      >
        <div
          className="image-left flex justify-center md:justify-end w-full md:w-1/2"
          style={{ margin: 0, padding: 0, lineHeight: 0 }}
        >
          <div
            style={{ margin: 0, padding: 0, lineHeight: 0, display: "inline-block" }}
          >
            <img
              src={mobileImg}
              alt="Mobile Mockup"
              className="rounded-3xl object-cover"
              style={{
                display: "block",
                margin: 0,
                padding: 0,
                width: "450px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <style jsx>{`
            /* Reset any vertical spacing */
            .image-left,
            .image-left > div,
            img[alt="Mobile Mockup"] {
              margin-top: 0 !important;
              margin-bottom: 0 !important;
              padding-top: 0 !important;
              padding-bottom: 0 !important;
              line-height: 0 !important;
            }

            @media (max-width: 425px) {
              img[alt="Mobile Mockup"] {
                width: 220px !important;
                height: 250px !important;
              }
            }
            @media (min-width: 500px) and (max-width: 767px) {
              img[alt="Mobile Mockup"] {
                width: 320px !important;
                height: 370px !important;
              }
            }
            @media (max-width: 639px) and (min-width: 426px) {
              img[alt="Mobile Mockup"] {
                width: 450px !important;
                height: auto !important;
              }
            }
            @media (min-width: 768px) and (max-width: 1023.98px) {
              img[alt="Mobile Mockup"] {
                width: 100% !important;
                height: 400px !important;
              }
            }
            @media (min-width: 1024px) {
              img[alt="Mobile Mockup"] {
                width: 100% !important;
                height: 600px !important;
              }
            }
          `}</style>
        </div>

        <div className="right-section w-full md:w-1/2 flex flex-col items-center md:items-start !text-center md:text-left">
          <p className="text-lg md:text-2xl mb-3">
            Explore better ways to manage your health with
          </p>

          <img src={logo} alt="eAsha Healthcare" className="mb-1 w-40 logo-image" />

          <img src={qrCode} alt="QR Code" className="w-40 h-40 mb-0 scanner-image" />

          <p className="text-sm font-bold !mb-8 download-text">
            Scan the QR code to download the app
          </p>

          <div className="flex flex-col md:flex-row gap-2 download-options">
            <img src={appStore} alt="App Store" className="w-[142px] h-[44px] object-contain" />
            <img src={playStore} alt="Google Play" className="w-[142px] h-[44px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
