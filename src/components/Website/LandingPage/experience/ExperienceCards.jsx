import React from "react";
import Icon1 from "../../../../assets/devices.svg";
import Icon2 from "../../../../assets/instant.svg";
import Icon3 from "../../../../assets/call.svg";
import Icon4 from "../../../../assets/Prescription.svg";

const leftCards = [
  {
    icon: Icon1,
    title: "Instant Access To Experts",
    text: "Connect with certified doctors anytime, without waiting in queues or booking days in advance. Get expert advice, prescriptions, and follow-ups all from the comfort of your home."
  },
  {
    icon: Icon3,
    title: "Consult From Anywhere",
    text: "Whether you’re at home, at work, or traveling, get medical advice right where you are. Connect instantly with certified doctors and get the care you need—without the wait."
  }
];

const rightCards = [
  {
    icon: Icon2,
    title: "Private And Secure",
    text: "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Stay on track with your treatment, without stepping out."
  },
  {
    icon: Icon4,
    title: "Prescriptions Delivered",
    text: "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Track your orders in real-time and enjoy hassle-free, contactless delivery."
  }
];

export default function OnlineCareFeatures() {
  return (
    <div className="w-full bg-white !overflow-x-hidden px-[20px] md:px-[40px]" style={{ marginTop: '40px' }}>
      <h2 className="font-urbanist text-center text-[24px] sm:text-[36px] md:text-[54px] font-bold mb-0 pb-0 mt-[24px] md:mt-[40px] leading-tight">
        <span className="text-[#013A63]">Experience</span> the Ease of Online Care
      </h2>
      <div className="feature-grid grid grid-cols-2 gap-x-[16px] sm:gap-x-[24px] md:gap-x-[32px] w-full mt-[-20px] md:mt-[60px]">
        <div className="flex flex-col gap-[32px] md:gap-[40px] pt-[60px] md:pt-[10px]">
          {leftCards.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#D2CFCF] rounded-[20px] md:rounded-[32px] min-h-[320px] md:min-h-[472px] flex flex-col gap-[16px] md:gap-[24px] pt-[32px] md:pt-[48px] px-[20px] md:px-[32px] pb-[20px] md:pb-[32px] custom-card"
            >
              <div className="flex justify-center">
                <div className="bg-[#00A99D] rounded-full flex items-center justify-center icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="icon-img"
                  />
                </div>
              </div>
              <h5 className="font-urbanist font-bold text-[20px] sm:text-[28px] md:text-[41px] leading-tight text-[#013A63] mobile-title">
                {card.title}
              </h5>
              <p className="font-urbanist text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] text-[#111111] mobile-text">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[32px] md:gap-[40px] pt-[120px] md:pt-[30px]">
          {rightCards.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#D2CFCF] rounded-[20px] md:rounded-[32px] min-h-[320px] md:min-h-[472px] flex flex-col gap-[16px] md:gap-[24px] pt-[32px] md:pt-[48px] px-[20px] md:px-[32px] pb-[20px] md:pb-[32px] custom-card"
            >
              <div className="flex justify-center">
                <div className="bg-[#00A99D] rounded-full flex items-center justify-center icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="icon-img"
                  />
                </div>
              </div>
              <h5 className="font-urbanist font-bold text-[20px] sm:text-[28px] md:text-[41px] leading-tight text-[#013A63] mobile-title">
                {card.title}
              </h5>
              <p className="font-urbanist text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] text-[#333] mobile-text">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        /* Below 425px: vertical cards + no horizontal gap */
        @media (max-width: 424px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
            gap-x: 0 !important;
            margin-left:40px
          }
        }

        @media (max-width: 584px) {
          .custom-card {
            width: 187px !important;
            height: 169px !important;
            border-radius: 12px !important;
            padding-top: 10px !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
            gap: 6px !important;
            min-height: unset !important;
            
          }
          .icon-wrapper {
            width: 38px !important;
            height: 38px !important;
          }
          .icon-img {
            width: 20px !important;
            height: 20px !important;
          }
          .mobile-title {
            font-size: 12px !important;
            line-height: 16px !important;
          }
          .mobile-text {
            font-size: 10px !important;
            line-height: 14px !important;
          }
        }
        @media (min-width: 585px) {
          .icon-wrapper {
            width: 120px !important;
            height: 120px !important;
          }
          .icon-img {
            width: 60px !important; /* proportional to wrapper */
            height: 60px !important;
          }
        }
        /* Tablet view: <= 768px */
        @media (min-width: 768px) and (max-width:1024px) {
          .feature-grid > div:nth-child(2) {
            padding-top: 220px !important; /* increase spacing from top */
          }

          /* Reduce heading font size */
          h2 {
            font-size: 36px !important;
            line-height: 44px !important;
          }

          /* Adjust left & right columns padding */
          .feature-grid > div {
            padding-top: 80px !important;
          }

          /* Reduce card height and font sizes */
          .custom-card {
            min-height: 300px !important; /* smaller than desktop */
            padding-top: 24px !important;
            padding-bottom: 24px !important;
            gap: 16px !important;
          }

          .custom-card .mobile-title,
          .custom-card h5 {
            font-size: 28px !important; /* reduce from desktop 41px */
            line-height: 32px !important;
          }

          .custom-card .mobile-text,
          .custom-card p {
            font-size: 18px !important; /* reduce from desktop 24px */
            line-height: 24px !important;
          }

          .icon-img {
            width: 60px !important; /* proportional to wrapper */
            height: 60px !important;
          }
        }

        @media and (min-width:1025px){
          .custom-card{
            width:100% !important;
          }
        }
          @media (max-width: 424px) {
  /* Remove extra top space for the 3rd card (which is first card of right column on mobile) */
  .feature-grid > div:nth-child(2) > div:nth-child(1) {
    padding-top: 10px !important;
    margin-top: -90px !important;
  }
}

      `}</style>
    </div>
  );
}
