import React, { useState } from "react";

export default function CareersJobs() {
  const [activeJob, setActiveJob] = useState(null);

  const jobs = [
    {
      title: "Benefits Manager",
      type: "Shift Work",
      location: "USA/Canada - Part Time",
      description:
        "As a Benefits Manager, you’ll oversee employee compensation, health benefits, and wellness programs. You’ll collaborate with HR teams to design packages that attract top talent while maintaining compliance with regional laws.",
    },
    {
      title: "Compensation Analyst",
      type: "Contract",
      location: "US/Canada - Full Time",
      description:
        "Analyze and design compensation packages, perform salary benchmarking, and ensure fair and competitive pay structures across departments.",
    },
    {
      title: "HR Compliance Officer",
      type: "Remote",
      location: "US/Germany - Full Time",
      description:
        "Ensure the organization complies with all employment laws and internal policies. You'll also conduct audits and create training programs for managers.",
    },
    {
      title: "Labor Relations Specialist",
      type: "Contract",
      location: "US/Canada - Part Time",
      description:
        "Facilitate negotiations between management and employees, handle grievances, and ensure a productive and fair workplace environment.",
    },
    {
      title: "Payroll Specialist",
      type: "Shift Work",
      location: "UK/Canada - Full Time",
      description:
        "Manage payroll processing, ensure accurate employee payments, and maintain payroll systems with confidentiality and precision.",
    },
    {
      title: "Sourcing Specialist",
      type: "Remote",
      location: "UK/Canada - Part Time",
      description:
        "Identify and engage potential candidates, build strong pipelines, and collaborate with hiring managers to fulfill staffing needs efficiently.",
    },
    {
      title: "Talent Acquisition Specialist",
      type: "Remote",
      location: "USA/Italy - Full Time",
      description:
        "Lead end-to-end recruitment for various departments, strategize talent acquisition campaigns, and drive employer branding initiatives.",
    },
  ];

  return (
    <>
    

      {/* Job Listings */}
      <section className="px-6 md:px-20 py-10">
        <div className="space-y-5 max-w-3xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white hover:bg-sky-50 transition p-5 rounded-xl cursor-pointer shadow-sm hover:shadow-md"
              onClick={() => setActiveJob(activeJob === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg text-sky-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    • {job.type} &nbsp; • {job.location}
                  </p>
                </div>
                <span className="text-sky-600 text-xl">
                  {activeJob === index ? "−" : "+"}
                </span>
              </div>
              {activeJob === index && (
                <p className="mt-3 text-gray-700">{job.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
