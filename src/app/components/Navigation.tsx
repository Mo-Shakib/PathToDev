'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const linkStyle = (path: string) => `
    text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300
    ${isActive(path) ? 'font-semibold' : ''}
  `;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm mb-4">
      <div className="max-w-screen-xl mx-auto px-4 py-2 sm:py-4">
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-semibold text-lg">PathToDev</span>
          <button
            onClick={toggleMenu}
            className="block sm:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`${isOpen ? 'block' : 'hidden'} sm:flex sm:space-x-6 md:space-x-8 sm:justify-center flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-0`}>
          <li>
            <Link href="/dsa-to-development/" className={linkStyle('/dsa-to-development')}>
              DSA to Development
            </Link>
          </li>
          <li>
            <Link href="/career-tips/" className={linkStyle('/career-tips')}>
              Career Tips
            </Link>
          </li>
          <li>
            <Link href="/job-search/" className={linkStyle('/job-search')}>
              Job Search
            </Link>
          </li>
          <li>
            <Link href="/tutorials/" className={linkStyle('/tutorials')}>
              Tutorials
            </Link>
          </li>
          <li>
            <Link href="/roadmaps/" className={linkStyle('/roadmaps')}>
              Roadmaps
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}