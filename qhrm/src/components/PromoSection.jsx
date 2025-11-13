import React, { useEffect } from "react";

const PromoSection = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scrollRight {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const companies = [
    { name: "TechNova", logo: "/logos/logo1.png" },
    { name: "CloudEdge", logo: "/logos/logo2.png" },
    { name: "InnoSoft", logo: "/logos/logo3.png" },
    { name: "CodeWave", logo: "/logos/logo4.png" },
    { name: "DataPulse", logo: "/logos/logo5.png" },
    { name: "NextVision", logo: "/logos/logo6.png" },
    { name: "SkyLink", logo: "/logos/logo7.png" },
  ];

  return (
    <div
      className="w-full overflow-hidden text-white py-11" // increased height (py-6 → py-10)
      style={{ backgroundColor: "#1268fb" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "scrollRight 25s linear infinite",
        }}
      >
        {companies.concat(companies).map((company, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-10 text-xl font-semibold"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-12 h-12 object-contain invert"
            />
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;


