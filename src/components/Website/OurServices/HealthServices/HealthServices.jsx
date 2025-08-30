import React from "react";
import Assay from "../../../../assets/assay.png";
import Pill from "../../../../assets/pill.svg";
import Health from "../../../../assets/health.png";

const services = [
  {
    icon: Assay,
    title: "Lab Test Bookings",
    description: "Book lab tests at your doorstep or nearest center.",
  },
  {
    icon: Pill,
    title: "Medicine Reminder",
    description: "Set up daily medicine alerts and get notified on time.",
  },
  {
    icon: Health,
    title: "Pharmacy",
    description: "Order and receive your prescriptions at home quickly.",
  },
];

const HealthServices = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-12 md:px-20 lg:px-32 font-urbanist">
      <style>{`
        @media (min-width: 1024px) and (max-width: 1100px) {
          .force-3-cols {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          .card-width-adjust {
            width: 240px !important; /* reduced width */
            height: 190px !important; /* adjust proportionally */
          }
        }
      `}</style>

      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-12">
        Explore More Health Services
      </h2>

      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 force-3-cols
        "
        style={{ marginTop: "40px", justifyItems: "center" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 
              flex flex-col items-center text-center
              w-[220px] h-[180px] sm:w-[240px] sm:h-[190px] md:w-[260px] md:h-[200px] lg:w-[280px] lg:h-[213px]
              card-width-adjust
              ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            `}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="object-contain"
              style={{ width: "64px", height: "64px", marginTop: "40px" }}
            />
            <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed px-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthServices;
