

import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Banner3 from "../components/Banner3";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SubscribeSection";
import FeedbackForm from "../components/FeedbackForm";
import LocationsSection from "../components/LocationsSection";
import ContactInfoSection from "../components/ContactInfoSection";

export default function ContactPage() {
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const [equalHeight, setEqualHeight] = useState("auto");

  useEffect(() => {
    const updateHeights = () => {
      if (infoRef.current && formRef.current) {
        const infoHeight = infoRef.current.offsetHeight;
        const formHeight = formRef.current.offsetHeight;
        const maxHeight = Math.max(infoHeight, formHeight);
        setEqualHeight(`${maxHeight}px`);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header & Banner */}
      <Header />
      <Banner3 title="Contact Us" subtitle="Get in touch with our team" />

      {/* CONTACT INFO + FEEDBACK FORM */}
      <section className="py-20 bg-white w-full">
        <div className="w-full flex flex-col md:flex-row items-stretch">
          {/* Left: Contact Info Section (2.5/5 width) */}
          <div
            ref={infoRef}
            style={{ height: equalHeight }}
            className="w-full md:w-1/2 flex justify-start items-stretch"
          >
            <div className="w-full h-full">
              <ContactInfoSection />
            </div>
          </div>

          {/* Right: Feedback Form (2.5/5 width) */}
          <div
            ref={formRef}
            style={{ height: equalHeight }}
            className="w-full md:w-1/2 flex justify-end items-stretch"
          >
            <div className="w-full h-full">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection />

      {/* Subscribe Section */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
