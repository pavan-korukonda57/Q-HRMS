import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function PageLoader({
  initialMs = 1800,
  routeChangeMs = 1400,
  color1 = "#6D28D9",
  color2 = "#06B6D4",
  size = 160,
}) {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [firstDone, setFirstDone] = useState(false);

  // First mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setFirstDone(true);
    }, initialMs);
    return () => clearTimeout(timer);
  }, [initialMs]);

  // On every route change
  useEffect(() => {
    if (!firstDone) return;
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), routeChangeMs);
    return () => clearTimeout(timer);
  }, [location.pathname, routeChangeMs, firstDone]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes q-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes q-tail { 
          0%,100% { transform: rotate(0deg) translateX(0); opacity: 0.9; } 
          50% { transform: rotate(8deg) translateX(2px); opacity: 1; } 
        }
      `}</style>

      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          style={{
            animation: "q-spin 2.4s linear infinite",
            filter: "drop-shadow(0 0 8px rgba(109,40,217,0.2))",
          }}
        >
          <defs>
            <linearGradient id="qUniversalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>

          {/* Outer Q ring */}
          <circle
            cx="100"
            cy="100"
            r="70"
            stroke="url(#qUniversalGrad)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="320 180"
          />

          {/* Inner white mask (hole) */}
          <circle cx="100" cy="100" r="42" fill="#fff" />

          {/* Tail to form the Q */}
          <rect
            x="135"
            y="130"
            width="22"
            height="10"
            rx="3"
            fill="url(#qUniversalGrad)"
            style={{
              transformOrigin: "100px 100px",
              animation: "q-tail 1.8s ease-in-out infinite",
            }}
          />
        </svg>
      </div>
    </>
  );
}
