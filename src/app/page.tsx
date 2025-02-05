'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full -mt-4">
      {/* Hero Section - Reduced padding by ~20% */}
      <section className="w-full text-center py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/dev.svg"
              alt="Software Development Illustration"
              width={400}
              height={300}
              priority
              className="w-full max-w-[240px] h-auto"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            From Zero to Expert in Software Development
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Your Journey to Software Engineering Excellence Starts Here. Master Data Structures, Algorithms, Development, and Launch Your Tech Career
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
            <Link href="/dsa-to-development/" className="bg-blue-500 text-white px-8 md:px-10 py-4 rounded-[20px] hover:bg-blue-600 transition-colors shadow-lg w-full md:w-auto text-center text-lg">
              Start Learning
            </Link>
            <Link href="/get-mentorship/" className="border-2 border-blue-500 text-blue-500 px-8 md:px-10 py-4 rounded-[20px] hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors w-full md:w-auto text-center text-lg">
              Get Mentorship
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-gray-50 py-12 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            Why Choose PathToDev?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 italic max-w-[80%] mx-auto">
            &quot;Becoming a software developer isn&apos;t just about writing code—it&apos;s about solving real problems, building projects, and breaking free from the endless loop of tutorials. I was stuck there too—watching countless YouTube videos, jumping between courses, unsure of what to do next or how to reach my goal. I wasn&apos;t lacking effort; I was lacking guidance. Once I found the right path, everything changed. Now, I share my journey—the mistakes, the breakthroughs, and the lessons—to help you escape the cycle, stay focused, and build a real career in tech.&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-[10px] mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Structured Learning Path</h3>
              <p className="text-gray-600">From DSA to real-world development, follow our proven roadmap to success</p>
            </div>

            <div className="text-center p-6 bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-[10px] mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600">Learn from experienced developers through tutorials and 1:1 mentorship</p>
            </div>

            <div className="text-center p-6 bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-[10px] mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Career Support</h3>
              <p className="text-gray-600">Get help with resume building, interview prep, and job searching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-12 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Mentorship Program</h2>
          <p className="text-center text-gray-600 mb-6">Get personalized guidance from experienced developers who&apos;ve been in your shoes.</p>
          <div className="text-center">
            <Link href="/get-mentorship/" className="bg-blue-600 text-white px-8 py-3 rounded-[20px] hover:bg-blue-700 transition-colors inline-block">
              Schedule a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Grid Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Video Tutorials</h2>
              <p className="text-gray-600 mb-3">Step-by-step video guides covering essential development topics and best practices.</p>
              <Link href="/tutorials/" className="text-blue-600 hover:text-blue-800">Watch Now →</Link>
            </div>

            <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Learning Roadmaps</h2>
              <p className="text-gray-600 mb-3">Structured learning paths and comprehensive guides to master software development.</p>
              <Link href="/roadmaps/" className="text-blue-600 hover:text-blue-800">View Roadmaps →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
