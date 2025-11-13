import React, { useState } from "react";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is QHRMS, and how does it help my business?",
      answer:
        "QHRMS (Quality Human Resource Management System) is a complete HR solution that automates employee management, payroll, leave tracking, and performance monitoring — improving efficiency and reducing manual work.",
    },
    {
      question: "How can employees access their payslips online?",
      answer:
        "Employees can log in to their QHRMS portal using their credentials and navigate to the ‘Payslips’ section to download or view their monthly payslips securely.",
    },
    {
      question: "Can QHRMS handle attendance and leave management?",
      answer:
        "Yes. QHRMS includes modules for attendance tracking, shift scheduling, and leave requests with approval workflows — all accessible from one dashboard.",
    },
    {
      question: "Is QHRMS suitable for small and medium enterprises (SMEs)?",
      answer:
        "Absolutely! QHRMS is designed to scale with your business. Whether you have 10 or 1000 employees, it adapts easily to your HR needs.",
    },
    {
      question: "Can I customize reports in QHRMS?",
      answer:
        "Yes, QHRMS allows you to generate and customize various reports — payroll summaries, attendance trends, and employee performance reports — as per your requirements.",
    },
    {
      question: "How secure is employee data stored in QHRMS?",
      answer:
        "QHRMS uses end-to-end encryption, secure cloud hosting, and role-based access control to ensure that all employee data remains private and protected.",
    },
    {
      question: "Does QHRMS integrate with payroll and accounting software?",
      answer:
        "Yes, QHRMS integrates seamlessly with popular payroll and accounting tools like Tally and QuickBooks to simplify financial operations.",
    },
    {
      question: "How can admins add or remove employees in QHRMS?",
      answer:
        "Admins can easily manage users from the ‘Employee Management’ panel, where they can add, update, or remove employee profiles in real-time.",
    },
    {
      question: "Is training provided for new users?",
      answer:
        "Yes, we provide complete onboarding and training sessions for HR teams and employees to ensure smooth adoption of QHRMS features.",
    },
    {
      question: "What support options are available after implementation?",
      answer:
        "We offer 24/7 customer support via email, chat, and phone, along with regular system updates and maintenance.",
    },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const open = activeIndex === idx;
        const num = idx + 1; // simple numbering (1, 2, 3...)

        return (
          <div
            key={idx}
            className={`border bg-sky-50 shadow-sm transition-shadow hover:shadow-md cursor-pointer rounded-t-xl rounded-b-3xl p-4`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(open ? null : idx)}
              aria-expanded={open}
              className="w-full flex items-start text-left"
            >
              {/* Number directly before question */}
              <span className="text-lg font-semibold text-sky-600 mr-2">
                {num}.
              </span>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-base md:text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span
                    className="text-2xl text-sky-600 select-none ml-4"
                    aria-hidden
                  >
                    {open ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`mt-3 text-gray-700 overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out ${
                    open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
