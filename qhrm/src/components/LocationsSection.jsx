import React, { useState } from "react";

export default function LocationsSection({ locations: userLocations }) {
  const defaultLocations = {
    Bengaluru: {
      address: "123 MG Road, Bengaluru, India",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.827703374755!2d77.64498607491872!3d12.91773088739072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14a7dc4ff7e7%3A0x1b90da11df86aeea!2sElectronic%20City%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1680989622111!5m2!1sen!2sin",
    },
    Canada: {
      address: "45 Bay Street, Toronto, Canada",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.470293935085!2d-79.38393468473094!3d43.65348197912152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2b22f7f33%3A0x3a87d1a7cf9af38a!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1680989738821!5m2!1sen!2sca",
    },
    USA: {
      address: "501 Silicon Ave, San Francisco, USA",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1503817980654!2d-122.08424968468208!3d37.42199977982581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5cae5a8d2c7%3A0x64b858bdeebfe9cb!2sGoogleplex!5e0!3m2!1sen!2sus!4v1680989550999!5m2!1sen!2sus",
    },
    UK: {
      address: "78 Oxford Street, London, UK",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19802.69230534609!2d-0.1359115280134275!3d51.50721783623524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3301f6cfc3%3A0x9e6d2c1c56d2c933!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1680989687552!5m2!1sen!2suk",
    },
  };

  const locations = userLocations || defaultLocations;
  const locationKeys = Object.keys(locations);
  const [activeLocation, setActiveLocation] = useState(locationKeys[0]);

  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Explore Our Other Locations
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {locationKeys.map((loc) => (
          <button
            key={loc}
            onClick={() => setActiveLocation(loc)}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition ${
              activeLocation === loc
                ? "bg-blue-900 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* Dynamic Map + Address */}
      <div className="w-full mt-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-2 text-blue-900">
          {activeLocation} Office
        </h3>
        <p className="text-gray-700 mb-6">
          {locations[activeLocation].address}
        </p>

        <div className="w-full h-[450px]">
          <iframe
            src={locations[activeLocation].map}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title={`${activeLocation} map`}
          />
        </div>
      </div>
    </section>
  );
} 