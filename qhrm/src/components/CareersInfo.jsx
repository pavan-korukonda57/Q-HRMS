
import React from "react";

export default function CareersInfo() {
  return (
    <>
      {/* 🌟 Large Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full mb-12 flex justify-center">
          <img
            src="/assets/banner2.png"
            alt="Team Collaboration"
            className="rounded-2xl shadow-lg w-[80%] md:w-[80%] h-[36rem] object-cover"
          />
        </div>
      </section>

      {/* Text Left Side - details */}
      <section className="py-16 bg-sky-50 w-full">
        <div className="w-full px-6 md:px-12 lg:px-20 space-y-12 text-left">
          {/* 1️⃣ Collaborative Culture */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Empowering a Collaborative Culture
            </h2>
            <p className="text-sm md:text-base text-black leading-relaxed tracking-wide text-justify">
              We foster an environment where ideas thrive and every voice matters. Collaboration across departments helps us innovate faster and deliver meaningful solutions. We encourage open communication, collective growth, and recognition of shared success to build stronger teams that perform with passion.
            </p>
          </div>

          {/* 2️⃣ Continuous Learning */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Continuous Learning & Growth
            </h2>
            <p className="text-sm md:text-base text-black leading-relaxed tracking-wide text-justify">
              We empower our team to constantly improve. From professional certifications to leadership workshops, HRHub invests in your journey of development. Our training programs help you enhance both technical and interpersonal skills to reach your career goals effectively.
            </p>
          </div>

          {/* 3️⃣ Diversity and Inclusion */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Diversity, Inclusion, and Respect
            </h2>
            <ul className="list-disc pl-10 text-sm md:text-base text-black space-y-2 leading-relaxed tracking-wide text-justify">
              <li>We embrace multicultural collaboration and creativity.</li>
              <li>We ensure equal opportunities at every career level.</li>
              <li>We value every employee’s unique background and ideas.</li>
              <li>We promote transparency, respect, and trust in all teams.</li>
              <li>We build strong relationships founded on empathy and care.</li>
            </ul>
          </div>

          {/* 4️⃣ Global Growth */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Global Collaboration & Opportunities
            </h2>
            <ul className="list-disc pl-10 text-sm md:text-base text-black space-y-2 leading-relaxed tracking-wide text-justify">
              <li>Work alongside international teams and experts.</li>
              <li>Participate in global projects with diverse exposure.</li>
              <li>Gain cross-cultural experience and leadership insights.</li>
              <li>Access opportunities to work abroad or remotely worldwide.</li>
              <li>Grow into a future-ready professional with global reach.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
