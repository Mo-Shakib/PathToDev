'use client';

import Link from 'next/link';

export default function MobileNav() {
  const toggleMenu = () => {
    const menu = document.getElementById('navbar-menu');
    menu?.classList.toggle('hidden');
  };

  return (
    <>
      <button
        type="button"
        className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div id="navbar-menu" className="hidden w-full md:block md:w-auto">
        <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 bg-blue-50 dark:bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-lg">
          <Link href="/dsa-to-development" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600 py-2 md:py-0">DSA to Dev</Link>
          <Link href="/career-tips" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600 py-2 md:py-0">Career Tips</Link>
          <Link href="/job-search" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600 py-2 md:py-0">Job Search</Link>
          <Link href="/tutorials" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600 py-2 md:py-0">Tutorials</Link>
          <Link href="/roadmaps" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600 py-2 md:py-0">Roadmaps</Link>
        </div>
      </div>
    </>
  );
}