import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm((s) => ({ ...s, file: files[0] || null }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent successfully (demo)");
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 text-gray-800">
      <div className="mb-5">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
          Reach Out To Us
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-10">
        Don't Hesitate To Reach Us
      </h2>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Your Name*</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-400 outline-none py-3 bg-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">Email Address*</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-400 outline-none py-3 bg-transparent"
              required
            />
          </div>
        </div>

        {/* Mobile + Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Mobile Number*</label>
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-400 outline-none py-3 bg-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">Choose types of service*</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-400 outline-none py-3 bg-transparent"
              required
            >
              <option value="">Select a service</option>
              <option value="hr-outsourcing">HR Outsourcing</option>
              <option value="payroll">Payroll</option>
              <option value="recruitment">Recruitment</option>
              <option value="consulting">Consulting</option>
            </select>
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-sm text-gray-500 mb-0 leading-none">Additional Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border-b border-gray-300 focus:border-blue-400 outline-none pt-0.5 pb-2 bg-transparent resize-none"
          />
        </div>

        {/* Upload + SEND MESSAGE button (same line) */}
        <div className="flex items-center justify-between w-full max-w-full mt-2 gap-4">

          {/* Upload Box */}
          <div className="flex items-center gap-2 w-full max-w-sm p-2 border border-gray-200 rounded-md bg-gray-50 shadow-sm">
            <label
              htmlFor="file"
              className="flex items-center justify-center w-20 px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded cursor-pointer"
            >
              Upload
            </label>

            <input
              id="file"
              name="file"
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              onChange={handleChange}
              className="hidden"
            />

            <div className="flex-1 px-2 py-1 bg-white border border-gray-300 rounded text-gray-600 text-xs truncate">
              {form.file ? form.file.name : "No file selected."}
            </div>
          </div>

          {/* SEND MESSAGE Button - SAME SHAPE AS "GET STARTED" */}
          <button
            type="submit"
            className="flex items-center justify-between gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 shadow-md"
            style={{
              background: "#010E37",
              borderColor: "#2D9CFE",
              color: "white",
            }}
          >
            <span className="uppercase font-semibold tracking-wide text-sm">
              SEND MESSAGE
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

        <p className="mt-1 text-[10px] text-gray-400">
          *Upload your resume in pdf, jpg, png, or doc format.
        </p>
      </form>
    </section>
  );
}
