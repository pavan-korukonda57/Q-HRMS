


import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner3 from "../components/Banner3";
import SubscribeSection from "../components/SubscribeSection";
import OurServicesSection from "../components/OurServicesSection";
import HRServicesSection from "../components/HRServicesSection";
import PartnershipSection from "../components/PartnershipsSection";

export default function ServicesPage() {

  return (
    <div className="bg-white text-gray-900">
      {/* 1️⃣ Header */}
      <Header />

      {/* 2️⃣ Banner */}
      <Banner3
        title="Our Services"
        subtitle="Empowering Businesses with Complete HR Solution"
      />


       <OurServicesSection />


      <HRServicesSection />







      {/* 🌐 COLLABORATION SECTION */}
     <PartnershipSection />

      {/* 6️⃣ Subscribe Section */}
      <SubscribeSection />

      {/* 7️⃣ Footer */}
      <Footer />
    </div>
  );
}
