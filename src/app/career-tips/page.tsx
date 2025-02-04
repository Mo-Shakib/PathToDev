export default function CareerTips() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-900 dark:text-blue-100">Career Growth Tips</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Development</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Technical Skills</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Stay ahead in your career by mastering these essential technical skills.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Full-stack development expertise</li>
              <li>Cloud computing and DevOps</li>
              <li>System design and architecture</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Soft Skills</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Develop essential interpersonal skills that set you apart in the tech industry.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Communication and collaboration</li>
              <li>Project management</li>
              <li>Leadership and mentoring</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Career Advancement</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Growth Strategies</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Proven strategies to accelerate your career progression in software development.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Setting career goals and milestones</li>
              <li>Building a professional network</li>
              <li>Contributing to open source</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Industry Insights</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Stay informed about industry trends and opportunities.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Emerging technologies</li>
              <li>Market demand and salaries</li>
              <li>Company culture and work-life balance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Success Stories</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Learn from the experiences of successful software engineers</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Junior to Senior Dev</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">How I became a senior developer in 3 years</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Tech Lead Journey</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">My path to technical leadership</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Startup Success</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">From developer to startup founder</p>
          </div>
        </div>
      </section>
    </div>
  );
}