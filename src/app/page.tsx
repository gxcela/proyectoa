"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date("2022-02-16T00:00:00");
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const totalMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setDays(totalDays);
      setHours(totalHours);
      setMinutes(totalMinutes);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 px-3 sm:px-4 py-6 sm:py-8 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-8 animate-pulse px-2 opacity-0 animate-fadeIn">
        Feliz San Valentín 💖
      </h1>

      {/* Contador de días */}
      <div className="mb-8 sm:mb-10 md:mb-12 w-full max-w-3xl opacity-0 animate-fadeIn delay-200">
        <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-pink-400/40 shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-3xl sm:text-4xl md:text-5xl">💕</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
              Llevamos Juntas
            </h2>
            <span className="text-3xl sm:text-4xl md:text-5xl">💕</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-[0_2px_8px_rgba(236,72,153,0.8)] mb-2 animate-pulse leading-tight">
                {days.toLocaleString()}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-pink-200 font-semibold uppercase tracking-wider">Días</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-[0_2px_8px_rgba(168,85,247,0.8)] mb-2 leading-tight">
                {hours}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-purple-200 font-semibold uppercase tracking-wider">Horas</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-[0_2px_8px_rgba(236,72,153,0.8)] mb-2 leading-tight">
                {minutes}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-pink-200 font-semibold uppercase tracking-wider">Minutos</div>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/80 italic font-light">
            Desde el <span className="font-semibold text-pink-300">16 de febrero de 2022</span>
          </p>
        </div>
      </div>

      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed text-white/90 px-2 opacity-0 animate-fadeIn delay-300">
        Explora nuestra historia navegando por las secciones. 
        <br />
        <span className="text-pink-300 font-semibold">Te amo con todo mi corazón.</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl w-full px-2 sm:px-4">
        <a href="/carta" className="group opacity-0 animate-fadeIn delay-400">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-7 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">💌</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Carta</h3>
            <p className="text-sm sm:text-base">Mi carta especial para ti</p>
          </div>
        </a>
        <a href="/historia" className="group opacity-0 animate-fadeIn delay-500">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-7 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">📖</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Nuestra historia</h3>
            <p className="text-sm sm:text-base">Nuestra línea de tiempo juntas</p>
          </div>
        </a>
      </div>
    </main>
  );
}
