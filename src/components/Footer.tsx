'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Candidate Branding */}
          <div className="text-center sm:text-left">
            <p className="font-bold text-slate-900 dark:text-white text-sm">
              {personalInfo.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              MCA Student @ FISAT • Full-Stack Web & Python Developer
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="ml-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400 transition-all flex items-center gap-1.5 text-xs font-medium"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Anu Mariya Varghese. Designed with clean code and modern web standards.</p>
        </div>

      </div>
    </footer>
  );
}
