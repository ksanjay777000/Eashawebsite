import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import OffCanvas from "./components/Off-Canvas/OffCanvas";
import Chatbot from "./components/Chatbot/Chatbot"

// LandingPage components
import DoctorsLanding from "./components/Website/LandingPage/doctors/Doctors";
import DownloadWay from "./components/Website/LandingPage/DownloadWay/Download";
import Experience from "./components/Website/LandingPage/experience/ExperienceCards";
import Faqs from "./components/Website/LandingPage/faqs/FAQ";
import HomeHero from "./components/Website/LandingPage/homehero/Hero";
import HowItWorks from "./components/Website/LandingPage/howitworks/work";
import Testimonials from "./components/Website/LandingPage/testimonials/Testimonials";

// DoctorsPage components
import ChooseDoctors from "./components/Website/DoctorsPage/Choosedoctors/ChooseDoctor";
import Counter from "./components/Website/DoctorsPage/Counter/Counters";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import HeroSection from "./components/Website/DoctorsPage/HeroSection/HeroSection";
import Specialization from "./components/Website/DoctorsPage/specialization/Specialization";
import StepsToBook from "./components/Website/DoctorsPage/StepsToBook/StepsToBook";

// OurServices components
import ClinicVisit from "./components/Website/OurServices/clinicvisit/ClinicVisit";
import OurServicesMain from "./components/Website/OurServices/ourservices/Ourservices";
import BookingBetter from "./components/Website/OurServices/BookingBetter/BookingBetter";
import HealthServices from "./components/Website/OurServices/HealthServices/HealthServices";

// About-Us components
import CountingCards from "./components/Website/About-Us/CountingCards";
import FirstSection from "./components/Website/About-Us/FirstSection";
import MeetOurDoctor from "./components/Website/About-Us/MeetOurDoctors";
import TrustSection from "./components/Website/About-Us/TrustSection";
import Mission from "./components/Website/About-Us/Mission";
import WhatWeDo from "./components/Website/About-Us/WhatWeDo";
import WhyChooseUs from "./components/Website/About-Us/WhyChooseUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Chatbot/>
      {/* ✅ Show OffCanvas only on mobile & tablet (hidden on lg and above) */}
      <div className="block lg:hidden">
        <OffCanvas />
      </div>

      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <div>
              <HomeHero />
              <Experience />
              <HowItWorks />
              <Testimonials />
              {/* <DoctorsLanding /> */}
              <DownloadWay />
              <Faqs />
            </div>
          }
        />

        {/* Doctors Page Route */}
        <Route
          path="/doctor"
          element={
            <div>
              <HeroSection />
              <Counter />
              <ChooseDoctors />
              <Specialization />
              <StepsToBook />
            </div>
          }
        />

        {/* Our Services Page Route */}
        <Route
          path="/our-services"
          element={
            <div>
              <OurServicesMain />
              <ClinicVisit />
              <BookingBetter />
              <HealthServices />
            </div>
          }
        />

        {/* About Us Page Route */}
        <Route
          path="/about-us"
          element={
            <div>
              <FirstSection />
              <CountingCards />
              <TrustSection />
              <Mission />
              <WhatWeDo />
              <MeetOurDoctor />
              <WhyChooseUs />
            </div>
          }
        />
      </Routes>

      <GetInTouch />
      <Footer />
    </Router>
  );
}

export default App;
