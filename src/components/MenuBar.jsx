import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShareMaterialModal from "./ShareMaterialModal";

const MenuBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const classContentItems = [
    "Class Notes",
    "Lab files",
    "Assignments",
    "PYQs",
    "Question practice sets",
  ];

  const clubs = [
    "Robotics",
    "Hackslash",
    "IEEE SB",
    "IEEE PES",
    "DesCo",
    "GYB",
    "NatVansh",
    "Expresso",
  ];

  const quizzes = ["Tech", "Core"];

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <>
      <div className="flex justify-center pt-2 z-10 relative">
        <div className="border-2 border-blue-600 flex bg-white divide-x divide-gray-400 shadow-md relative">
          {/* Class Contents */}
          <div className="relative">
            <button
              className="px-6 py-4 font-semibold"
              onClick={() => toggleDropdown("class")}
            >
              Class contents
            </button>
            {dropdownOpen === "class" && (
              <div className="absolute left-0 mt-1 bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-50 w-56">
                {classContentItems.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quizzes */}
          <div className="relative">
            <button
              className="px-6 py-4 font-semibold"
              onClick={() => toggleDropdown("quizzes")}
            >
              Quizzes
            </button>
            {dropdownOpen === "quizzes" && (
              <div className="absolute left-0 mt-1 bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-50 w-56">
                {quizzes.map((quiz, index) => (
                  <Link
                    key={index}
                    to={`/quiz/${quiz.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {quiz}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Clubs and societies */}
          <div className="relative">
            <button
              className="px-6 py-4 font-semibold"
              onClick={() => toggleDropdown("clubs")}
            >
              Clubs and societies
            </button>
            {dropdownOpen === "clubs" && (
              <div className="absolute left-0 mt-1 bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-50 w-56">
                {clubs.map((club, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {index + 1}. {club}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guidance */}
          <button className="px-6 py-4 font-semibold hover:bg-blue-100">
            Guidance
          </button>

          {/* Share Study Materials */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-4 font-semibold hover:bg-blue-100"
          >
            Share Study_Materials
          </button>
        </div>
      </div>

      {/* Modal */}
      <ShareMaterialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MenuBar;
