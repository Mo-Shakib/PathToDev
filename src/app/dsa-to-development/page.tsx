export default function DSAtoDev() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-900 dark:text-blue-100">DSA to Development</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Understanding Data Structures</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Arrays and Strings</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Master the fundamentals of array manipulation and string processing with real-world examples from web development.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Dynamic arrays in modern frameworks</li>
              <li>String manipulation in web applications</li>
              <li>Performance optimization techniques</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Hash Tables and Sets</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Learn how hash tables power modern web applications and optimize data lookup operations.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Caching implementations</li>
              <li>Efficient data storage patterns</li>
              <li>Real-world use cases in React and Node.js</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Essential Algorithms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Searching and Sorting</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Understand when and how to implement different searching and sorting algorithms in your applications.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Binary search in autocomplete features</li>
              <li>Sorting in data tables and lists</li>
              <li>Pagination and filtering implementations</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Graph Algorithms</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Explore graph algorithms and their applications in modern web development.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Social network features</li>
              <li>Recommendation systems</li>
              <li>Route finding in maps</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Practice Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Apply your DSA knowledge with these hands-on projects</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Task Manager</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Build a task manager using arrays and sorting algorithms</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Search Engine</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Implement search functionality using tries and pattern matching</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Social Network</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Create a mini social network using graph algorithms</p>
          </div>
        </div>
      </section>
    </div>
  );
}