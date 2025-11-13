
import React from "react";

export default function BlogSection() {
  const blogData = {
    leftPost: {
      date: "23 October, 2024",
      title:
        "Mindfulness techniques for reducing workplace stress and work disputes",
      excerpt:
        "Cras vel interdum lectus. Lacinia lectus suspendisse perin. Egestas...",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f3e1b9a0d7ae9ebd9b4b8f4d7e2f6f0",
    },
    rightPosts: [
      {
        date: "23 October, 2024",
        title:
          "Developing a stronger company work culture: 10 Powerful key success strategies",
        excerpt:
          "Fusce amet platea metus libero dictumst. Tincidunt sapien quam efficitur mus interdum sit. Nec sodales...",
      },
      {
        date: "23 October, 2024",
        title:
          "The importance of continuous learning in the workplace for personal society growth",
        excerpt:
          "Ultricies ipsum quam luctus lobortis etiam. Fermentum dictumst class; conubia mattis varius.",
      },
    ],
  };

  return (
    // Full-width section
    <section className="w-full bg-sky-100 py-20">
      {/* Content container spans full width with small side padding on mobile */}
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE: Hero post */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[580px] md:h-[780px] bg-gray-100">
            <img
              src={blogData.leftPost.image}
              alt={blogData.leftPost.title}
              className="w-full h-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

            {/* Date badge */}
            <div className="absolute top-10 left-10">
              <span className="inline-flex items-center gap-2 bg-slate-900/90 text-white text-base px-5 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM4 6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H4z" />
                </svg>
                {blogData.leftPost.date}
              </span>
            </div>

            {/* Text content */}
            <div className="absolute left-10 bottom-10 right-10 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-md">
                {blogData.leftPost.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-white/90">
                {blogData.leftPost.excerpt}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Blog List */}
          <div className="flex flex-col gap-8">
            {/* Section Header */}
            <div>
              <span className="inline-flex items-center gap-2 text-sm md:text-base px-4 py-2 rounded-full bg-white/60 text-sky-700 border border-sky-200">
                Explore Ideas, Share Insights →
              </span>
              <h2 className="mt-6 text-5xl font-bold text-slate-800 leading-tight">
                Latest News & Blog
              </h2>
            </div>

            {/* Blog Cards */}
            <div className="flex flex-col gap-8">
              {blogData.rightPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-3xl shadow-md border border-slate-100 p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM4 6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H4z" />
                        </svg>
                        {post.date}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-800 leading-tight">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-slate-600">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
