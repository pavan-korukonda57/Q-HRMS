
import React from "react";
import Header from "../components/Header";
import Banner3 from "../components/Banner3";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SubscribeSection";
import TeamCards from "../components/TeamCards";

export default function OurTeamPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Banner3 />

      {/* Team Section */}
      <section className="py-20 text-center relative">
        <h1 className="text-4xl font-bold mb-4">Heroes Behind Our Success</h1>
        <p className="text-lg text-gray-600 mb-10">
          Meet the talented individuals who make everything possible.
        </p>

        {/* TeamCards Component */}
        <TeamCards />
      </section>

      <SubscribeSection />
      <Footer />
    </div>
  );
}
