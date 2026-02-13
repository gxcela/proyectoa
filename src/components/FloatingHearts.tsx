"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generar corazones aleatorios
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100, // Posición horizontal aleatoria (%)
          animationDuration: 8 + Math.random() * 8, // 8-16 segundos
          size: 15 + Math.random() * 25, // 15-40px
          delay: Math.random() * 8, // Delay aleatorio
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up opacity-20"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          💕
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-float-up {
          animation: float-up linear infinite;
        }
      `}</style>
    </div>
  );
};
