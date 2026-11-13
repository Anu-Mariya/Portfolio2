'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Check, Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack Web & AI', 'Machine Learning & Web', 'Full-Stack Web (MERN)'];

  const displayedProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple, Human Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projects I&apos;ve Built
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              A selection of web applications and machine learning projects I&apos;ve developed.
            </p>
          </div>

          <a
            href="https://github.com/Anu-Mariya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline w-fit"
          >
            <span>See all repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400">
                  {project.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.tagline}
              </p>

              {/* Context & Description */}
              <div className="my-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                <p>
                  <strong className="text-slate-900 dark:text-white">Why I built it: </strong>
                  {project.problem}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">What it does: </strong>
                  {project.solution}
                </p>
              </div>

              {/* Key Features & What I Did */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Key Features & What I Did
                </h4>
                <ul className="space-y-2">
                  {project.candidateContribution.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Code Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl || 'https://github.com/Anu-Mariya'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-500 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:text-sky-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code on GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
