'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const linkStyle = (path: string) => `
    text-blue-600 hover:text-blue-800 font-semibold
    ${isActive(path) ? 'font-bold' : ''}
  `;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="./dev.svg"
              alt="PathToDev Logo"
              width={32}
              height={32}
              className="text-blue-600"
            />
            <span className="text-xl font-bold text-gray-900">PathToDev</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/roadmaps" className="text-gray-600 hover:text-gray-900">Roadmaps</Link>
            <Link href="/tutorials" className="text-gray-600 hover:text-gray-900">Tutorials</Link>
            <Link href="/job-search" className="text-gray-600 hover:text-gray-900">Job Search</Link>
            <Link href="/career-tips" className="text-gray-600 hover:text-gray-900">Career Tips</Link>
            <Link href="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
          </div>

          <Link
            href="/get-mentorship"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Mentorship
          </Link>
        </div>
      </div>
    </nav>
  );
}