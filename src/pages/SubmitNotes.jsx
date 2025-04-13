import React, { useState } from "react";

const SubmitNotes = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Example of notesData with actual data
  const notesData = {
    semester1: { subject1: "Notes for Subject 1", subject2: "Notes for Subject 2" },
    semester2: { subject1: "Notes for Subject 1", subject2: "Notes for Subject 2" },
  };

  const subjects = selectedSemester ? Object.keys(notesData[selectedSemester]) : [];

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a file to upload.");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setUploadSuccess(true);
        setSelectedFile(null);
      } else {
        alert("Upload failed. Try again!");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">📚 Access Notes Drive</h1>
      <form onSubmit={handleFileSubmit} className="space-y-4">
        <div>
          <label htmlFor="semester" className="block text-sm font-semibold">Select Semester:</label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select a semester</option>
            <option value="semester1">Semester 1</option>
            <option value="semester2">Semester 2</option>
          </select>
        </div>

        {selectedSemester && (
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold">Select Subject:</label>
            <select
              id="subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {notesData[selectedSemester][subject]}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="file" className="block text-sm font-semibold">Upload Notes:</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-600 text-white rounded"
        >
          Submit Notes
        </button>
      </form>

      {uploadSuccess && (
        <p className="mt-4 text-green-600">File uploaded successfully!</p>
      )}
    </div>
  );
};

export default SubmitNotes;
