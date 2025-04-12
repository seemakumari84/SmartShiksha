// src/App.js
import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";

import Notes from './pages/Notes';
import PYQs from './pages/PYQs';
import Labs from './pages/Labs';
import Courses from './pages/Courses';
import SubmitNotes from './pages/SubmitNotes';

import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
    {isLoggedIn ? (
      <>
        <Navbar />
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/pyqs" element={<PYQs />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/submit-notes" element={<SubmitNotes />} />
          <Route path="/" element={<h1>Welcome to StudyMasalaa Clone 🚀</h1>} />
        </Routes>
      </>
    ) : (
      <Login onLogin={() => setIsLoggedIn(true)} />
    )}
  </Router>
);
}

export default App;
