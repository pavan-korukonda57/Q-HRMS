import React from "react";

export default function FeedbackForm() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16 px-4 bg-[#f2f8fc]">
      {/* Inner Box */}
      <div className="w-full max-w-3xl bg-[#cce6ff] rounded-[28px] shadow-md p-10 sm:p-12">
        <h3 className="text-4xl sm:text-5xl font-semibold text-center text-[#002b5b] mb-10 tracking-tight">
          Feedback Form
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-b-2 focus:border-[#004aad] outline-none py-3 placeholder-gray-700 text-gray-800"
          />

          {/* Mobile */}
          <input
            type="tel"
            placeholder="Mobile Number*"
            className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-b-2 focus:border-[#004aad] outline-none py-3 placeholder-gray-700 text-gray-800"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-b-2 focus:border-[#004aad] outline-none py-3 placeholder-gray-700 text-gray-800"
          />

          {/* Service Type */}
          <div className="relative">
            <select
              className="w-full bg-transparent appearance-none border-0 border-b border-gray-500 focus:border-b-2 focus:border-[#004aad] outline-none py-3 placeholder-gray-700 text-gray-800"
            >
              <option value="">Choose types of service*</option>
              <option value="consulting">Consulting</option>
              <option value="training">Training</option>
              <option value="support">Support</option>
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Additional Message"
            className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-b-2 focus:border-[#004aad] outline-none py-4 placeholder-gray-700 text-gray-800 resize-none md:col-span-2"
            rows={5}
          ></textarea>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 bg-gradient-to-r from-[#007bff] to-[#005fcc] hover:from-[#006ee0] hover:to-[#004bb8] text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
            >
              SEND MESSAGE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
