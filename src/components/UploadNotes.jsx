import React, { useState } from "react";
import axios from "axios";

export default function UploadNotes() {
  const [uploadType, setUploadType] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !uploadType) return alert("Please select a file and category");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", uploadType);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Upload successful!");
    } catch (error) {
      alert("Upload failed");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Upload your  documents</h2>

      <p className="text-center text-gray-600">What do you want to upload for?</p>

      <div className="space-y-2">
        <button
          className={`w-full px-4 py-2 border rounded ${uploadType === "exam" ? "bg-blue-100" : ""}`}
          onClick={() => setUploadType("exam")}
        >
          Class Notes 
        </button>
        <button
          className={`w-full px-4 py-2 border rounded ${uploadType === "college" ? "bg-blue-100" : ""}`}
          onClick={() => setUploadType("college")}
        >
          Lab Experiment
        </button>
        <button
          className={`w-full px-4 py-2 border rounded ${uploadType === "highschool" ? "bg-blue-100" : ""}`}
          onClick={() => setUploadType("highschool")}
        >
          Coding Project file
        </button>
      </div>

      <div>
        <input type="file" onChange={handleFileChange} className="mt-4" />
      </div>

      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
}