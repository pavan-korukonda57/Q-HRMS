import React from "react";
import Header from "../components/Header";
import Banner3 from "../components/Banner3";
import BannerVideo from "../components/BannerVideo";
import WhyChooseUs from "../components/WhyChooseUs";
import HeroSection from "../components/HeroSection";
import PartnershipsSection from "../components/PartnershipsSection";
import LocationsSection from "../components/LocationsSection";
import ContactSection from "../components/ContactSection";
import PromoSection from "../components/PromoSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* 1️⃣ HEADER */}
      <Header />

      {/* 2️⃣ BANNER */}
      <Banner3
        title="About Us"
        subtitle="Get to know more about our consultancy — our journey, mission, and values."
      />

      <BannerVideo />

      {/* 4️⃣ WHY CHOOSE US */}
      <WhyChooseUs />

      {/* HERO */}
      <HeroSection />

      {/* PARTNERSHIPS */}
      <PartnershipsSection />

      {/* MAP / LOCATIONS */}
      <LocationsSection />

      {/* CONTACT / COMPLAINT */}
      <ContactSection />

      {/* PROMO */}
      <PromoSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
