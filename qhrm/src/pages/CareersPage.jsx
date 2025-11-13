

import React from "react";
import Header from "../components/Header";
import Banner3 from "../components/Banner3";
import Footer from "../components/Footer";
import PromoSection from "../components/PromoSection";
import SubscribeSection from "../components/SubscribeSection";
import ContactBox from "../components/ContactBox";
import CareersJobs from "../components/CareersJobs";
import CareersInfo from "../components/CareersInfo";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header + Banner */}
      <Header />
      <Banner3 title="Careers" breadcrumb="Home / Careers" />

      {/* Intro (under banner, left aligned) */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-sky-800">
            Flexible And Healthy Work-life Balance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We value talent and balance. At HRHub, you’ll find a supportive
            environment that promotes creativity and collaboration. Our hybrid
            structure ensures work flexibility, employee well-being, and
            consistent personal development while maintaining high productivity.
            We believe a balanced lifestyle fosters innovation, satisfaction,
            and lasting success.
          </p>
        </div>
      </section>

      {/* Jobs (left 2/3) + Contact (right 1/3) — white background, equal height */}
      <section className="px-6 md:px-20 py-16 bg-white">
        {/* Parent flex container that forces children to stretch to same height */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* LEFT: CareersJobs — takes 2/3 width on large screens */}
          <div className="w-full lg:w-2/3 flex flex-col">
            {/* flex-1 makes this column stretch to match sibling height */}
            <div className="flex-1">
              <CareersJobs />
            </div>
          </div>

          {/* RIGHT: ContactBox — takes 1/3 width on large screens */}
          <div className="w-full lg:w-1/3 flex flex-col">
            {/* flex-1 makes this column stretch to match sibling height */}
            <div className="flex-1">
              {/* NOTE: ContactBox should render its own styling */}
              <ContactBox />
            </div>
          </div>
        </div>
      </section>

      {/* Info section and footers */}
      <CareersInfo />
      <PromoSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}




