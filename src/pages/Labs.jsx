import React, { useState } from "react";

const driveLinks = {
  "Semester 1": {
    "Introduction to Computing": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Engineering Physics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Communicative English": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 2": {
    "Engineering Chemistry": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Electrical Workshop": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Engineering Graphics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 3": {
    "Electrical Machines-I": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Analog Electronics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 4": {
    "Electrical Machines-II": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Digital Electronics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 5": {
    "Power Electronics": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Signal and System Analysis": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 6": {
    "Power System Protection": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
    "Industrial Drives and Control": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 7": {
    "Dissertation - I": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
  "Semester 8": {
    "Dissertation - II": "https://drive.google.com/drive/folders/1hIVVMDffOt19JrvSasCtU2fLE83kdGY0",
  },
};

const LabViewer = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject(""); // reset subject when semester changes
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const getDriveLink = () => {
    return driveLinks[selectedSemester]?.[selectedSubject] || "#";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-8">📂 Lab File Viewer</h1>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        {/* Semester Dropdown */}
        <label className="block mb-6">
          <span className="block text-sm font-medium text-green-600">Select Semester:</span>
          <select
            value={selectedSemester}
            onChange={handleSemesterChange}
            className="mt-2 block w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">-- Choose Semester --</option>
            {Object.keys(driveLinks).map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </label>

        {/* Subject Dropdown */}
        {selectedSemester && (
          <label className="block mb-6">
            <span className="block text-sm font-medium text-green-600">Select Subject:</span>
            <select
              value={selectedSubject}
              onChange={handleSubjectChange}
              className="mt-2 block w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              <option value="">-- Choose Subject --</option>
              {Object.keys(driveLinks[selectedSemester]).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>
        )}

        {/* View Button */}
        {selectedSubject && (
          <a
            href={getDriveLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-md"
          >
            🔍 View Lab Files
          </a>
        )}
      </div>
    </div>
  );
};

export default LabViewer;

