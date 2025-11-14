

import React, { useState } from "react";

export default function ContactBox() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.phone.trim()) err.phone = "Mobile number is required";
    if (!form.service.trim()) err.service = "Please choose a service";
    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      console.log("Submitting form:", form);
      alert("Message sent (demo).");
      setForm({ name: "", phone: "", service: "" });
    }
  }

  return (
    <section className="min-h-[60vh] bg-white py-8">
      <div className="max-w-3xl mx-auto px-6">

        {/* Component Background (sky-200) */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-sky-200">
          <div className="p-8 md:p-10">

            {/* Contact Info */}
            <div className="mb-10">
              <h2
                className="text-3xl font-bold text-slate-800 tracking-tight"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                We're Nearby
              </h2>

              <div className="mt-6 space-y-6">
                <ContactRow
                  title="Call Us 24hrs"
                  lines={["+011-234-5678", "+011-234-56789"]}
                  icon={
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M20 15.5a16 16 0 0 1-7-7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 14.5v3a2 2 0 0 1-2 2c-9.94 0-18-8.06-18-18A2 2 0 0 1 7 1h3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />

                <ContactRow
                  title="Email Us"
                  lines={["info@example.com", "support@example.com"]}
                  icon={
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 8.5l9 6 9-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  }
                />

                <ContactRow
                  title="Office Address"
                  lines={[
                    "No: 58 A, East Madison Street,",
                    "Baltimore, MD, USA 4508",
                  ]}
                  icon={
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 21s6-4.35 6-10a6 6 0 10-12 0c0 5.65 6 10 6 10z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="11"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Say Hello Form */}
            <div>
              <h3
                className="text-3xl font-bold text-slate-800 mb-6"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Say, Hello !
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* INPUT 1 */}
                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-2">
                    Your Name*
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b border-slate-400 py-3 px-2 placeholder-slate-400 text-slate-800 font-medium focus:outline-none focus:border-[#1268fb] transition ${
                      errors.name ? "ring-1 ring-red-300" : ""
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* INPUT 2 */}
                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-2">
                    Mobile Number*
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b border-slate-400 py-3 px-2 placeholder-slate-400 text-slate-800 font-medium focus:outline-none focus:border-[#1268fb] transition ${
                      errors.phone ? "ring-1 ring-red-300" : ""
                    }`}
                    placeholder="+91 99999 99999"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* SELECT */}
                <div>
                  <label className="block text-sm text-slate-700 font-medium mb-2">
                    Choose types of service*
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`appearance-none w-full py-3 pl-2 pr-10 border-b border-slate-400 bg-transparent text-slate-800 font-medium focus:outline-none focus:border-[#1268fb] ${
                        errors.service ? "ring-1 ring-red-300" : ""
                      }`}
                    >
                      <option value="">-- Select service --</option>
                      <option>Consultation</option>
                      <option>Maintenance</option>
                      <option>Custom Work</option>
                    </select>
                    <span className="absolute right-2 top-3 text-slate-500 pointer-events-none">
                      ▾
                    </span>
                  </div>
                  {errors.service && (
                    <p className="text-sm text-red-600 mt-1 font-medium">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="flex items-center justify-between gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                      background: "#010E37",
                      borderColor: "#2D9CFE",
                      color: "white",
                    }}
                  >
                    <span className="uppercase font-semibold tracking-wide text-sm">
                      GET STARTED
                    </span>
                    <span
                      className="flex items-center justify-center rounded-md"
                      style={{
                        width: 36,
                        height: 36,
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// ContactRow
function ContactRow({ icon, title, lines }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-xl shadow-md"
        style={{ background: "#1268FB" }}
      >
        {icon}
      </div>

      <div className="flex-1">
        <div
          className="text-lg font-semibold text-slate-800"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {title}
        </div>
        <div className="text-sm text-slate-700 font-medium mt-1 space-y-0.5">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

