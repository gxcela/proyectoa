"use client";

import { useState } from "react";

export default function RazonesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 💕 PERSONALIZA TUS RAZONES AQUÍ
  const razones = [
    "Eres la mujer más hermosa del mundo",
    "Amas mucho a los animales",
    "Eres muy muy muuuy inteligente",
    "Cocinas muy rico",
    "Me cuidas cuando me siento mal",
    "Me das los mejores consejos",
    "Me haces reír siempre",
    "Te gusta ir a conciertos",
    "Me haces sentir muy bien en la cama o donde sea :$",
    "Quieres tener una familia conmigo (ojalá 4 hij@s jeje)",
    "Eres mi mejor amiga",
    "Me compras siempre cositas ricas",
    "Me impulsas a ser mejor persona",
    "Me haces sentir linda",
    "Te quieres casar conmigo (yapo y cuándo?)",
    "Haces que me de cuenta cuando estoy mal (aunque a veces me demore)",
    "Te gustan los juegos de mesa jiji",
    "Te llevas muy bien con tu familia",
    "Te cae mal la gente igual que a mí jajaj",
    "Me apoyas en todo",
    "Te llevas bien con los niños",
    "Eres sociable",
    "Siempre te tropiezas o te caes jajaj",
    "Te gusta leer",
    "Te gusta conocer lugares nuevos",
    "Te preocupas mucho de nuestros bebés",
    "Tenemos las mismas metas de vida",
  ];

  const nextReason = () => {
    setCurrentIndex((prev) => (prev + 1) % razones.length);
  };

  const prevReason = () => {
    setCurrentIndex((prev) => (prev - 1 + razones.length) % razones.length);
  };

  return (
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 px-3 sm:px-4 py-6 sm:py-8 flex flex-col items-center justify-center max-w-6xl mx-auto">
      <section className="text-center mb-8 sm:mb-12 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 bg-clip-text text-transparent px-2 opacity-0 animate-fadeIn">
          Razones por las que te amo 💖
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 px-2 opacity-0 animate-fadeIn delay-200">
          {currentIndex + 1} de {razones.length}
        </p>
      </section>

      {/* Carrusel de razones */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl opacity-0 animate-fadeIn delay-300">
        {/* Flecha izquierda */}
        <button
          onClick={prevReason}
          className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 flex items-center justify-center text-2xl sm:text-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30 hover:border-white/50"
          aria-label="Razón anterior"
        >
          ⬅️
        </button>

        {/* Tarjeta de razón */}
        <div 
          key={currentIndex}
          className="flex-1 max-w-3xl opacity-0 animate-scaleIn"
        >
          <div className="bg-gradient-to-br from-pink-500/30 via-rose-500/30 to-purple-500/30 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-16 border-2 border-pink-400/50 shadow-2xl hover:shadow-pink-500/40 transition-all duration-500 hover:scale-[1.02] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center">
            
            {/* Número */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white font-black text-2xl sm:text-3xl md:text-4xl shadow-xl mb-6 sm:mb-8 animate-pulse">
              {currentIndex + 1}
            </div>

            {/* Razón */}
            <p className="text-xl sm:text-2xl md:text-4xl text-white font-bold text-center leading-relaxed px-2 sm:px-4">
              {razones[currentIndex]}
            </p>

            {/* Corazón decorativo */}
            <div className="text-4xl sm:text-5xl md:text-6xl mt-6 sm:mt-8 animate-pulse">
              💕
            </div>
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={nextReason}
          className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 flex items-center justify-center text-2xl sm:text-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30 hover:border-white/50"
          aria-label="Siguiente razón"
        >
          ➡️
        </button>
      </div>

      {/* Indicadores de puntos */}
      <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10 md:mt-12 flex-wrap max-w-md opacity-0 animate-fadeIn delay-400">
        {razones.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-pink-500 to-rose-600 w-8 sm:w-10"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir a razón ${index + 1}`}
          />
        ))}
      </div>

      {/* Mensaje final */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center max-w-2xl opacity-0 animate-fadeIn delay-500">
        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed px-4">
          Y hay infinitas razones más... 
          <br />
          <span className="font-bold text-pink-300">Te amo con todo mi corazón 💖</span>
        </p>
      </div>
    </main>
  );
}
