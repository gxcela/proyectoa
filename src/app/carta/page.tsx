"use client";

import { useState, useEffect } from "react";

export default function CartaPage() {
  const [cartaVisible, setCartaVisible] = useState(false);
  const [cartaText, setCartaText] = useState("");

  // ← AQUÍ CAMBIA CON TUS FRASES PERSONALES
  const fullCarta = `Mi amor,

Desde el primer momento que te vi supe que eras especial.

Cada día a tu lado es una aventura llena de amor y felicidad.

Quiero que sepas que eres lo más importante en mi vida.

Te amo con todo mi corazón, hoy y siempre. 💖`;

  useEffect(() => {
    if (cartaVisible) {
      let i = 0;
      const interval = setInterval(() => {
        setCartaText(fullCarta.slice(0, i + 1));
        i++;
        if (i >= fullCarta.length) {
          clearInterval(interval);
        }
      }, 70); // ← Tu velocidad perfecta

      return () => clearInterval(interval);
    }
  }, [cartaVisible]);

  return (
    <main className="min-h-screen pt-16 px-4 py-8 max-w-4xl mx-auto">
      {/* Carta interactiva */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent">
          Mi carta para ti 💌
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {!cartaVisible ? (
              <div className="text-center">
                <button
                  onClick={() => setCartaVisible(true)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Abrir mi carta especial
                </button>
              </div>
            ) : (
              <div className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap italic text-white/95 font-serif">
                {cartaText}
                {cartaText.length < fullCarta.length && (
                  <span className="ml-1 animate-pulse">|</span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
