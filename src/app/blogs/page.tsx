export default function Blogs() {
  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Learning Roadmaps</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Frontend Development Path</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">HTML & CSS Mastery</h3>
            <p className="text-gray-700 mb-4">Build a strong foundation in web development fundamentals.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Semantic HTML best practices</li>
              <li>CSS layouts and responsive design</li>
              <li>Modern CSS frameworks</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">JavaScript Essentials</h3>
            <p className="text-gray-700 mb-4">Master modern JavaScript and popular frameworks.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>ES6+ features and patterns</li>
              <li>Asynchronous programming</li>
              <li>React and Next.js development</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Backend Development Path</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Server-Side Programming</h3>
            <p className="text-gray-700 mb-4">Learn to build robust and scalable backend services.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js and Express.js</li>
              <li>Database design patterns</li>
              <li>API development best practices</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">DevOps and Deployment</h3>
            <p className="text-gray-700 mb-4">Master the tools and practices for modern deployment.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>CI/CD pipelines</li>
              <li>Cloud services (AWS, Azure)</li>
              <li>Container orchestration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Specialized Paths</h2>
        <p className="text-center text-gray-700 mb-6">Dive deep into specific areas of software development</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Mobile Development</h3>
            <p className="text-sm text-gray-700">React Native and cross-platform development</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Cloud Architecture</h3>
            <p className="text-sm text-gray-700">Building scalable cloud solutions</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">AI & Machine Learning</h3>
            <p className="text-sm text-gray-700">Integration of AI in web applications</p>
          </div>
        </div>
      </section>
    </div>
  );
}