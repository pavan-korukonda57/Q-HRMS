

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";
import Banner3 from "../components/Banner3";
import ContactBox from "../components/ContactBox";
import SubscribeSection from "../components/SubscribeSection";

export default function FaqsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Banner Section */}
      <Banner3 title="Frequently Asked Questions" />

      {/* FAQs (left 2/3) + ContactBox (right 1/3) */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* LEFT: FAQs — 2/3 width */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="flex-1">
              <Faqs />
            </div>
          </div>

          {/* RIGHT: ContactBox — 1/3 width */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="flex-1">
              <ContactBox />
            </div>
          </div>

        </div>
      </section>

      {/* Subscribe Section */}
      <SubscribeSection />

      <Footer />
    </div>
  );
}
