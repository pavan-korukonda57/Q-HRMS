

import React, { useState } from "react";

export default function BannerVideo() {
  const [open, setOpen] = useState(false);

  const videoPoster =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80";

  const avatars = [
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
  ];

  const videoEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <section className="w-full bg-white py-16">
      {/* Top Heading */}
      <div className="flex justify-center mb-6">
        <h3
          className="text-lg md:text-xl font-semibold text-gray-800 px-6 py-2 rounded-full border"
          style={{ borderColor: "#2B8AF6" }}
        >
          Transforming Workplaces
        </h3>
      </div>

      <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold text-center mb-8">
        Building Better Teams, One Hire At A Time
      </h2>

      {/* Video Poster */}
      <div
        className="relative rounded-[3rem] overflow-hidden cursor-pointer group mx-auto max-w-7xl"
        onClick={() => setOpen(true)}
      >
        <img
          src={videoPoster}
          alt="Video poster"
          className="w-full h-[640px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/40 group-hover:from-black/60 transition-all duration-500"></div>

        {/* Play button */}
        <button
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center
                     bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg group-hover:scale-110 transition-transform"
        >
          <span
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full"
            style={{ backgroundColor: "#2B8AF6" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7 text-white ml-0.5"
              fill="currentColor"
            >
              <path d="M4 2.5v19l16-9.5L4 2.5z" />
            </svg>
          </span>
        </button>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto px-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto md:mx-0">
            Lectus vestibulum velit luctus velit nisi porttitor turpis. Tellus nibh a
            porttitor varius pharetra.
          </p>
          <a
            href="#talk"
            className="inline-flex items-center mt-4 text-sm md:text-base font-semibold text-gray-800 hover:text-blue-600"
          >
            TALK WITH EXPERTS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`avatar ${i + 1}`}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-white object-cover bg-gray-100"
              />
            ))}
          </div>
          <div className="text-right">
            <div className="text-2xl md:text-3xl font-extrabold text-gray-800">
              24,000+
            </div>
            <div className="text-xs md:text-sm text-gray-500">Happy Hirings</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-white bg-black/50 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
            >
              ✕
            </button>

            {/* FIXED: Full-size responsive video */}
            <div className="aspect-video w-full">
              <iframe
                src={videoEmbedUrl}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
