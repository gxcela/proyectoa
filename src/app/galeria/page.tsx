"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.44 (3).jpeg",
    "/img/galería/17-02-2022(2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.49 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.47 (3).jpeg",
    "/img/galería/18-02-2022(2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.55.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.08.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.45 (4).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.41.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.52 (4).jpeg",
    "/img/galería/17-02-2022(3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.57 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.53 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.05 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.49 (4).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.44.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.51 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.56 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.45 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.47 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.06 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.09 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.04 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.52 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.49 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.45 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.52 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.07 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.54 (4).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.48 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.57 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.05 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.46 (4).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.44 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.52 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.50 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.48 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.57 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.54 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.46 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.44 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.09 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.06 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.52.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.48 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.45 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.53 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.46 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.54 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.49.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.55 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.57.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.09.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.48.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.07 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.50 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.49 (3).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.08 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.51 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.46.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.05 (2).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.02.53.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.12.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.19.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.22.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.23.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.04 (1).jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.05.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.06.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.14.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.17.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.03.36.jpeg",
    "/img/galería/WhatsApp Image 2026-02-12 at 13.10.27.jpeg",
  ];

  const galleryItems = galleryImages.map((img, index) => ({
    img: encodeURI(img),
    title: `Recuerdo ${index + 1}`,
  }));

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
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center p-4 sm:p-6 md:p-8" onClick={() => setSelectedImage(null)}>
          <div className="max-w-5xl mx-auto w-full">
            <Image
              src={galleryItems[selectedImage].img}
              alt={galleryItems[selectedImage].title}
              width={800}
              height={600}
              className="w-full h-80 sm:h-[26rem] md:h-[32rem] object-contain rounded-2xl sm:rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
