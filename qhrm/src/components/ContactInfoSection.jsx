
import React from "react";

export default function ContactInfoSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-left">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Don’t Hesitate To Ask Any Questions
      </h2>
      <p className="text-gray-600 max-w-2xl mb-12">
        We’re always happy to assist you with any inquiries or support you
        might need. Reach out to us via phone, email, or visit our offices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl">
        {/* 1️⃣ Call */}
        <div className="flex flex-col items-start">
          <div className="bg-blue-600 text-white text-4xl p-5 rounded-2xl mb-4 shadow-lg">
            📞
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            Call Us 24hrs
          </h3>
          <p className="text-gray-700">+91 96523 53197</p>
          <p className="text-gray-700">+91 98765 43210</p>
        </div>

        {/* 2️⃣ Email */}
        <div className="flex flex-col items-start">
          <div className="bg-blue-600 text-white text-4xl p-5 rounded-2xl mb-4 shadow-lg">
            📧
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            Email Us
          </h3>
          <p className="text-gray-700">info@yourcompany.com</p>
          <p className="text-gray-700">support@yourcompany.com</p>
        </div>

        {/* 3️⃣ Address */}
        <div className="flex flex-col items-start">
          <div className="bg-blue-600 text-white text-4xl p-5 rounded-2xl mb-4 shadow-lg">
            🏢
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            Office Address
          </h3>
          <p className="text-gray-700">
            No.58A, East Madison Street, Hyderabad, India 500081
          </p>
        </div>

        {/* 4️⃣ Hours */}
        <div className="flex flex-col items-start">
          <div className="bg-blue-600 text-white text-4xl p-5 rounded-2xl mb-4 shadow-lg">
            ⏰
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            Office Hours
          </h3>
          <p className="text-gray-700">Mon–Fri: 9am–6pm</p>
          <p className="text-gray-700">Sat–Sun: Holiday</p>
        </div>
      </div>
    </section>
  );
}
