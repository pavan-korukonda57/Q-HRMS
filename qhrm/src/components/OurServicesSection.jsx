import React, { useState } from "react";

export default function OurServicesSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Recruitment Staffing",
      image: "/assets/events1.png",
    },
    {
      id: 2,
      number: "02",
      title: "Compensation Management",
      image: "/assets/events2.png",
    },
    {
      id: 3,
      number: "03",
      title: "Training Development",
      image: "/assets/events3.png",
    },
    {
      id: 4,
      number: "04",
      title: "Performance Management",
      image: "/assets/events4.png",
    },
    {
      id: 5,
      number: "05",
      title: "Employee Relations",
      image: "/assets/events5.png",
    },
  ];

  return (
    <section className="py-16 bg-[#F4F8FF] text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-[#002D62] mb-10">Our Services</h2>
      <p className="text-gray-600 text-lg mb-12">
        What drives us: Passion for People, Dedication to Results
      </p>

      {/* Service Boxes */}
      <div className="flex flex-col items-center gap-8">
        {services.map((service, index) => {
          const isHovered = hoverIndex === index;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onTouchStart={() => setHoverIndex(index)}
              onTouchEnd={() => setHoverIndex(null)}
              className={`w-[80%] md:w-[1350px] h-[180px] rounded-2xl shadow-md overflow-hidden relative transition-all duration-500 ease-in-out transform ${
                isHovered
                  ? "text-white scale-[1.02]"
                  : "bg-white hover:shadow-xl text-[#002D62]"
              }`}
              style={{
                backgroundImage: isHovered ? `url(${service.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {isHovered && (
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-500"></div>
              )}

              <div className="relative z-10 flex items-center h-full p-4 gap-4 text-left">
                {/* Number Box */}
                <div className="bg-sky-400 text-white rounded-xl p-3 w-[90px] text-center">
                  <div className="text-2xl font-extrabold leading-tight">
                    {service.number}
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col justify-center w-full">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                {/* View Button */}
                <button className="bg-[#002D62] text-white px-3 py-1.5 rounded-lg text-xs w-fit hover:bg-[#004aad] transition">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
