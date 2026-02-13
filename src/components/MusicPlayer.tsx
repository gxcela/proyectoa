"use client";

import { useState, useRef, useEffect } from "react";

export const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 🎵 AGREGA TUS CANCIONES AQUÍ
  // Sube los archivos MP3 a la carpeta /public/music/
  const songs = [
    {
      title: "My Favorite Part",
      artist: "Ariana Grande x Mac Miller",
      file: "/music/Ariana%20Grande%20x%20Mac%20Miller%20-%20My%20Favorite%20Part.mp3",
    },
    {
      title: "Exist For Love",
      artist: "AURORA",
      file: "/music/AURORA%20-%20Exist%20For%20Love.mp3",
    },
    {
      title: "Come to me",
      artist: "Björk",
      file: "/music/Bj%C3%B6rk%20-%20Come%20to%20me.mp3",
    },
    {
      title: "By my side",
      artist: "INXS",
      file: "/music/By%20my%20side%20-%20INXS.mp3",
    },
    {
      title: "Your Song",
      artist: "Elton John",
      file: "/music/Elton%20John%20-%20Your%20Song.mp3",
    },
    {
      title: "Songbird",
      artist: "Fleetwood Mac",
      file: "/music/Fleetwood%20Mac%20-%20Songbird.mp3",
    },
    {
      title: "Late Night Talking",
      artist: "Harry Styles",
      file: "/music/Harry%20Styles%20-%20Late%20Night%20Talking.mp3",
    },
    {
      title: "Sunflower, Vol. 6",
      artist: "Harry Styles",
      file: "/music/Harry%20Styles%20-%20Sunflower%2C%20Vol.%206.mp3",
    },
    {
      title: "Heaven is You",
      artist: "Joshua Bassett",
      file: "/music/Joshua%20Bassett%20-%20Heaven%20is%20You.mp3",
    },
    {
      title: "Last Night On Earth",
      artist: "Green Day",
      file: "/music/Last%20Night%20On%20Earth%20-%20Green%20Day.mp3",
    }
    
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => nextSong();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    audioRef.current.currentTime = percent * duration;
  };

  return (
    <>
      <audio ref={audioRef} src={songs[currentSong].file} />

      {/* Botón flotante mini (siempre visible) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl shadow-pink-500/50 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 border-4 border-white/30 hover:border-white/50"
        aria-label={isOpen ? "Cerrar reproductor" : "Abrir reproductor"}
      >
        {isPlaying ? "🎵" : "🎶"}
      </button>

      {/* Reproductor flotante expandido */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed bottom-24 right-6 z-50 animate-in slide-in-from-bottom duration-300">
            <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-5 border-2 border-pink-400/40 shadow-2xl shadow-pink-500/30 w-[300px] sm:w-[340px]">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="animate-pulse">💕</span>
                  Nuestra Música
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Info de la canción actual */}
              <div className="mb-4 text-center">
                <div className="w-full h-40 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-2xl flex items-center justify-center mb-3 border border-white/20">
                  <span className="text-6xl animate-pulse">💖</span>
                </div>
                <h4 className="text-white font-bold text-lg truncate">
                  {songs[currentSong].title}
                </h4>
                <p className="text-white/70 text-sm truncate">
                  {songs[currentSong].artist}
                </p>
              </div>

              {/* Barra de progreso */}
              <div className="mb-4">
                <div
                  className="h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-100"
                    style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-white/60 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controles */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={prevSong}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl transition-all hover:scale-110"
                >
                  ⏮️
                </button>
                
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all hover:scale-110"
                >
                  {isPlaying ? "⏸️" : "▶️"}
                </button>
                
                <button
                  onClick={nextSong}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl transition-all hover:scale-110"
                >
                  ⏭️
                </button>
              </div>

              {/* Control de volumen */}
              <div className="flex items-center gap-3">
                <span className="text-lg">🔊</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none bg-white/20 cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgb(236, 72, 153) 0%, rgb(168, 85, 247) ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`,
                  }}
                />
                <span className="text-xs text-white/70 w-8">{Math.round(volume * 100)}%</span>
              </div>

              <p className="text-xs text-white/60 text-center mt-3 italic">
                {currentSong + 1} de {songs.length} canciones
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
