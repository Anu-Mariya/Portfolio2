'use client';

import React from 'react';
import { Calendar, MapPin, Check, GraduationCap, Award } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 md:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple, Human Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            My academic degrees and technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-sky-500" />
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                      {edu.gradeOrStatus}
                    </span>
                    <span className="text-xs text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {edu.location}
                  </p>

                  {edu.highlights && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
                      {edu.highlights.map((h, hIdx) => (
                        <p key={hIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-indigo-500" />
              <span>Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {cert.year}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                      {cert.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    Issuer: <span className="font-medium text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
