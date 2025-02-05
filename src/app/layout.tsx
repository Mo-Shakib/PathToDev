import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import MobileNav from './components/MobileNav';
import './globals.css';
import Image from 'next/image';

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
      <body className={`${inter.className} bg-white`}>
        <nav className="bg-blue-50 shadow-sm fixed w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="./dev.svg"
                alt="PathToDev Logo"
                width={40}
                height={40}
                priority
              />
              <span className="text-lg font-bold text-blue-600">Path to Dev</span>
            </Link>
            <MobileNav />
          </div>
        </nav>
        <main className="mt-16">{children}</main>
        <footer className="bg-blue-900 text-white py-12">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">PathToDev</h2>
                <p className="text-gray-200 mb-4">Your comprehensive guide to becoming a software engineer</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <ul className="space-y-2">
                  <li><Link href="/dsa-to-development" className="text-gray-200 hover:text-white">DSA to Development</Link></li>
                  <li><Link href="/career-tips" className="text-gray-200 hover:text-white">Career Tips</Link></li>
                  <li><Link href="/job-search" className="text-gray-200 hover:text-white">Job Search</Link></li>
                  <li><Link href="/tutorials" className="text-gray-200 hover:text-white">Tutorials</Link></li>
                  <li><Link href="/roadmaps" className="text-gray-200 hover:text-white">Roadmaps</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <ul className="space-y-2">
                  <li><Link href="/get-mentorship" className="text-gray-200 hover:text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Get Mentorship
                  </Link></li>
                  <li><Link href="https://github.com/moshakib" className="text-gray-200 hover:text-white flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                    GitHub
                  </Link></li>
                  <li><Link href="https://youtube.com/@pathtodev" className="text-gray-200 hover:text-white flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
