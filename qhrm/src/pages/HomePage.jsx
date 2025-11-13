import React from "react";
import Header from "../components/Header";
import Banner1 from "../components/Banner1";

import StatsSection from "../components/StatsSection";
import GrowthSolutions from "../components/GrowthSolutions";
import BlogSection from "../components/BlogSection";
import MovingText from "../components/MovingText";
import PromoSection from "../components/PromoSection";
import Footer from "../components/Footer";

// 🆕 Newly added imports
import HRServicesSection from "../components/HRServicesSection";
import PricingPlans from "../components/PricingPlans";
import BannerVideo from "../components/BannerVideo";
import OurServicesSection from "../components/OurServicesSection";
import ContactSection from "../components/ContactSection";

export default function HomePage1() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Banner1 */}
      <section id="banner">
        <Banner1 />
      </section>


          



      {/* Stats Section */}
      <section id="stats">
        <StatsSection />
      </section>


 <section id="banner-video">
            <BannerVideo />
          </section>

{/* 🆕 All-in-One HR Services Section */}
      <section id="hr-services">
        <HRServicesSection />
      </section>


      {/* Moving Text */}
      <section id="moving-text">
        <MovingText />
      </section>


       <section id="ourservices-section">
        <OurServicesSection />
       </section>




      {/* Growth Solutions Section */}
      <section id="growth-solutions">
        <GrowthSolutions />
      </section>

    

      {/* 🆕 Pricing Plans Section */}
      <section id="pricing-plans">
        <PricingPlans />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <BlogSection />
      </section>

      
        <section id="contact-section">
          <ContactSection />
          </section>



      {/* Promo Section */}
      <section id="promo">
        <PromoSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
