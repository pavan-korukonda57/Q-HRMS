

import React, { useEffect, useRef, useState } from "react";

export default function GrowthSolutions() {
  const images = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1600&auto=format&fit=crop",
  ];

  const cardInfo = [
    {
      title: "Tailored Employee Growth Plans",
      text:
        "Quam habitasse vivamus congue; leo arcu vestibulum est imperdiet porttitor fames at nisi fusce dapibus.",
    },
    {
      title: "Monthly Innovation Idea Days",
      text:
        "Venenatis phasellus in dapibus nostra eros sociosqu cursus ut. Sit integer ex enim elementum quam vehicula cursus proin.",
    },
    {
      title: "Dynamic Flexible Workplaces",
      text:
        "Habitasse odio augue tellus tempus tellus dictum dui nec accumsan dolor per lectus.",
    },
    {
      title: "Strategic Talent Mapping",
      text:
        "Curabitur lobortis, mi nec ultricies placerat, justo sapien sollicitudin ligula, vitae congue urna risus id neque.",
    },
    {
      title: "Data-driven HR Insights",
      text:
        "Integer facilisis, odio a iaculis vehicula, nisl augue convallis velit, sed commodo nibh arcu non nisi.",
    },
  ];

  const n = Math.max(images.length, cardInfo.length);
  const imgs = Array.from({ length: n }, (_, i) => images[i % images.length]);
  const cards = Array.from({ length: n }, (_, i) => cardInfo[i % cardInfo.length]);

  const [index, setIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);
  const intervalRef = useRef(null);
  const pausedRef = useRef(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [n]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setModalIndex(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ✅ FIXED AUTO MOVEMENT (1.8 sec speed + smooth)
  function startAuto() {
    stopAuto();

    function nextStep() {
      if (!pausedRef.current) {
        setTimeout(() => setIndex((p) => (p + 1) % n), 50);
      }
      intervalRef.current = setTimeout(nextStep, 3500); // 🔹 Speed = 1.8s
    }

    intervalRef.current = setTimeout(nextStep, 3500);
  }

  function stopAuto() {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function pause() {
    pausedRef.current = true;
  }
  function resume() {
    pausedRef.current = false;
  }

  function prev() {
    pause();
    setIndex((p) => ((p - 1) % n + n) % n);
    startAuto();
  }

  function next() {
    pause();
    setIndex((p) => (p + 1) % n);
    startAuto();
  }

  // Touch/swipe handlers
  function onTouchStart(e) {
    pause();
    const t = e.touches?.[0];
    touchStartX.current = t?.clientX ?? null;
    touchDeltaX.current = 0;
  }

  function onTouchMove(e) {
    const t = e.touches?.[0];
    if (touchStartX.current != null && t)
      touchDeltaX.current = t.clientX - touchStartX.current;
  }

  function onTouchEnd() {
    const d = touchDeltaX.current;
    const thresh = 50;
    if (d > thresh) prev();
    else if (d < -thresh) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
    resume();
  }

  const pos = (i) => {
    let d = i - index;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const xStepPercent = 110;
  const centerYOffset = 14;
  const sideYOffset = -4;
  const desktopCardWidth = 460;
  const desktopCardHeight = 340;

  function handleClick(i) {
    setIndex(i);
    setTimeout(() => setModalIndex(i), 260);
  }

  return (
    <section
      className="w-full bg-sky-100 overflow-visible"
      role="region"
      aria-label="Growth solutions carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-[1400px] mx-auto py-20 px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex items-center justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/80 text-sm rounded-full px-4 py-1 text-sky-600 shadow-sm">
              Your Needs, Our Commitment
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
              Empowering Growth With Strategic{" "}
              <br className="hidden md:inline" /> Solutions
            </h2>
          </div>

          <div>
            <button
              type="button"
              className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <span>VIEW SERVICES</span>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-1 md:p-2"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow flex items-center justify-center hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-1 md:p-2"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow flex items-center justify-center hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Viewport */}
          <div className="relative min-h-[560px] md:min-h-[620px]">
            {imgs.map((img, i) => {
              const d = pos(i);
              const absD = Math.abs(d);
              const scale = d === 0 ? 1.03 : absD === 1 ? 0.98 : 0.92;
              const xPercent = d * xStepPercent;
              const yPercent = d === 0 ? centerYOffset : sideYOffset;
              const opacity = d === 0 ? 1 : absD === 1 ? 0.95 : 0.65;
              const zIndex = 50 - absD;

              return (
                <article
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClick(i)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && handleClick(i)
                  }
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out flex flex-col items-center cursor-pointer"
                  style={{
                    transform: `translateX(${xPercent}%) translateY(${yPercent}%) scale(${scale})`,
                    zIndex,
                    opacity,
                    width: desktopCardWidth,
                  }}
                  aria-hidden={d !== 0}
                >
                  <div
                    className={`rounded-3xl overflow-hidden shadow-2xl w-full transform transition-transform duration-400 ${
                      d === 0 ? "hover:scale-[1.035]" : "hover:scale-[1.02]"
                    }`}
                    style={{ height: desktopCardHeight }}
                  >
                    <img
                      src={img}
                      alt={cards[i]?.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>

                  <div className="text-center mt-6 px-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
                      {cards[i]?.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-slate-600 max-w-md mx-auto">
                      {cards[i]?.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal zoom view */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          onClick={() => setModalIndex(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="relative max-w-4xl w-[92%] md:w-[80%] lg:w-[70%] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-400 scale-100 z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalIndex(null)}
              aria-label="Close zoom"
              className="absolute right-3 top-3 z-30 bg-white/90 rounded-full p-2 shadow"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className="h-64 md:h-auto md:min-h-[420px] w-full">
                <img
                  src={imgs[modalIndex]}
                  alt={cards[modalIndex]?.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              <div className="p-6 md:p-10 bg-white flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {cards[modalIndex]?.title}
                </h3>
                <p className="mt-4 text-slate-700">{cards[modalIndex]?.text}</p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      setModalIndex((m) =>
                        m === null ? null : (m - 1 + n) % n
                      );
                      setIndex((p) => ((p - 1) % n + n) % n);
                    }}
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200"
                  >
                    Prev
                  </button>

                  <button
                    onClick={() => {
                      setModalIndex((m) =>
                        m === null ? null : (m + 1) % n
                      );
                      setIndex((p) => (p + 1) % n);
                    }}
                    className="px-4 py-2 rounded-full bg-sky-600 text-white hover:bg-sky-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}  

