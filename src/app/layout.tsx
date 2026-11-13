import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://anu-mariya.dev'),
  title: 'Anu Mariya Varghese | Software Engineer & Full-Stack Developer',
  description: 'Portfolio of Anu Mariya Varghese - Software Engineer, MCA Student at FISAT, and Full-Stack Developer specializing in MERN Stack, Python, Flask, and AI integrations.',
  keywords: [
    'Anu Mariya Varghese',
    'Software Engineer',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React.js',
    'Node.js',
    'Python Developer',
    'Flask',
    'MCA FISAT',
    'Web Developer Kerala',
    'Frontend Developer',
    'Backend Developer'
  ],
  authors: [{ name: 'Anu Mariya Varghese' }],
  openGraph: {
    title: 'Anu Mariya Varghese | Software Engineer & Full-Stack Developer',
    description: 'Specializing in MERN stack, Python, and AI-driven web systems. View featured projects, technical experience, and skills.',
    url: 'https://github.com/Anu-Mariya',
    siteName: 'Anu Mariya Varghese Portfolio',
    images: [
      {
        url: '/anu-mariya-varghese.jpg',
        width: 800,
        height: 1000,
        alt: 'Anu Mariya Varghese - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
