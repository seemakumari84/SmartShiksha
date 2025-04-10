import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-700 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">StudyMasalaa Clone</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/notes" className="hover:underline">Notes</Link>
      <Link to="/pyqs" className="hover:underline">PYQs</Link>
      <Link to="/labs" className="hover:underline">Lab Files</Link>
      <Link to="/courses" className="hover:underline">Courses</Link>
      <Link to="/submit" className="hover:underline">Submit Notes</Link>
    </div>
  </nav>
);

export default Navbar;
