import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Path to Dev - Your Guide to Software Engineering',
  description: 'A comprehensive guide to help you transition from zero to expert in software engineering, development, and front-end development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <nav className="bg-blue-50 dark:bg-gray-800 shadow-sm fixed w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
            <a href="/" className="flex items-center space-x-3">
              <span className="self-center text-xl font-semibold text-blue-600">PathToDev</span>
            </a>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <a href="/dsa-to-development" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">DSA to Development</a>
                <a href="/career-tips" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Career Tips</a>
                <a href="/job-search" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Job Search</a>
                <a href="/tutorials" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Tutorials</a>
                <a href="/roadmaps" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Roadmaps</a>
              </div>
              <a href="/get-mentorship" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Get Mentorship</a>
            </div>
          </div>
        </nav>
        <main className="mt-16">{children}</main>
        <footer className="bg-blue-900 text-white py-12">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">PathToDev</h2>
                <p className="text-gray-300 mb-4">Your comprehensive guide to becoming a software engineer</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <ul className="space-y-2">
                  <li><a href="/dsa-to-development" className="text-gray-300 hover:text-white">DSA to Development</a></li>
                  <li><a href="/career-tips" className="text-gray-300 hover:text-white">Career Tips</a></li>
                  <li><a href="/job-search" className="text-gray-300 hover:text-white">Job Search</a></li>
                  <li><a href="/tutorials" className="text-gray-300 hover:text-white">Tutorials</a></li>
                  <li><a href="/roadmaps" className="text-gray-300 hover:text-white">Roadmaps</a></li>
                  <li><a href="/get-mentorship" className="text-gray-300 hover:text-white">Get Mentorship</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Connect</h2>
                <div className="flex space-x-4">
                  <a href="https://github.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://linkedin.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://youtube.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              © 2024 PathToDev. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
