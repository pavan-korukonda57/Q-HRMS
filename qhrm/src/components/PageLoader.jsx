

import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader({
  initialMs = 1800,
  routeChangeMs = 1400,
  color1 = "#6D28D9",
  color2 = "#06B6D4",
  size = 160,
  hideOnFirst = false,
}) {
  const location = useLocation();
  const [visible, setVisible] = useState(!hideOnFirst);
  const [firstDone, setFirstDone] = useState(false);
  const timeoutRef = useRef(null);

  // Show on first mount (unless hideOnFirst is true)
  useEffect(() => {
    if (hideOnFirst) {
      setVisible(false);
      setFirstDone(true);
      return;
    }
    setVisible(true);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      setFirstDone(true);
    }, initialMs);
    return () => clearTimeout(timeoutRef.current);
  }, [initialMs, hideOnFirst]);

  // Show on every route change after the first mount
  useEffect(() => {
    if (!firstDone) return;
    setVisible(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(false), routeChangeMs);
    return () => clearTimeout(timeoutRef.current);
  }, [location.pathname, routeChangeMs, firstDone]);

  if (!visible) return null;

  // geometry values for SVG scaled to `size`
  const view = 200;
  const center = view / 2; // 100
  const ringR = 70;
  const holeR = 42;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      aria-hidden="false"
      role="status"
      aria-live="polite"
    >
      <style>{`
        @keyframes q-rotate { from{ transform: rotate(0deg);} to{ transform: rotate(360deg);} }
        @keyframes q-tail { 0%,100% { transform: rotate(0deg) translateX(0); opacity:0.92 } 50% { transform: rotate(8deg) translateX(2px); opacity:1 }}
        @keyframes q-fade-in { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes q-fade-out { from { opacity: 1; } to { opacity: 0; } }
      `}</style>

      <svg
        viewBox={`0 0 ${view} ${view}`}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Loading"
        style={{
          animation: "q-rotate 2.4s linear infinite",
          filter: "drop-shadow(0 8px 20px rgba(16,24,40,0.08))",
          willChange: "transform, opacity",
          animationPlayState: "running",
        }}
      >
        <defs>
          <linearGradient id="qGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>

          {/* subtle dashed stroke to hint drawing */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ring (using stroke-dasharray to keep it visually interesting) */}
        <circle
          cx={center}
          cy={center}
          r={ringR}
          stroke="url(#qGrad)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="320 180"
          style={{ filter: "url(#softGlow)" }}
        />

        {/* hole to make it a Q - keep crisp white for overlapping UI */}
        <circle cx={center} cy={center} r={holeR} fill="#ffffff" />

        {/* Tail of the Q */}
        <g style={{ transformOrigin: `${center}px ${center}px` }}>
          <rect
            x={center + 35}
            y={center + 30}
            width="22"
            height="10"
            rx="3"
            fill="url(#qGrad)"
            style={{ transformOrigin: `${center}px ${center}px`, animation: "q-tail 1.8s ease-in-out infinite" }}
          />
        </g>
      </svg>
    </div>
  );
}
