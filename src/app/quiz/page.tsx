"use client";

import { useState, useEffect } from "react";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const questions = [
    {
      question: "¿Cuál es mi comida favorita que compartimos?",
      options: ["Pizza", "Sushi", "Asado", "Pasta"],
      correct: "Pizza",
      hint: "🍕 Siempre pedimos la misma",
    },
    {
      question: "¿Dónde fue nuestro primer beso?",
      options: ["Playa", "Cerro", "Restaurante", "Casa"],
      correct: "Playa",
      hint: "🌅 Al atardecer en Viña",
    },
    {
      question: "¿Qué canción pusimos en nuestro primer viaje juntos?",
      options: ["Despacito", "Perfect", "Shape of You", "Havana"],
      correct: "Perfect",
      hint: "💍 Ed Sheeran",
    },
    {
      question: "¿Cuál es mi apodo para ti?",
      options: ["Princesa", "Mi vida", "Corazón", "Amor"],
      correct: "Mi vida",
      hint: "❤️ Lo digo todos los días",
    },
    {
      question: "¿Qué quiero hacer contigo en el futuro?",
      options: ["Viajar el mundo", "Casarnos", "Tener hijos", "Todo lo anterior"],
      correct: "Todo lo anterior",
      hint: "🌍💍👨‍👩‍👧‍👦 ¡Todo!",
    },
  ];

  const currentQ = questions[currentQuestion];

  const handleAnswer = async (answer: string) => {
    if (isAnswering) return;
    
    setIsAnswering(true);
    setSelectedAnswer(answer);
    setFeedback("");

    // Simular delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const isCorrect = answer === currentQ.correct;
    setFeedback(isCorrect ? "¡Correcto! 🎉" : `Incorrecto 😘 Pista: ${currentQ.hint}`);

    if (isCorrect) {
      setScore(score + 1);
    }

    // Esperar feedback
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsAnswering(false);
    setSelectedAnswer("");
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setFeedback("");
    setIsAnswering(false);
    setGameFinished(false);
  };

  return (
    <main className="min-h-screen pt-28 px-4 py-12 max-w-2xl mx-auto">
      <section className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          ¿Cuánto me conoces? 🧠💕
        </h2>
        <div className="flex items-center justify-center gap-8 mb-12 p-4 bg-white/5 rounded-2xl">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text drop-shadow-lg">
              {score}
            </div>
            <div className="text-lg text-white/80 uppercase tracking-wide font-medium">Puntos</div>
          </div>
          <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl text-2xl md:text-3xl font-bold animate-pulse border-4 border-white/30">
            {currentQuestion + 1}/{questions.length}
          </div>
        </div>
      </section>

      {!gameFinished ? (
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="mb-12 p-8 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl border-2 border-pink-400/30 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center leading-tight">
              {currentQ.question}
            </h3>
            {feedback && (
              <div className={`text-center text-xl font-semibold py-4 rounded-2xl transition-all duration-300 ${
                feedback.includes("Correcto") 
                  ? "bg-emerald-500/20 border-2 border-emerald-400/50 text-emerald-100" 
                  : "bg-yellow-500/20 border-2 border-yellow-400/50 text-yellow-100"
              }`}>
                {feedback}
              </div>
            )}
          </div>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isAnswering}
                className={`
                  w-full p-6 md:p-8 rounded-3xl font-semibold text-lg md:text-xl text-left transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none group
                  ${selectedAnswer 
                    ? (option === currentQ.correct 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 shadow-emerald-500/50 border-4 border-emerald-400 !ring-4 !ring-emerald-400/30 scale-105' 
                        : selectedAnswer === option 
                          ? 'bg-gradient-to-r from-rose-500 to-red-600 shadow-rose-500/50 border-4 border-rose-400 !ring-4 !ring-rose-400/30 scale-105' 
                          : 'bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/30'
                      )
                    : 'bg-white/10 hover:bg-white/20 hover:border-2 hover:border-white/30 border-2 border-transparent hover:shadow-pink-500/20'
                  }
                `}
              >
                <span className="block">{option}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 md:p-20 border border-white/20 shadow-2xl text-center max-w-3xl mx-auto">
          <div className={`text-6xl md:text-8xl mb-8 ${
            score === 5 ? 'text-emerald-400 animate-bounce' : 'text-yellow-400'
          }`}>
            {score === 5 ? '💖' : '🥰'}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
            ¡{score === 5 ? "Perfecto" : score >= 3 ? "Excelente" : "¡Bien!"} mi amor!
          </h3>
          <div className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
            {score}
          </div>
          <p className="text-2xl md:text-3xl mb-12 text-white/95 font-light leading-relaxed max-w-2xl mx-auto">
            {score === 5 
              ? "¡Me conoces PER-FEC-TA-MENTE! Eres increíble 💖" 
              : "¡Estás muy cerca! Sigamos creando recuerdos juntos 💕"
            }
          </p>
          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white px-12 py-6 md:px-16 md:py-8 rounded-3xl text-xl md:text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-white/20 hover:border-white/40"
          >
            Jugar de nuevo 💕
          </button>
        </div>
      )}
    </main>
  );
}
