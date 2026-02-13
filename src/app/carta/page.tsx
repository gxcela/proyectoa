"use client";

import { useState, useEffect } from "react";

export default function CartaPage() {
  const [cartaVisible, setCartaVisible] = useState(false);
  const [cartaText, setCartaText] = useState("");

  // ← AQUÍ CAMBIA CON TUS FRASES PERSONALES
  const fullCarta = `Hola bebé,
  
  Sé que me dijiste que ya no te daba detalles como antes,
  
  te pido disculpas por eso, 

  por descuidarte y no demostrarte lo mucho que te amo.

  La vez que dije que es normal que las parejas cambien con el tiempo, 

  no quise decir que el amor se termina, sino que se transforma,

  pero igualmente hay que cuidarlo para que crezca más

  y siento que en eso he fallado un poco.

  Quiero que sepas que yo no he olvidado la primera vez que te vi 
  
  y lo que sentí en ese momento.

  Siento lo mismo cada vez que te veo, 
  
  que hablamos, 
  
  que me besas, 
  
  que me abrazas, 
  
  cuando nos reímos,

  cuando me dices que me amas,

  siempre.

  Te puedo pedir perdón por tantas cosas, pero siento que no es suficiente,

  lo que importa es dejar claro que quiero mejorar todo lo que no he hecho bien.

  No olvides que eres el amor de mi vida y que vamos a cumplir 
  
  todas nuestras metas.

  Te amo mucho, mi vida. Siempre.💖`;

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
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 px-3 sm:px-4 py-6 sm:py-8 max-w-4xl mx-auto">
      {/* Carta interactiva */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent px-2">
          Mi carta para ti 💌
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-12 border border-white/20 shadow-2xl">
            {!cartaVisible ? (
              <div className="text-center">
                <button
                  onClick={() => setCartaVisible(true)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-2xl text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Abrir mi carta especial
                </button>
              </div>
            ) : (
              <div className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-wrap italic text-white/95 font-serif">
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
