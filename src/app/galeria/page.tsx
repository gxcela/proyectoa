"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { img: "/placeholder-playa.jpg", title: "Viña del Mar 🌊", message: "Nuestro primer atardecer" },
    { img: "/placeholder-pareja.jpg", title: "Nosotros 💕", message: "Cada momento contigo" },
    { img: "/placeholder-abrazo.jpg", title: "Abrazo ❤️", message: "Tu calor favorito" },
    { img: "/placeholder-siempre.jpg", title: "Siempre ✨", message: "Futuro juntos" }
  ];

  return (
    <>
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-12 md:mb-16 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg px-2">
            💕 Galería
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="group relative h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 hover:scale-[1.02]"
                onClick={() => setSelectedImage(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center z-10">
                  <span className="text-5xl sm:text-6xl opacity-20">📸</span>
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100"
                />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center p-4 sm:p-6 md:p-8" onClick={() => setSelectedImage(null)}>
          <div className="max-w-3xl mx-auto w-full">
            <Image
              src={galleryItems[selectedImage].img}
              alt={galleryItems[selectedImage].title}
              width={800}
              height={600}
              className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-2xl sm:rounded-3xl shadow-2xl"
            />
            <div className="mt-4 sm:mt-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{galleryItems[selectedImage].title}</h2>
              <p className="text-lg sm:text-xl text-pink-300">{galleryItems[selectedImage].message}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
