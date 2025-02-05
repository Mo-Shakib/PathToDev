'use client';

import { useState } from 'react';

export default function Mentorship() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mo.shakib.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <section className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
          Schedule a Mentorship Session
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
          Get personalized guidance from experienced developers who&apos;ve been in your shoes
        </p>
      </section>
      
      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl ring-1 ring-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              placeholder="e.g., Career Guidance Session"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              placeholder="Describe what you&apos;d like to discuss in the session..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
          >
            Schedule Session
          </button>
        </form>

        <div className="mt-8 space-y-2 text-sm text-blue-600">
          <p>* Once you submit, your default email client will open with a pre-filled message.</p>
          <p>* We typically respond within 24-48 hours.</p>
        </div>
      </div>
    </div>
  );
}
