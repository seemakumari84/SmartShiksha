import React, { useState } from "react";

const pyqData = {
  "Semester 1": {
    "Introduction to Computing": "https://drive.google.com/drive/folders/your_pyq_link_here",
    "Engineering Physics": "https://drive.google.com/drive/folders/your_pyq_link_here",
  },
  "Semester 2": {
    "Engineering Chemistry": "https://drive.google.com/drive/folders/your_pyq_link_here",
    "Electrical Workshop": "https://drive.google.com/drive/folders/your_pyq_link_here",
  },
  // Add more semesters and subjects here as needed
};

const PYQAccess = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = selectedSemester ? Object.keys(pyqData[selectedSemester]) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-green-700 mb-10">
        📝 Access PYQs
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl border border-green-200">
        <h2 className="text-2xl font-bold text-green-600 mb-4">📄 Previous Year Questions</h2>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-green-600">Select Semester</label>
          <select
            value={selectedSemester}
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              setSelectedSubject("");
            }}
            className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">-- Choose Semester --</option>
            {Object.keys(pyqData).map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>

        {selectedSemester && (
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-green-600">Select Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              <option value="">-- Choose Subject --</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedSubject && (
          <div className="mt-6 text-center">
            <a
              href={pyqData[selectedSemester][selectedSubject]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
            >
              📂 Open PYQs Drive
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PYQAccess;

