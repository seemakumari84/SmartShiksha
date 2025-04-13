import React, { useState } from "react";

const SubmitNotes = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const notesData = {
    // make sure this has actual data
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
      {/* rest of the JSX stays same */}
    </div>
  );
};

export default SubmitNotes;
