import React from "react";
import AnimatedPage from "../components/Animate";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-white px-4 py-10 md:px-20 font-sans">
        {/* Welcome Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-3 drop-shadow-md transition-all duration-500 hover:scale-105 hover:text-gray-600">
            Welcome to <span className="text-blue-600">SmartShiksha</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Breaking Barriers, Building CGPA. We are here to help you grow academically.
          </p>
        </header>

        {/* 3-Column Layout Start */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* Class Contents */}
          <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📚 Class Contents</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Class Notes (8 Jan – Today)</li>
              <li>Lab Files</li>
              <li>Assignments</li>
              <li>PYQs</li>
              <li>Practice Sets</li>
            </ul>
          </section>

          {/* Important Dates */}
          <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Important Dates</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Semester Start: 8 Jan 2024</li>
              <li>Mid-Sem: 11–22 Mar 2024</li>
              <li>End-Sem: 7–21 May 2024</li>
            </ul>
          </section>

          {/* Free Courses */}
          <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🆓 Free Courses</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>JavaScript Full Course</li>
              <li>Backend Development</li>
              <li>App Development</li>
              <li>MATLAB</li>
            </ul>
          </section>

          {/* YouTube Classes */}
          <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎥 YouTube Classes</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">EMFT</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">MPMC</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">DSP & OOP</a></li>
            </ul>
          </section>

          {/* Subjects Covered */}
          <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 xl:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📘 Subjects Covered</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {[
                { title: "Electromagnetic Field Theory", link: "https://www.youtube.com/watch?v=BQ5JYL0BFtk&list=PLxlldU21bDqMaZghkk1OxO62MKSHkzPU7" },
                { title: "Microprocessor & Microcontroller", link: "https://www.youtube.com/watch?v=jte2S2iWRMI&list=PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F" },
                { title: "Digital Signal Processing", link: "https://www.youtube.com/watch?v=cIH5o7wYNzs&list=PLXOYj6DUOGrpVb7_cCB1pZuGH4BFlp61B" },
                { title: "Object Oriented Programming", link: "https://www.youtube.com/watch?v=mlIUKyZIUUU" },
                { title: "Seminar and Report Writing", link: "https://www.youtube.com/watch?v=S-NKq89bNkk" },
                { title: "Optimization Techniques", link: "https://www.youtube.com/playlist?list=PLvfKBrFuxD065AT7q1Z0rDAj9kBnPnL0l" },
                { title: "Wireless Sensor Network", link: "https://www.youtube.com/watch?v=BBvG7uzmOV0" },
                { title: "Digital IC Design", link: "https://www.youtube.com/watch?v=g6CCJAbdkK8&list=PLHO2NKv71TvsSqYwVvUCZwNkY-jUyUHdS" },
              ].map((subject, i) => (
                <li key={i}>
                  <a href={subject.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {subject.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Roadmaps & Guidance */}
        <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 mb-10 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛠️ Roadmaps & Guidance</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">DSA Notes</a></li>
            <li><a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Web Dev Roadmap</a></li>
            <li><a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Resume Guide</a></li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Semester Timeline</h2>
          <Timeline />
        </section>

        {/* Syllabus Selector */}
        <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 Syllabus</h2>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Choose your subject:
            </label>
            <select
              id="subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select a Subject --</option>
              <option value="emft">Electromagnetic Field Theory</option>
              <option value="opt">Optimization Techniques</option>
              <option value="wsn">Wireless Sensor Network</option>
              <option value="dic">Digital IC Design</option>
              <option value="oop">Object Oriented Programming</option>
              <option value="dsp">Digital Signal Processing</option>
              <option value="mpmc">Microprocessor and Microcontroller</option>
              <option value="sem">Seminar and Report Writing</option>
            </select>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📖 Topics Covered</h3>
            <p className="text-gray-600">
              Please select a subject above to view the syllabus topics. (Dynamic content coming soon!)
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-white hover:scale-105 transition-all duration-300 rounded-xl shadow-md p-6 mb-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📬 Contact Info</h2>
          <ul className="text-gray-700 space-y-1 pl-6 list-disc">
            <li>Email: nauser522@gmail.com</li>
            <li>Phone: 8603410057</li>
            <li>Career Support: career@studymasalaa.com</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600 text-sm border-t pt-6">
          <p>&copy; 2025 StudyMasalaa.com. All rights reserved.</p>
          <p>Total Visits: [Visit Counter Here]</p>
        </footer>
      </div>
    </AnimatedPage>
  );
};

export default Home;
