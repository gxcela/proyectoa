"use client";

import { useState } from "react";

export const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🎵 INSTRUCCIONES:
  // 1. Ve a Spotify y crea una playlist
  // 2. Click derecho en la playlist → Compartir → Copiar enlace de playlist
  // 3. Ve a https://developer.spotify.com/documentation/embeds/
  // 4. Pega tu link y copia el código iframe
  // 5. Extrae el ID de playlist del iframe (después de /playlist/)
  
  // Por ahora uso una playlist de ejemplo - REEMPLAZA CON TU PLAYLIST ID
  const playlistId = "37i9dQZF1DXcBWIGoYBM5M"; // Ejemplo: Top 50 Global
  
  return (
    <>
      {/* Botón flotante para abrir/cerrar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl shadow-pink-500/50 flex items-center justify-center text-2xl sm:text-3xl hover:scale-110 transition-all duration-300 border-4 border-white/30 hover:border-white/50 ${
          isOpen ? 'rotate-180' : ''
        }`}
        aria-label={isOpen ? "Cerrar música" : "Abrir música"}
      >
        {isOpen ? '✕' : '🎵'}
      </button>

      {/* Reproductor flotante */}
      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer click fuera */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Contenedor del reproductor */}
          <div className="fixed bottom-24 right-6 z-50 animate-in slide-in-from-bottom duration-300">
            <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-4 border-2 border-pink-400/40 shadow-2xl shadow-pink-500/30 w-[280px] sm:w-[320px]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="animate-pulse">💕</span>
                  Nuestra Música
                </h3>
              </div>
              
              {/* Spotify Player Embed */}
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="shadow-lg"
              ></iframe>
              
              <p className="text-xs text-white/60 text-center mt-2 italic">
                Canciones que nos recuerdan a nosotras 🎶
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
