'use client';

import React from 'react';
import { User, Code, Heart, Sparkles, Languages, Check, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "Full-Stack Development",
      desc: "Building complete web apps from responsive React interfaces to Node.js & Flask backend APIs."
    },
    {
      title: "Clean, Maintainable Code",
      desc: "Focusing on well-organized project structures, clear database schemas, and code that is easy to read."
    },
    {
      title: "Applied AI & Data",
      desc: "Integrating practical AI APIs (like Gemini for image categorization) and training Scikit-learn ML models."
    },
    {
      title: "Department Coordination",
      desc: "Serving as Student Coordinator at FISAT, organizing technical sessions, and working closely with faculty."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple, Human Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A little background about who I am, what I build, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Hi there! I&apos;m Anu Mariya, a Master of Computer Applications (MCA) student at the <span className="font-semibold text-slate-900 dark:text-white">Federal Institute of Science and Technology (FISAT)</span> in Angamaly, Kerala. Prior to this, I completed my Bachelor of Computer Application (BCA) at Sahrdaya College.
            </p>

            <p>
              I got into software engineering because I love turning an idea into something tangible that people can open in their browsers and use seamlessly. Most of my recent projects focus on the <span className="font-semibold text-slate-900 dark:text-white">MERN stack</span> (MongoDB, Express, React, and Node.js) and <span className="font-semibold text-slate-900 dark:text-white">Python</span>.
            </p>

            <p>
              Whether it&apos;s architecting a civic complaint platform with AI-assisted photo tagging, predicting heart attack risk with a machine learning model, or automating cafeteria meal orders, I care deeply about clean structure, thoughtful database schemas, and smooth user experiences.
            </p>

            <p>
              Outside of classes and coding, I serve as a student coordinator for our department, which has helped me build strong teamwork and communication skills. When I&apos;m not on my laptop, I enjoy playing chess, doing creative craft works, and learning about new web technologies.
            </p>

            {/* Language badges */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-sky-500" />
                Languages:
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                English (B2 Certified)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Malayalam (Native)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Tamil
              </span>
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              What I focus on
            </h3>

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
              >
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Quick summary note */}
            <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/70 dark:border-sky-900/40 text-xs text-sky-900 dark:text-sky-300 leading-relaxed space-y-2.5">
              <p>
                <strong>Looking for:</strong> Full-Stack / Software Engineering internships and entry-level positions where I can contribute to meaningful products and learn alongside experienced engineers.
              </p>
              <div className="pt-1 border-t border-sky-200/60 dark:border-sky-900/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">PDF format • 83 KB</span>
                <a
                  href={personalInfo.resumeUrl}
                  download="Anu_Mariya_Varghese_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-sky-700 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-200 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
