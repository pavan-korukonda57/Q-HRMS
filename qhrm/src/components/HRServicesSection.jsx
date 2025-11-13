
import React from "react";

export default function HRServicesSectionReplica() {
  const CTA_BORDER = "#0e56d6"; // slightly darker for border contrast

  const services = [
    {
      title: "Planning And Analytics",
      desc: "Venenatis phasellus in dapibus nostra eros sociosqu ut. Sit ex enim quam cursus proin.",
      icon: (
        <svg
          className="w-20 h-20 mb-6"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#1268fb"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="8" width="40" height="32" rx="4" ry="4" opacity="0.06" />
          <path d="M12 34V20" />
          <path d="M20 34V14" />
          <path d="M28 34v-8" />
          <path d="M36 34v-4" />
          <circle cx="20" cy="12" r="1.6" />
        </svg>
      ),
    },
    {
      title: "Recruitment & Staffing",
      desc: "Risus auctor platea vulputate ultricies, nostra primis himenaeos nunc lorem.",
      icon: (
        <svg
          className="w-20 h-20 mb-6"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#1268fb"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 26a6 6 0 110-12 6 6 0 010 12z" />
          <path d="M34 26a6 6 0 110-12 6 6 0 010 12z" />
          <path d="M6 36c2-6 8-8 14-8s12 2 14 8" opacity="0.08" />
        </svg>
      ),
    },
    {
      title: "Employee Engagement",
      desc: "Quam habitasse vivamus congue; leo arcu vestibulum est fames at nisi fusce dapibus.",
      icon: (
        <svg
          className="w-20 h-20 mb-6"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#1268fb"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M24 34s-8-6-12-9a6 6 0 1110-7 6 6 0 1110 7c-4 3-12 9-12 9z" />
        </svg>
      ),
    },
    {
      title: "Policy Management",
      desc: "Ornare tortor vitae litora velit, eleifend nostra dis eget placerat dignissim.",
      icon: (
        <svg
          className="w-20 h-20 mb-6"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#1268fb"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 6h20v12" />
          <path d="M14 18v18a2 2 0 002 2h16a2 2 0 002-2V18" opacity="0.06" />
          <path d="M24 20v8" />
          <path d="M20 24h8" />
        </svg>
      ),
    },
  ];

  const clickWithHighlight = (label, path) => {
    console.log(`Clicked ${label} → ${path}`);
  };

  return (
    <section className="relative overflow-hidden bg-[#001233]">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 text-left pl-0 lg:pl-6">
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold text-[#1268fb] bg-[#1268fb22] tracking-wide">
              Our Expertise
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              All-in-One HR Services: <span className="text-white">A Detailed Guide</span>
            </h2>

            {/* increased paragraph size */}
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam parturient
              pharetra massa potenti nec consectetur sit elit augue. Ut placerat nibh
              efficitur per sagittis id vel rhoncus.
            </p>

            {/* Bullets: bigger font + clearer spacing */}
            <div className="grid grid-cols-2 gap-8 max-w-xl mb-6 text-lg md:text-xl">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 font-extrabold text-2xl text-[#1268fb]">+</span>
                  <span className="text-slate-200">Comprehensive Resources</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 font-extrabold text-2xl text-[#1268fb]">+</span>
                  <span className="text-slate-200">Updates and Announcements</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 font-extrabold text-2xl text-[#1268fb]">+</span>
                  <span className="text-slate-200">Employee Support</span>
                </li>
              </ul>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 font-extrabold text-2xl text-[#1268fb]">+</span>
                  <span className="text-slate-200">Career Opportunities</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 font-extrabold text-2xl text-[#1268fb]">+</span>
                  <span className="text-slate-200">Easy Communication</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 font-extrabold text-2xl text-[#1268fb]">+</span>
                  <span className="text-slate-200">Feedback and Engagement</span>
                </li>
              </ul>
            </div>

            {/* Know More button placed left and not too far down, sky-blue box */}
            <div className="mt-17">
              <button
                onClick={() => clickWithHighlight("Know More", "/contact")}
                aria-label="Know More"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-200 shadow-md focus:outline-none focus:ring-4 focus:ring-[#1268fb33]"
                style={{
                  background: "#1268fb", // sky-blue box
                  border: `1px solid ${CTA_BORDER}`,
                  color: "white",
                }}
              >
                <span className="uppercase font-semibold tracking-wide text-sm md:text-base">
                  Know More
                </span>

                <span
                  className="flex items-center justify-center rounded-md"
                  style={{
                    width: 34,
                    height: 34,
                    background: "#000000", // black circle inside sky blue button
                    color: "#ffffff",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE - thin divider lines between services (no boxes) */}
          <div className="w-full lg:w-1/2">
            <div className="w-full max-w-3xl mx-auto">
              <div className="grid grid-cols-2 divide-x divide-y divide-[#1268fb33]">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="py-12 px-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
                  >
                    {s.icon}
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
                      {s.title}
                    </h3>
                    <p className="text-slate-300/85 text-base md:text-lg leading-relaxed max-w-[20rem]">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* optional small bottom spacing */}
      </div>
    </section>
  );
}
