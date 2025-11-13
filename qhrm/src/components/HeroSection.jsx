import React from "react";
import { FaArrowUp, FaPhone } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 px-6 md:px-16 md:pr-44 overflow-visible">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* LEFT (Text) */}
          <div className="w-full md:w-7/12 z-40"> {/* ensure text sits above images */}
            {/* Tagline */}
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 text-sm px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block" />
                Smart Solutions For Tomorrow's Talent
              </span>
            </div>

            {/* Headline - 2 lines, reduced size */}
            <h1 className="font-extrabold text-black leading-tight mb-6 text-3xl md:text-4xl lg:text-[44px]">
              Empowering Organizations To Thrive
              <br />
              Through Cutting-Edge HR Technology
            </h1>

            {/* Mission / Vision / Core (3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-800">Our Mission</h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Tempor dignissim phasellus rutrum mus posuere lacinia neque turpis porttitor sociosqu.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-800">Our Vision</h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Rhoncus gravida turpis nunc aliquet tristique sem nascetur dis sagittis facilisis.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-800">Our Core Value</h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Purus molestie nullam class vivamus erat senectus mus mi. Dis per conubia est eu ligula.
                </p>
              </div>
            </div>

            {/* Buttons & Call */}
            <div className="flex items-center gap-6">
              {/* Read More pill with inline dark square arrow */}
              <button
  type="button"
  className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md px-5 py-3 font-semibold"
>
  <span className="uppercase tracking-wide text-sm">Read More</span>

  {/* small dark square with arrow */}
  <span className="ml-2 rounded-md bg-slate-900 w-9 h-9 flex items-center justify-center">
    <FaArrowUp className="text-white transform rotate-45" />
  </span>
</button>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shadow">
                  <FaPhone className="text-blue-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call 24hrs / 7 Days</p>
                  <p className="text-lg font-semibold text-gray-800">000-123-176875</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT (Image stack) */}
          <div className="hidden md:flex md:w-5/12 items-end justify-end">
            {/* transform pushes the whole stack to the right; z-10 keeps images behind text to avoid overlap */}
            <div className="relative ml-auto transform translate-x-40 z-10">
              {/* Big image (portrait) */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200
                           w-[360px] h-[420px] lg:w-[460px] lg:h-[500px]"
              >
                <img
                  src="/assets/Image1.jpg"
                  alt="Main"
                  className="w-full h-full object-cover"
                />

                {/* bottom overlay with name/title */}
                <div className="absolute left-0 bottom-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                  <div className="text-right">
                    <h4 className="text-base md:text-lg font-bold">Maria Joseh, PHR, SHRM-CP</h4>
                    <p className="text-xs md:text-sm text-gray-200">Founder & CEO</p>
                  </div>
                </div>
              </div>

              {/* Small image: INCREASED HEIGHT & WIDTH, moved further left to create a wider gap,
                  positioned to align bottom with big image and NOT overlap the text area */}
              <div
                className="absolute left-[-240px] md:left-[-260px] bottom-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white
                           w-48 h-48 md:w-56 md:h-56 bg-gray-100"
              >
                <img src="/assets/Image2.jpg" alt="Small" className="w-full h-full object-cover" />
              </div>

              {/* Circular badge (keeps visual balance) */}
           <div className="absolute left-[-100px] md:left-[-120px] bottom-20 w-32 h-32 md:w-40 md:h-40">
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <style>{`
      @keyframes rotateText {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .rotate-text {
        transform-origin: 100px 100px;
        animation: rotateText 12s linear infinite;
      }
    `}</style>

    {/* Static Black Circle */}
    <circle cx="100" cy="100" r="88" fill="#0f172a" opacity="0.92" />

    {/* Define text circular path */}
    <defs>
      <path
        id="textCircle"
        d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
      />
    </defs>

    {/* Rotating Text Around Circle */}
    <g className="rotate-text">
      <text
        fill="#dbeafe"
        fontSize="14"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath
          href="#textCircle"
          startOffset="0%"
          textLength="440"
        >
          FUTURE YOUR PATH TO BRIGHTER — EXPLORE 
        </textPath>
      </text>
    </g>

    {/* Inner Blue Circle */}
    <circle cx="100" cy="100" r="48" fill="#0652dd" />

    {/* Arrow Icon */}
    <g transform="translate(100,100) rotate(45)">
  <path
    d="M-8 -5 L0 -12 L8 -5"
    stroke="#fff"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
  <path
    d="M0 -12 L0 10"
    stroke="#fff"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</g>

  </svg>
</div>





            </div>
          </div>
        </div>

        {/* Mobile: show big image below on small screens */}
        <div className="md:hidden mt-6 w-full flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 w-[260px] h-[260px]">
            <img src="/assets/Image1.jpg" alt="Main mobile" className="w-full h-full object-cover" />
            <div className="absolute left-0 bottom-0 right-0 px-3 py-3 bg-gradient-to-t from-black/60 to-transparent text-white">
              <div className="text-right">
                <h4 className="text-sm font-bold">Maria Joseh, PHR, SHRM-CP</h4>
                <p className="text-xs text-gray-200">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
