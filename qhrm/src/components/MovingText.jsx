
import React from "react";

export default function MovingText() {
  return (
    <section className="overflow-hidden">
      <style>{`
        /* Wrapper keeps overflow hidden */
        .marquee-wrapper {
          overflow: hidden;
          height: 80px; /* Height set to 80px */
          display: flex;
          align-items: center; /* Centers text vertically */
        }

        /* Main marquee container — wide for smooth looping */
        .marquee {
          display: flex;
          width: 600%; /* More scrolling space */
          animation: moveRight 60s linear infinite; /* Adjust 60s for speed */
          will-change: transform;
        }

        /* Each text group */
        .marquee__group {
          display: flex;
          white-space: nowrap;
          gap: 2.5rem;
          align-items: center;
        }

        /* Smooth GPU-accelerated animation */
        @keyframes moveRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
      `}</style>

      <div className="marquee-wrapper" style={{ backgroundColor: "#1268fb" }}>
        <div className="marquee">
          {/* First group (visible text) */}
          <div className="marquee__group">
            <span className="text-white font-semibold text-2xl mx-4">
              💡 Innovation drives our success every day.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              🤝 Teamwork makes every dream a reality.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              🚀 We aim higher to reach beyond expectations.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              🌍 Together, we build a better world.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              💫 Empowering people to achieve greatness together.
            </span>
          </div>

          {/* Duplicate group for smooth looping */}
          <div className="marquee__group" aria-hidden="true">
            <span className="text-white font-semibold text-2xl mx-4">
              💡 Innovation drives our success every day.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              🤝 Teamwork makes every dream a reality.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              🚀 We aim higher to reach beyond expectations.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              🌍 Together, we build a better world.
            </span>
            <span className="text-white font-semibold text-2xl mx-4">
              💫 Empowering people to achieve greatness together.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
