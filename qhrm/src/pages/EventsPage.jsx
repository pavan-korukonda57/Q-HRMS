

import React from "react";
import Header from "../components/Header";
import Banner3 from "../components/Banner3";
import InspiringEvents from "../components/InspiringEvents"; // ✅ imported component
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

export default function EventsPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header & Banner */}
      <Header />
      <Banner3 />

      {/* ✅ Inspiring Events Section */}
      <InspiringEvents />

      {/* ✅ Subscribe Section */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
