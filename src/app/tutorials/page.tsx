export default function Tutorials() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Video Tutorials</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Frontend Development</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">React Fundamentals</h3>
            <p className="text-gray-700 mb-4">Master React.js with hands-on tutorials and real-world projects.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Component architecture</li>
              <li>State management</li>
              <li>React hooks in depth</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Modern CSS</h3>
            <p className="text-gray-700 mb-4">Learn advanced CSS techniques and modern layout patterns.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Flexbox and Grid layouts</li>
              <li>CSS animations and transitions</li>
              <li>Responsive design patterns</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Backend Development</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Node.js Mastery</h3>
            <p className="text-gray-700 mb-4">Build scalable backend services with Node.js and Express.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>RESTful API design</li>
              <li>Database integration</li>
              <li>Authentication and security</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Database Design</h3>
            <p className="text-gray-700 mb-4">Master database concepts and implementation strategies.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>SQL fundamentals</li>
              <li>NoSQL databases</li>
              <li>Data modeling best practices</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Featured Series</h2>
        <p className="text-center text-gray-700 mb-6">Complete tutorial series to master full-stack development</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">MERN Stack</h3>
            <p className="text-sm text-gray-700">Build full-stack apps with MongoDB, Express, React, and Node.js</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Cloud Development</h3>
            <p className="text-sm text-gray-700">Deploy and scale applications on AWS and Azure</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Mobile Development</h3>
            <p className="text-sm text-gray-700">Create cross-platform mobile apps with React Native</p>
          </div>
        </div>
      </section>
    </div>
  );
}