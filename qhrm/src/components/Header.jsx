import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const LANGUAGES = [
  "English","Telugu","Hindi","Tamil","Kannada","Malayalam","Marathi","Bengali",
  "Gujarati","Urdu","Punjabi","Odia","Assamese","Nepali","Sindhi",
  "French","Spanish","German","Chinese","Japanese","Arabic","Russian",
  "Portuguese","Korean","Italian"
];

export default function Header() {
  const [language, setLanguage] = useState("English");
  const [open, setOpen] = useState(false);

  // highlight position (px from top of list container)
  const [highlightTop, setHighlightTop] = useState(-9999);
  const [itemHeight, setItemHeight] = useState(36);

  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
        setHighlightTop(-9999);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // measure item height when dropdown opens
  useEffect(() => {
    if (open && listRef.current) {
      const firstItem = listRef.current.querySelector("li");
      if (firstItem) {
        const h = Math.round(firstItem.getBoundingClientRect().height);
        setItemHeight(h || 36);
      }
    }
  }, [open]);

  // move highlight to pointer position inside list (continuous)
  function handleListMouseMove(e) {
    const rect = listRef.current.getBoundingClientRect();
    const padding = 4; // keep highlight inset a bit
    let y = e.clientY - rect.top; // pointer y inside list
    // center highlight on pointer
    let top = Math.round(y - itemHeight / 2);
    // clamp
    const maxTop = rect.height - itemHeight - padding;
    if (top < padding) top = padding;
    if (top > maxTop) top = Math.max(padding, maxTop);
    setHighlightTop(top);
  }

  function handleListMouseLeave() {
    // hide highlight when pointer leaves
    setHighlightTop(-9999);
  }

  return (
    <header className="bg-[#001233] text-white text-sm w-full border-b border-[#1268fb1a]">
      <div className="flex flex-col md:flex-row items-center justify-between py-3 px-6 w-full h-[46px]">

        {/* Left: address + phone */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1268fb]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <span>Bengaluru, India</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1268fb]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.61a1 1 0 01-1 1A17.93 17.93 0 012 6a1 1 0 011-1h3.6a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.05l-2.33 2.06z" />
            </svg>
            <a href="tel:+919652353197" className="hover:text-[#1268fb]">+91 96523 53197</a>
          </div>
        </div>

        {/* Right: mail + language */}
        <div className="flex items-center gap-4 mt-3 md:mt-0 overflow-visible md:ml-6 lg:ml-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1268fb]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13L2 6.76V18h20V6.76L12 13zM22 4H2l10 6 10-6z" />
            </svg>
            <a href="mailto:info@company.com" className="hover:text-[#1268fb]">info@company.com</a>
          </div>

          {/* Language selector */}
          <div className="relative flex items-center" ref={dropdownRef}>
            <span className={`text-sm select-none ${language === "English" ? "text-white" : "text-[#1268fb]"}`}>
              {language}
            </span>

            <button
              type="button"
              onClick={() => {
                setOpen((s) => !s);
                setHighlightTop(-9999);
              }}
              aria-expanded={open}
              aria-haspopup="listbox"
              className="p-1 ml-1 rounded focus:outline-none flex items-center"
            >
              <FaChevronDown className={`text-white text-base transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
            </button>

            {open && (
              <div
                className="absolute right-0 top-full mt-1 w-44 bg-[#001233] text-white rounded-md border border-[#1268fb1a] shadow-lg z-50 max-h-[260px] overflow-y-auto text-sm"
                role="listbox"
              >
                <ul
                  ref={listRef}
                  className="relative p-1"
                  onMouseMove={handleListMouseMove}
                  onMouseLeave={handleListMouseLeave}
                >
                  {/* moving highlight (follows mouse smoothly) */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 6,
                      right: 6,
                      height: `${itemHeight}px`,
                      top: highlightTop,
                      background: "#1268fb",
                      borderRadius: 8,
                      transition: "top 100ms cubic-bezier(.2,.9,.2,1), opacity 120ms",
                      opacity: highlightTop > -9000 ? 0.18 : 0,
                      pointerEvents: "none",
                      zIndex: 5,
                    }}
                  />

                  {LANGUAGES.map((lang, idx) => {
                    const isSelected = language === lang;
                    return (
                      <li
                        key={lang}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setLanguage(lang);
                          setOpen(false);
                          setHighlightTop(-9999);
                        }}
                        className={`relative z-10 flex items-center justify-between px-3 py-2 cursor-pointer rounded ${
                          isSelected ? "bg-[#1268fb] text-white" : ""
                        }`}
                      >
                        <span className={`${isSelected ? "text-white" : ""}`}>{lang}</span>
                        {isSelected && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

