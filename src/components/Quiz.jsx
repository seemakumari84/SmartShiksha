import React, { useEffect, useState } from "react";

const categories = {
  tech: 18, // Science: Computers
  core: 9,  // General Knowledge
};

const Quiz = () => {
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(null);

  // Shuffle options
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  // Fetch questions when topic is selected
  useEffect(() => {
    if (topic) {
      fetch(`https://opentdb.com/api.php?amount=20&category=${categories[topic]}&type=multiple`)
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.results.map((q) => ({
            question: decodeURIComponent(q.question),
            options: shuffle([...q.incorrect_answers, q.correct_answer].map(decodeURIComponent)),
            answer: decodeURIComponent(q.correct_answer),
          }));
          setQuestions(formatted);
        });
    }
  }, [topic]);

  // Countdown effect
  useEffect(() => {
    if (questions.length > 0 && countdown === null) {
      setCountdown(5);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [questions]);

  const handleOptionSelect = (questionIndex, selectedOption) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) newScore++;
    });
    setScore(newScore);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setTopic(null);
    setQuestions([]);
    setUserAnswers({});
    setShowResult(false);
    setScore(0);
    setCountdown(null);
  };

  // Topic Selection Screen
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#c8e6c9]">
        <div className="bg-white shadow-2xl rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose Your Interest</h2>
          <div className="space-x-6">
            <button
              onClick={() => setTopic("tech")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold rounded-full shadow-md"
            >
              Tech
            </button>
            <button
              onClick={() => setTopic("core")}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-all text-white font-semibold rounded-full shadow-md"
            >
               Core
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading screen
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4] text-2xl font-bold animate-pulse">
        ⏳ Fetching questions, please wait...
      </div>
    );
  }

  // Countdown screen
  if (countdown > 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff7ed] text-5xl font-extrabold text-orange-600 animate-bounce">
        ⏰ Quiz begins in: {countdown}
      </div>
    );
  }

  // Quiz interface
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] to-[#e0f2f1] py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
        {!showResult ? (
          <>
            <h1 className="text-3xl font-bold text-center text-green-800 mb-8"> Quiz Time!</h1>
            {questions.map((q, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Q{idx + 1}: {q.question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionSelect(idx, opt)}
                      className={`transition-all text-left px-4 py-2 border rounded-lg shadow-sm font-medium ${
                        userAnswers[idx] === opt
                          ? "bg-green-200 border-green-500 text-green-900"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={calculateScore}
                className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition-all"
              >
                 Submit Quiz
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-green-700 mb-6">🎉 Quiz Complete!</h2>
            <p className="text-2xl text-gray-700 mb-4">
              You scored <span className="font-bold text-blue-600">{score}</span> out of{" "}
              <span className="font-bold">{questions.length}</span>
            </p>
            <button
              onClick={restartQuiz}
              className="mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-md transition-all"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
