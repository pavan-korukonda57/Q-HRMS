import React from "react";
import { FaUsers, FaChalkboardTeacher, FaArrowRight } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-[#cce6ff]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366] text-center mb-12 md:mb-16">
          Why Choose Us
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start text-gray-800">
          {/* LEFT - Performance Management */}
          <div className="md:w-1/2 text-left">
            <div className="flex items-center mb-4">
              <FaUsers
                className="text-[#003366] text-3xl md:text-4xl mr-3"
                aria-hidden="true"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#003366]">
                Performance Management
              </h3>
            </div>

            <p className="text-4xl md:text-5xl font-extrabold text-[#001f3f] mb-3">
              65%
            </p>

            <p className="leading-relaxed mb-4 text-sm md:text-base">
              We help organizations unlock workforce potential through performance
              analytics, goal setting, and continuous improvement.
            </p>

            <a
              href="/performance"
              className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:underline"
              aria-label="Learn more about Performance Management"
            >
              Learn More <FaArrowRight />
            </a>
          </div>

          {/* RIGHT - Training & Development */}
          <div className="md:w-1/2 text-left md:text-right">
            <div className="flex items-center justify-start md:justify-end mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] mr-3">
                Training & Development
              </h3>
              <FaChalkboardTeacher
                className="text-[#003366] text-3xl md:text-4xl"
                aria-hidden="true"
              />
            </div>

            <p className="text-4xl md:text-5xl font-extrabold text-[#001f3f] mb-3">
              4.8+
            </p>

            <p className="leading-relaxed mb-4 text-sm md:text-base">
              Empowering teams with structured training programs, mentorship, and
              continuous learning to drive organizational excellence.
            </p>

            <a
              href="/training"
              className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:underline"
              aria-label="Learn more about Training and Development"
            >
              Learn More <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
