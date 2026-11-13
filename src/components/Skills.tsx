'use client';

import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [query, setQuery] = useState('');

  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple, Human Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Languages, frameworks, databases, and tools I work with.
            </p>
          </div>

          {/* Quick Filter Input */}
          <div className="w-full sm:w-64 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a skill..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-xs"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const filteredSkills = cat.skills.filter((s) =>
              s.name.toLowerCase().includes(query.toLowerCase())
            );

            if (query && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs"
              >
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {filteredSkills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                        s.highlight
                          ? 'bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/80 font-semibold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
