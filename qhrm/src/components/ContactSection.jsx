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
               {/* Additional Message (slightly tighter spacing) */}
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






        {/* Smaller Upload Section (no 'Upload Resume' label) */}
        <div className="mt-4">
          <div className="flex items-center gap-4 w-full max-w-2xl p-3 border border-gray-200 rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition-all duration-150">
            <label
              htmlFor="file"
              className="flex items-center justify-center w-28 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition-all"
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

            <div className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-600 text-sm truncate">
              {form.file ? form.file.name : "No file selected."}
            </div>
          </div>

          <p className="mt-2 text-xs text-gray-400">
            *Upload your resume in pdf, jpg, png, or doc format.
          </p>
        </div>

        {/* Send Message Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

