import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function TeamCards() {
  const teamMembers = [
    { id: 1, name: "Mira Sofia", role: "Talent Management", img: "/assets/image6.png" },
    { id: 2, name: "Luca Jansen", role: "Employee Experience", img: "/assets/photo3.png" },
    { id: 3, name: "Omar Zayd", role: "Succession Planning", img: "/assets/photo6.png" },
    { id: 4, name: "Clara Isabelle", role: "Labor Relations", img: "/assets/photo4.png" },
    { id: 5, name: "Sophia Lee", role: "Project Manager", img: "/assets/image5.png" },
    { id: 6, name: "Ravi Patel", role: "Software Engineer", img: "/assets/photo5.png" },
  ];

  return (
    <div className="w-full py-16 px-6 lg:px-20 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            image={member.img}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ image, name, role }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-80 overflow-visible rounded-3xl transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image only (rounded) */}
      <div className="relative rounded-3xl overflow-hidden shadow-md">
        <div className="h-[420px] w-full bg-slate-50">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              hovered ? "scale-105 opacity-95" : "scale-100 opacity-100"
            }`}
            draggable={false}
          />
        </div>

        {/* Social icons (bottom-right on hover) */}
        <div
          className={`absolute right-3 bottom-3 flex flex-col gap-3 transition-all duration-500 ${
            hovered ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#0b6ee0] text-white rounded-lg shadow hover:bg-[#094cb0] transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#0b6ee0] text-white rounded-lg shadow hover:bg-[#094cb0] transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#0b6ee0] text-white rounded-lg shadow hover:bg-[#094cb0] transition"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>

      {/* Name & Role below image (plain text, no box) */}
      <div className="mt-4 text-left px-1">
        <h3 className="text-lg font-semibold text-slate-900 leading-tight">{name}</h3>
        <div className="mt-2 flex items-center gap-3">
          <span className="inline-block w-10 h-[2px] bg-[#0b6ee0] rounded" />
          <span className="text-sm text-slate-500">{role}</span>
        </div>
      </div>
    </div>
  );
}
