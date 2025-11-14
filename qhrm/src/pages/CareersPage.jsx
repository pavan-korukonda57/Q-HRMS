

import React from "react";
import Header from "../components/Header";
import Banner3 from "../components/Banner3";
import BannerVideo from "../components/BannerVideo";
import Footer from "../components/Footer";
import PromoSection from "../components/PromoSection";
import SubscribeSection from "../components/SubscribeSection";
import ContactBox from "../components/ContactBox";
import CareersJobs from "../components/CareersJobs";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header + Banner */}
      <Header />
      <Banner3 title="Careers" breadcrumb="Home / Careers" />

      {/* Banner Video */}
      <div className="m-0 p-0">
        <BannerVideo />
      </div>

      {/* Why Work With Us - curved box with smaller icon + smaller text */}
      <section className="px-4 md:px-8 py-1 bg-white">
        <div className="bg-sky-200 px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-1">
          <span className="text-black text-base">✨</span>
          <h3 className="text-xs md:text-sm font-semibold text-black m-0">
  Why Work With Us?
</h3>

        </div>
      </section>

      {/* Main Heading */}
      <section className="py-2 px-4 md:px-8 bg-white">
        <div className="md:w-1/2">
          <h2
            className="text-3xl md:text-5xl font-bold mb-1"
            style={{ color: "#000000" }}
          >
            Flexible And Healthy Work-life Balance
          </h2>
        </div>
      </section>

      {/* Jobs + Contact Box */}
      <section className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* LEFT: CareersJobs */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="flex-1">
              <CareersJobs />
            </div>
          </div>

          {/* RIGHT: ContactBox */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="flex-1">
              <ContactBox />
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <PromoSection />

      {/* Subscribe Section */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
