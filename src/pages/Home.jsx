import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Welcome to StudyMasalaa 🚀
        </h1>
        <p className="text-lg text-gray-700">
          Breaking Barriers, Building CGPA
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">📚 Class Contents</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li>Class Notes</li>
          <li>Lab Files</li>
          <li>Assignments</li>
          <li>PYQs</li>
          <li>Question Practice Sets</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">🎥 YouTube Classes</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              Electromagnetic Field Theory
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              Microprocessor & Microcontroller
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">🛠️ Roadmaps & Guidance</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li>
            <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              DSA Notes
            </a>
          </li>
          <li>
            <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              Web Development Roadmap
            </a>
          </li>
          <li>
            <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              Resume Guide
            </a>
          </li>
        </ul>
      </section>

      <footer className="text-center mt-12 text-gray-600">
        <p>&copy; 2025 StudyMasalaa.com</p>
        <p>Contact: nauser522@gmail.com</p>
      </footer>
    </div>
  );
};

export default Home;
