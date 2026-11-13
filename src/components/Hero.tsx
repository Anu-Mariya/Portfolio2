'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Mail, Github, Linkedin, MapPin, Sparkles, FolderGit2, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-sky-400/10 via-indigo-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Natural Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Friendly Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-medium mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for internships & software roles</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m <span className="text-sky-600 dark:text-sky-400">{personalInfo.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-2">
              Full-Stack Web & Python Developer
            </p>

            {/* Natural, human summary */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              I love building practical web applications that solve real-life problems. Currently pursuing my <span className="text-slate-900 dark:text-white font-medium">MCA at FISAT, Kerala</span>, I spend most of my time working across the <span className="text-slate-900 dark:text-white font-medium">MERN stack</span>, building with <span className="text-slate-900 dark:text-white font-medium">Python & Flask</span>, and exploring applied AI.
            </p>

            {/* Quick Skills Pills */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {['React.js', 'Node.js & Express', 'MongoDB', 'Python & Flask', 'MySQL', 'REST APIs'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-all"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>See My Work</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Anu_Mariya_Varghese_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-50 dark:bg-sky-950/70 hover:bg-sky-100 dark:hover:bg-sky-900/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-sm transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="mt-7 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>Kerala, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Natural Portrait Photo (No Box) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-92 md:w-80 md:h-[410px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
