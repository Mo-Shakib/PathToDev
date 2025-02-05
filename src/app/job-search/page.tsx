export default function JobSearch() {
  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Job Search Success</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Resume Building</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Resume Essentials</h3>
            <p className="text-gray-600 mb-4">Craft a compelling resume that showcases your technical expertise and achievements.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Project highlights and impact</li>
              <li>Technical skills presentation</li>
              <li>Professional experience formatting</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Portfolio Development</h3>
            <p className="text-gray-600 mb-4">Build an impressive portfolio that demonstrates your coding abilities.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Project selection strategies</li>
              <li>GitHub profile optimization</li>
              <li>Documentation best practices</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Interview Preparation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Technical Interviews</h3>
            <p className="text-gray-600 mb-4">Prepare for coding interviews with comprehensive practice and strategies.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Algorithm problem-solving</li>
              <li>System design interviews</li>
              <li>Code review exercises</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Behavioral Interviews</h3>
            <p className="text-gray-600 mb-4">Master the art of presenting your experience and soft skills.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>STAR method responses</li>
              <li>Leadership examples</li>
              <li>Conflict resolution stories</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Job Search Resources</h2>
        <p className="text-center text-gray-600 mb-6">Essential tools and platforms for your job search</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Job Boards</h3>
            <p className="text-sm text-gray-600">Top platforms for tech job listings</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Networking</h3>
            <p className="text-sm text-gray-600">Professional networking strategies</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Salary Research</h3>
            <p className="text-sm text-gray-600">Industry compensation insights</p>
          </div>
        </div>
      </section>
    </div>
  );
}