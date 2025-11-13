// src/components/PartnershipSection.jsx
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function PartnershipSection() {
  const brands = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" },
    { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  ];

  return (
    <section className="py-20 bg-[#E0F2FE] text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <p className="text-sky-700 font-semibold tracking-widest uppercase mb-3">
          Empowering Partnerships
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#002b5b] leading-snug">
          Stronger Together: <br /> Thriving Through Collaborative Efforts
        </h2>

        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          We collaborate with global leaders and rising startups to create
          innovative solutions, build trust, and drive impactful growth.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all p-6 flex flex-col items-center justify-center hover:-translate-y-1"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-24 h-20 object-contain mb-3"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            className="flex items-center gap-3 bg-[#1268fb] hover:bg-[#0f5ada] text-white rounded-md border border-[#1268fb1a] shadow-md px-6 py-3 font-semibold transition-all"
          >
            <span className="uppercase tracking-wide text-sm">Let’s Collaborate</span>
            <span className="rounded-md bg-white w-9 h-9 flex items-center justify-center">
              <FaArrowUp className="text-black transform rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
