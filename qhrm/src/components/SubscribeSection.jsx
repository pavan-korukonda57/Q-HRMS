
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function SubscribeSection() {
  return (
    <section className="py-16 bg-black text-white">
      {/* Make content touch left edge */}
      <div className="pl-4 sm:pl-8 text-left">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
          Newsletter Subscription
        </h3>

        <h2 className="text-3xl font-bold mb-4 leading-snug">
          Don't Miss Out On Exclusive Insights <br /> And Special Promotions
        </h2>

        {/* Address (input + send) section */}
        <div className="flex items-center max-w-xl bg-[#002D62] rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your mail address here"
            className="flex-1 py-3 px-4 bg-transparent text-white placeholder-gray-300 outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 flex items-center gap-2">
            Send
            <FaArrowRight className="transform -rotate-45 text-white text-lg" />
          </button>
        </div>

        <p className="text-sm text-gray-300 mt-4">
          By subscribing you agree to our Terms & Conditions and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
