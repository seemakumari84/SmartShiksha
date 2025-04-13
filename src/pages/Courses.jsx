import React from "react";
const courseData = [
  // Original Courses
  {
    title: "DSA with Love Babbar",
    description: "Comprehensive playlist for Data Structures and Algorithms.",
    link: "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    image: "https://img.youtube.com/vi/B31LgI4Y4DQ/hqdefault.jpg",
  },
  {
    title: "Web Dev Full Course",
    description: "Frontend + Backend + Deployment using MERN stack.",
    link: "https://www.youtube.com/watch?v=Vi9bxu-M-ag&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD",
    image: "https://img.youtube.com/vi/Vi9bxu-M-ag/hqdefault.jpg",
  },
  {
    title: "Operating System by Gate Smashers",
    description: "Understand OS concepts in simple language.",
    link: "https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8",
    image: "https://img.youtube.com/vi/_TpOHMCODXo/hqdefault.jpg",
  },
  {
    title: "DBMS by CodeWithHarry",
    description: "Relational Databases, SQL, ER Models and more.",
    link: "https://www.youtube.com/watch?v=dl00fOOYLOM&t=95s",
    image: "https://img.youtube.com/vi/HXV3zeQKqGY/hqdefault.jpg",
  },

  // Electrical
  {
    title: "Electrical Machines by NPTEL",
    description: "Deep dive into transformers, motors, and generators.",
    link: "https://www.youtube.com/watch?v=LPcQYXjPdIQ&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV",
    image: "https://i.ytimg.com/vi/StzVQMbNM5Q/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGGUgZShlMA8=&rs=AOn4CLCkmABU3DB99GeJqj3KLXH0EHWQkQ",
  },
  {
    title: "Power Systems - GATE Academy",
    description: "Detailed lessons on transmission, distribution, and fault analysis.",
    link: "https://www.youtube.com/watch?v=b2KxDIJz_hE&list=PLgzsL8klq6DJd8AJm1Q3gTsEeNR_mqXrz",
    image: "https://i.ytimg.com/vi/oor61soh0hk/maxresdefault.jpg",
  },

  // Mechanical
  {
    title: "Thermodynamics for Mechanical Engineers",
    description: "Covers laws of thermodynamics, cycles, and applications.",
    link: "https://www.youtube.com/watch?v=_RgdIl5sBcY&list=PLjtQ3BMex7ht7qBa9zZ3EryYvFrA_N9E8",
    image: "https://i.ytimg.com/vi/DPz0LQbNL_c/maxresdefault.jpg",
  },
  {
    title: "Engineering Mechanics by NPTEL",
    description: "Statics, dynamics, kinematics, and real-world mechanical systems.",
    link: "https://www.youtube.com/playlist?list=PL3DC64AFEA1E5E6E2",
    image: "https://i.ytimg.com/vi/Ljyltb-xTXE/maxresdefault.jpg",
  },

  // Electronics
  {
    title: "Digital Electronics - Unacademy GATE",
    description: "Covers logic gates, flip-flops, counters, and more.",
    link: "https://www.youtube.com/watch?v=sFilX_6j884&list=PLOG_8OlGMp73cbcI1vw-q0I_IyjlsEhyI",
    image: "https://i.ytimg.com/vi/em869c3Xnp8/maxresdefault_live.jpg",
  },
  {
    title: "Analog Circuits - Gate Academy",
    description: "Op-Amps, diodes, BJT & FET-based circuit analysis.",
    link: "https://www.youtube.com/watch?v=0yeP-2KP_lM&list=PLgzsL8klq6DK3J0amVI70Of1blA9vEXaD",
    image: "https://i.ytimg.com/vi/IUD7gn0w7GU/maxresdefault.jpg",
  },

  // Robotics
  {
    title: "Robotics - Basics to Advanced (Coursera)",
    description: "Introduction to robotics including kinematics & control.",
    link: "https://www.youtube.com/watch?v=s00h55Zv3p0&list=PLgMDNELGJ1CZT9pdEEkDylXFPLdcqxn0t",
    image: "https://i.ytimg.com/vi/CoCyOJ1ucng/maxresdefault.jpg",
  },
  {
    title: "ROS (Robot Operating System) Crash Course",
    description: "Build real robotic software systems using ROS.",
    link: "https://www.youtube.com/watch?v=dDODrSy6cYU&list=PLlqdnFs9xNwql5KET7v7zyl393y10qxtw",
    image: "https://i.ytimg.com/vi/N6K2LWG2kRI/maxresdefault.jpg",
  },
];
const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-teal-100 to-lime-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-800 mb-12 text-center">
          📚 Recommended Courses
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courseData.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
                <button className="bg-green-500 text-white py-2 px-4 rounded-full text-sm hover:bg-green-600 transition-all duration-300">
                  View Course
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;