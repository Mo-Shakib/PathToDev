import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
            <Link href="/" className="flex items-center space-x-3">
              <span className="self-center text-xl font-semibold text-blue-600">PathToDev</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <Link href="/dsa-to-development" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">DSA to Development</Link>
                <Link href="/career-tips" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Career Tips</Link>
                <Link href="/job-search" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Job Search</Link>
                <Link href="/tutorials" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Tutorials</Link>
                <Link href="/roadmaps" className="text-sm text-blue-900 dark:text-blue-100 hover:text-blue-600">Roadmaps</Link>
              </div>
              <Link href="/get-mentorship" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Get Mentorship</Link>
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
                  <li><Link href="/dsa-to-development" className="text-gray-300 hover:text-white">DSA to Development</Link></li>
                  <li><Link href="/career-tips" className="text-gray-300 hover:text-white">Career Tips</Link></li>
                  <li><Link href="/job-search" className="text-gray-300 hover:text-white">Job Search</Link></li>
                  <li><Link href="/tutorials" className="text-gray-300 hover:text-white">Tutorials</Link></li>
                  <li><Link href="/roadmaps" className="text-gray-300 hover:text-white">Roadmaps</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <Link href="/get-mentorship" className="text-gray-300 hover:text-white">Get Mentorship</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
