

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PricingPlans() {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const plans = [
    {
      id: "basic",
      label: "Basic",
      title: "Basic HR Plan",
      monthly: "69.99",
      yearly: "699.99",
      cta: "Boost your Profit",
      features: [
        "24/7 Customer support",
        "On-site training and workshops",
        "Complete recruiting and talent acquisition",
        "Customized benefits programs",
      ],
    },
    {
      id: "pro",
      label: "Pro",
      title: "Pro HR Plan",
      monthly: "89.99",
      yearly: "899.99",
      cta: "Elevate your Growth",
      badge: "Popular",
      features: [
        "24/7 Customer support",
        "On-site training and workshops",
        "Complete recruiting and talent acquisition",
        "Customized benefits programs",
        "Access to advanced HRIS",
        "Legal support for conflicts",
        "Leadership training programs",
      ],
    },
    {
      id: "enterprise",
      label: "Recommended",
      title: "Enterprise HR Plan",
      monthly: "129.99",
      yearly: "1299.99",
      cta: "Improve progression",
      features: [
        "Leadership training programs",
        "Legal support for conflicts",
        "Customized benefits programs",
        "Complete recruiting and talent acquisition",
      ],
    },
  ];

  return (
    <section
      className="text-center py-28 text-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/stories3.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001a33]/85"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-sky-300 mb-6">
            Choose the Perfect HR Plan for Your Business
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Select from our flexible plans designed to support teams of all sizes.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-14">
          <span
            className={`cursor-pointer text-lg ${
              billing === "monthly" ? "text-sky-400 font-semibold" : "text-gray-400"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </span>
          <div
            className="w-16 h-8 bg-gray-500 rounded-full relative cursor-pointer"
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all ${
                billing === "yearly" ? "translate-x-8" : ""
              }`}
            ></div>
          </div>
          <span
            className={`cursor-pointer text-lg ${
              billing === "yearly" ? "text-sky-400 font-semibold" : "text-gray-400"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </span>
        </div>

        {/* Plans */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isMiddle = plan.id === "pro";

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative flex-1 p-10 rounded-3xl cursor-pointer transform transition-all duration-300
                ${
                  isMiddle
                    ? "min-w-[360px] max-w-[420px]" // middle → thinner
                    : "min-w-[420px] max-w-[500px]" // edges → wider
                }
                ${
                  isSelected
                    ? "scale-110 border-2 border-sky-400 bg-black/70"
                    : "border border-gray-700 bg-black/50 hover:border-blue-500 hover:scale-105"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-5 right-5 bg-blue-600 px-4 py-1 rounded-full text-xs font-semibold">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {plan.label}
                </h3>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  {plan.title}
                </h2>
                <p className="text-gray-400 mb-8 text-base leading-relaxed">
                  Parturient elementum in, rutrum tristique inceptos sit suspendisse faucibus velit.
                </p>

                <p className="text-5xl font-bold mb-6 text-blue-300">
                  ${billing === "monthly" ? plan.monthly : plan.yearly}
                  <span className="text-base font-normal text-gray-400">
                    /{billing}
                  </span>
                </p>

                <a
                  href="#"
                  className={`flex items-center justify-between px-6 py-3 rounded-xl mb-8 text-lg font-semibold transition ${
                    isSelected
                      ? "bg-sky-500 text-black hover:bg-sky-400"
                      : "bg-blue-600 text-white hover:bg-blue-500"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <FaArrowRight />
                </a>

                <ul className="space-y-3 text-base text-gray-300 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
