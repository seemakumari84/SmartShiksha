import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notes from './pages/Notes';
import PYQs from './pages/PYQs';
import Labs from './pages/Labs';
import Courses from './pages/Courses';
import SubmitNotes from './pages/SubmitNotes';
import UploadNotes from './components/UploadNotes';
import Quiz from './components/Quiz';
import Login from './components/Login'; // ✅ Ensure this path is correct
import Signup from './components/Signup'; // ✅ Add this import

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/notes" element={<Notes />} />
          <Route path="/pyqs" element={<PYQs />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/submit-notes" element={<SubmitNotes />} />
          <Route path="/submit" element={<UploadNotes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} /> {/* ✅ Added Login Route */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
