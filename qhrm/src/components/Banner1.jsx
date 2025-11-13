import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Banner1() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [activePill, setActivePill] = useState(null); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullLabel, setShowFullLabel] = useState(false);

  const touchHideTimer = useRef(null);
  const pagesRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const menuItemRefs = useRef({});
  const pagesOpenTimer = useRef(null);
  const navLeaveTimer = useRef(null);

  const menuItems = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
  ];
  const pages = [
    { name: "Events", path: "/events" },
    { name: "FAQs", path: "/faqs" },
    { name: "Our Team", path: "/our-team" },
    { name: "Pricing Plans", path: "/pricing-plans" },
    { name: "Career", path: "/careers" },
  ];

  const currentPath = location.pathname || "/";

  const goToPage = (to) => {
    if (to === currentPath) {
      setShowPagesDropdown(false);
      return;
    }
    navigate(to);
    setShowPagesDropdown(false);
  };

  const clickWithHighlight = (name, path) => {
    setActivePill(name);
    goToPage(path);
    setTimeout(() => setActivePill(null), 300);
  };

  const setMenuItemRef = (name, el) => {
    if (el) menuItemRefs.current[name] = el;
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setShowPagesDropdown(false);
        setActivePill(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setShowPagesDropdown(false);
        setActivePill(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleMouseEnterItem = (name) => {
    if (navLeaveTimer.current) clearTimeout(navLeaveTimer.current);
    setActivePill(name);
    if (name === "Pages") {
      if (pagesOpenTimer.current) clearTimeout(pagesOpenTimer.current);
      pagesOpenTimer.current = setTimeout(() => {
        setShowPagesDropdown(true);
        pagesOpenTimer.current = null;
      }, 160);
    } else {
      if (pagesOpenTimer.current) {
        clearTimeout(pagesOpenTimer.current);
        pagesOpenTimer.current = null;
      }
      setShowPagesDropdown(false);
    }
  };

  const handleMouseLeaveItem = (name) => {
    if (name === "Pages") {
      if (pagesOpenTimer.current) {
        clearTimeout(pagesOpenTimer.current);
        pagesOpenTimer.current = null;
      }
    }
    navLeaveTimer.current = setTimeout(() => {
      setActivePill(null);
      navLeaveTimer.current = null;
    }, 140);
  };

  const handleNavMouseLeave = () => {
    if (pagesOpenTimer.current) {
      clearTimeout(pagesOpenTimer.current);
      pagesOpenTimer.current = null;
    }
    navLeaveTimer.current = setTimeout(() => {
      setActivePill(null);
      setShowPagesDropdown(false);
      navLeaveTimer.current = null;
    }, 160);
  };

  useEffect(() => {
    return () => {
      if (pagesOpenTimer.current) clearTimeout(pagesOpenTimer.current);
      if (navLeaveTimer.current) clearTimeout(navLeaveTimer.current);
      if (touchHideTimer.current) clearTimeout(touchHideTimer.current);
    };
  }, []);

  // Styling constants
  const activeGradient = "linear-gradient(180deg,#2D9CFE 0%, #1E90FF 100%)";
  const CTA_BORDER_COLOR = "#1268fb";

  const pillBaseClass =
    "rounded-2xl px-6 py-2 font-semibold text-sm focus:outline-none transition-all flex items-center gap-2 relative z-20 select-none";
  
  const pillDefaultStyle = {
    background: "transparent",
    color: "rgba(255,255,255,0.92)",
    border: "none",
    boxShadow: "none",
  };
  
  // Active top-menu pill style (white text)
  const pillActiveStyle = {
    background: activeGradient,
    color: "#ffffff",
    boxShadow: "0 10px 30px rgba(30,144,255,0.18)",
    border: `1px solid ${CTA_BORDER_COLOR}`,
  };

  // Submenu item styles (fixed size to avoid jump)
  const submenuSelectedStyle = {
    background: activeGradient,
    color: "#ffffff",
    border: `1px solid ${CTA_BORDER_COLOR}`,
    borderRadius: 12,
    width: "100%",
    padding: "10px 14px",
    boxSizing: "border-box",
    transition: "all 0.12s ease-in-out",
  };

  const submenuDefaultStyle = {
    background: "transparent",
    color: "#ffffff",
    border: "none",
    borderRadius: 12,
    width: "100%",
    padding: "10px 14px",
    boxSizing: "border-box",
    transition: "all 0.12s ease-in-out",
  };

  // Logo interactions for showing full label on hover/touch
  const onLogoMouseEnter = () => {
    if (touchHideTimer.current) clearTimeout(touchHideTimer.current);
    setShowFullLabel(true);
  };
  const onLogoMouseLeave = () => {
    if (touchHideTimer.current) clearTimeout(touchHideTimer.current);
    setShowFullLabel(false);
  };
  const onLogoFocus = () => setShowFullLabel(true);
  const onLogoBlur = () => setShowFullLabel(false);
  const onLogoTouchStart = (e) => {
    e.preventDefault?.();
    setShowFullLabel(true);
    if (touchHideTimer.current) clearTimeout(touchHideTimer.current);
    touchHideTimer.current = setTimeout(() => setShowFullLabel(false), 1400);
  };

  const renderButton = (item) => {
    const isTopActive = activePill === item.name;
    if (item.name === "Pages") {
      return (
        <div
          key="Pages-wrapper"
          className="relative"
          ref={pagesRef}
          onMouseEnter={() => handleMouseEnterItem("Pages")}
          onMouseLeave={() => handleMouseLeaveItem("Pages")}
        >
          <button
            ref={(el) => setMenuItemRef(item.name, el)}
            onClick={() => {
              setShowPagesDropdown((s) => !s);
              setActivePill("Pages");
            }}
            className={`${pillBaseClass} uppercase tracking-wide text-sm`}
            style={isTopActive ? pillActiveStyle : pillDefaultStyle}
            aria-haspopup="true"
            aria-expanded={showPagesDropdown}
          >
            <span>{item.name}</span>
            <span
              className={`ml-2 inline-flex items-center justify-center w-5 h-5 text-lg transform transition-transform ${
                showPagesDropdown ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>

          {/* Pages dropdown — outer border matches CTA */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-3 rounded-2xl shadow-xl z-50 overflow-hidden transition-all duration-180 ${
              showPagesDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
            style={{ backgroundColor: "#001b34", minWidth: 260, border: `1px solid ${CTA_BORDER_COLOR}` }}
            onMouseEnter={() => {
              if (navLeaveTimer.current) clearTimeout(navLeaveTimer.current);
              setActivePill("Pages");
            }}
            onMouseLeave={() => {
              handleNavMouseLeave();
            }}
          >
            <div className="p-3 flex flex-col gap-2">
              {pages.map((page) => {
                const pageActive = activePill === page.name;
                return (
                  <button
                    key={page.name}
                    onClick={() => clickWithHighlight(page.name, page.path)}
                    onMouseEnter={() => {
                      if (navLeaveTimer.current) clearTimeout(navLeaveTimer.current);
                      setActivePill(page.name);
                    }}
                    onMouseLeave={() => {
                      navLeaveTimer.current = setTimeout(() => {
                        setActivePill(null);
                      }, 120);
                    }}
                    className="w-full text-left rounded-xl font-semibold transition-all"
                    style={pageActive ? submenuSelectedStyle : submenuDefaultStyle}
                  >
                    {page.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    return (
      <button
        key={item.name}
        ref={(el) => setMenuItemRef(item.name, el)}
        onClick={() =>
          item.name === "Pages" ? setShowPagesDropdown((s) => !s) : clickWithHighlight(item.name, item.path)
        }
        onMouseEnter={() => handleMouseEnterItem(item.name)}
        onMouseLeave={() => handleMouseLeaveItem(item.name)}
        className={`${pillBaseClass} uppercase tracking-wide text-sm`}
        style={isTopActive ? pillActiveStyle : pillDefaultStyle}
      >
        <span>{item.name}</span>
      </button>
    );
  };

  return (
    <section id="home" className="relative w-full h-[560px] md:h-[760px] overflow-visible">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/assets/video1.mp4"
        poster="/assets/banner-poster.png"
        aria-hidden
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/75 pointer-events-none" />

      {/* Banner content */}
      <div className="absolute inset-0 flex flex-col justify-end items-stretch px-2 md:px-6 pb-10 md:pb-14 z-20 text-white">
        <div className="w-full flex flex-col md:flex-row justify-between items-end">
          <div className="flex flex-col items-start mb-5 md:mb-0 -translate-y-8 md:-translate-y-11 pl-6 md:pl-12">
            <span className="uppercase tracking-widest text-xs md:text-sm mb-2 bg-[#002c5f] px-4 py-1.5 rounded-2xl text-white font-semibold shadow-md">
              The New Era of HR
            </span>

            <h1 className="text-2xl md:text-4xl font-extrabold leading-snug max-w-md md:max-w-lg">
              Transforming HR: Inspiring
              <br />
              Change, Driving Results
            </h1>
          </div>

          <div className="flex items-start gap-3 pl-10 md:pl-24 -translate-y-6 md:-translate-y-8">
            <div className="w-[2px] h-16 bg-sky-400 rounded-full" />

            <div className="flex flex-col items-start text-left max-w-xs md:max-w-sm leading-snug">
              <p className="text-xs md:text-sm text-gray-200 mb-2 max-w-md md:max-w-lg leading-relaxed">
                Curabitur convallis convallis diam. Cras et varius mauris. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>

              <a
                onClick={() => clickWithHighlight("Read More", "/about")}
                className="mt-1 text-sm md:text-base font-semibold text-sky-300 hover:text-white cursor-pointer transition"
              >
                READ MORE →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        ref={headerRef}
        className={`absolute top-0 left-0 right-0 z-30 bg-black/30 backdrop-blur-md transition-all duration-200 ${
          isScrolled ? "py-2" : "py-5"
        }`}
      >
        <div className="w-full flex items-center justify-between px-2 md:px-4">
          {/* Logo */}
          <div className="flex items-center gap-1 text-white transition-all">
            <button
              onClick={() => clickWithHighlight("Home", "/home-1")}
              className="flex items-center gap-1 focus:outline-none group"
              onMouseEnter={onLogoMouseEnter}
              onMouseLeave={onLogoMouseLeave}
              onTouchStart={onLogoTouchStart}
              onFocus={onLogoFocus}
              onBlur={onLogoBlur}
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 transition-all overflow-hidden ${
                  isScrolled ? "w-9 h-9" : "w-16 h-16"
                }`}
              >
                <img src="/assets/Logo1.png" alt="Quantum HR logo" className="w-full h-full object-contain" />
              </div>

              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{ minWidth: 120, height: isScrolled ? 28 : 48, whiteSpace: "nowrap" }}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-200 transform ${
                    showFullLabel ? "opacity-0 -translate-y-1 scale-95" : "opacity-100 translate-y-0 scale-100"
                  }`}
                >
                  <span className="text-white font-extrabold text-xl md:text-2xl uppercase">Q-HR</span>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-200 transform ${
                    showFullLabel ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
                  }`}
                >
                  <span className="text-white font-extrabold text-xl uppercase">Quantum</span>
                  <span className="text-white font-semibold text-xs uppercase mt-0.5">HR</span>
                </div>
              </div>
            </button>
          </div>

          {/* Navigation (text-only by default; box on hover/click) */}
          <nav ref={navRef} className="flex items-center gap-6 md:gap-8 lg:gap-10 relative" onMouseLeave={handleNavMouseLeave}>
            {[{ name: "Home", path: "/home-1" }, ...menuItems, { name: "Pages", path: "pages" }, { name: "Contact Us", path: "/contact" }].map(
              (item) => renderButton(item)
            )}
          </nav>

          {/* Right CTA Get Started - box shape with arrow in rounded-rect */}
          <div className="flex items-center">
            <button
              onClick={() => clickWithHighlight("Get Started", "/contact")}
              className="flex items-center justify-between gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 shadow-md"
              style={{
                background: "#010E37",
                borderColor: CTA_BORDER_COLOR,
                color: "white",
              }}
            >
              <span className="uppercase font-semibold tracking-wide text-sm">
                GET STARTED
              </span>
              <span
                className="flex items-center justify-center rounded-md"
                style={{
                  width: 34,
                  height: 34,
                  background: "#2D9CFE",
                  color: "#00243a",
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}
