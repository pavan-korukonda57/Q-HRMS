import React, { useState } from "react";

export default function InspiringEvents() {
  const [activeIndex, setActiveIndex] = useState(null);

  const events = [
    {
      id: 1,
      month: "MAR",
      day: "12",
      year: "2025",
      title: "HR Best Practices",
      subtitle: "Diversity And Inclusion Workshop",
      text: "Learn how to build inclusive workplaces that empower every team member to thrive.",
      image: "/assets/events1.png",
    },
    {
      id: 2,
      month: "APR",
      day: "05",
      year: "2025",
      title: "Employee Wellness",
      subtitle: "Mindfulness & Motivation",
      text: "Explore new strategies to enhance employee engagement and mental well-being.",
      image: "/assets/events2.png",
    },
    {
      id: 3,
      month: "MAY",
      day: "19",
      year: "2025",
      title: "Leadership Summit",
      subtitle: "Future of Work & Innovation",
      text: "Join visionary leaders to discuss emerging trends in leadership and innovation.",
      image: "/assets/events3.png",
    },
    {
      id: 4,
      month: "JUN",
      day: "08",
      year: "2025",
      title: "Team Synergy Meet",
      subtitle: "Building Collaborative Cultures",
      text: "Discover how to improve team collaboration and align cross-functional teams effectively.",
      image: "/assets/events4.png",
    },
    {
      id: 5,
      month: "JUL",
      day: "22",
      year: "2025",
      title: "Digital HR Forum",
      subtitle: "AI & Automation in HR",
      text: "Uncover the latest HR technologies and AI tools shaping the workforce of tomorrow.",
      image: "/assets/events5.png",
    },
  ];

  return (
    <section className="py-20 bg-[#F4F8FF] text-center">
      <h2 className="text-5xl font-bold text-[#002D62] mb-12 tracking-wide">
        Inspiring Events
      </h2>

      <div className="flex flex-col items-center gap-12">
        {events.map((event, index) => (
          <div
            key={event.id}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer w-[90%] md:w-[1350px] h-[230px] rounded-3xl shadow-xl overflow-hidden relative transition-all duration-500 border-2 ${
              activeIndex === index
                ? "text-white border-transparent"
                : "bg-white hover:shadow-2xl text-[#002D62] border-[#cfe0f5]"
            }`}
            style={{
              backgroundImage:
                activeIndex === index ? `url(${event.image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black/40"></div>
            )}

            <div className="relative z-10 flex items-center h-full p-8 gap-8 text-left">
              {/* Date Box */}
              <div className="bg-sky-500 text-white rounded-2xl p-5 w-[140px] text-center shadow-md">
                <div className="text-xl font-bold">{event.month}</div>
                <div className="text-5xl font-extrabold leading-tight">
                  {event.day}
                </div>
                <div className="text-sm font-medium">{event.year}</div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between max-w-[750px]">
                <div>
                  <h3 className="text-3xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-lg font-medium mb-3">{event.subtitle}</p>
                  <p className="text-base opacity-80 mb-5">{event.text}</p>
                </div>

                <button className="bg-[#002D62] text-white px-6 py-3 rounded-xl text-base w-fit hover:bg-[#004aad] transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
