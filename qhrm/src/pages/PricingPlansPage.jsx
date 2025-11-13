


import React, { useState } from "react";
import Header from "../components/Header";
import Banner3 from "../components/Banner3";
import BannerVideo from "../components/BannerVideo";
import PricingPlans from "../components/PricingPlans";

import Footer from "../components/Footer";
import  ContactSection from "../components/ContactSection";
import PromoSection from "../components/PromoSection";
import SubscribeSection from "../components/SubscribeSection";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function PricingPlansPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Banner3 />

      <BannerVideo />
      <PricingPlans />

     <ContactSection />


      <PromoSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
