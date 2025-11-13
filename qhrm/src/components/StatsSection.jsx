
import React from "react";
import { useNavigate } from "react-router-dom";

function IconBriefcase() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconTraining() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l9 4-9 4-9-4 9-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 11v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconRecruitment() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconRelations() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

export default function StatsSection() {
  const navigate = useNavigate();

  const CTA_BORDER = "#1268fb1a";
  const items = [
    {
      icon: <IconBriefcase />,
      title: "Compensation & Benefits",
      percent: "65%",
      desc: "Metus torquent platea aenean orci ridiculus potenti feugiat ultricies.",
    },
    {
      icon: <IconTraining />,
      title: "Training & Development",
      percent: "90%",
      desc: "Risus auctor platea vulputate volutpat ultricies, primis fermentum himenaeos.",
    },
    {
      icon: <IconRecruitment />,
      title: "Recruitment & Staffing",
      percent: "72%",
      desc: "Tellus lacus conubia donec curabitur class nulla lorem torquent.",
    },
    {
      icon: <IconRelations />,
      title: "Employee Relations",
      percent: "58%",
      desc: "Ornare tortor vitae litora velit ipsum eleifend dis eget placerat nullam.",
    },
  ];

  function clickWithHighlight(_label, path) {
    if (path) navigate(path);
  }

  return (
<section className="relative px-4 md:px-8 lg:px-12 pt-24 pb-24" style={{ backgroundColor: "#C2E0FF" }}>




      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            {/* Employee Experience box */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl shadow-md"
              style={{ background: "#1268fb" }}
            >
              <span className="w-3 h-3 rounded-full bg-white" aria-hidden="true" />
              <span className="text-white text-base md:text-lg font-semibold">
                Employee Experience
              </span>
            </div>

            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-snug">
              Strategies to Enhance <br className="hidden sm:block" /> Engagement and Well-Being
            </h2>
          </div>

          {/* Get Started button moved slightly down */}
          <div className="flex items-center md:mt-3">
            <button
              onClick={() => clickWithHighlight("Get Started", "/contact")}
              aria-label="Get Started"
              className="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-[#1268fb33]"
              style={{
                background: "#010E37",
                border: `1px solid ${CTA_BORDER}`,
                color: "white",
              }}
            >
              <span className="uppercase font-semibold tracking-wide text-sm md:text-base">
                GET STARTED
              </span>

              {/* Sky blue background with black arrow */}
              <span
                className="flex items-center justify-center rounded-md"
                style={{
                  width: 34,
                  height: 34,
                  background: "#2D9CFE",
                  color: "#000000",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* ICON ROW */}
        <div className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {items.map((it, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  {/* Sky blue icon circle */}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full shadow-md"
                    style={{ background: "#1268fb", color: "#fff" }}
                  >
                    {it.icon}
                  </div>
                  <div className="text-lg md:text-xl text-gray-900 font-semibold">
                    {it.title}
                  </div>
                </div>
                <div className="w-full border-b border-sky-100 mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* STATS ROW */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {items.map((it, idx) => (
              <div key={idx} className="px-2">
                <div className="text-5xl md:text-6xl lg:text-[68px] font-extrabold text-gray-900 leading-none">
                  {it.percent}
                </div>
                <div className="mt-4 text-base md:text-lg text-gray-700 max-w-xs">
                  {it.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-6" />
    </section>
  );
}
