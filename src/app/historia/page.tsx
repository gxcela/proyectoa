"use client";

import { useState } from "react";

export default function HistoriaPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const colors = [
    "from-pink-400/80 to-purple-500/80",
    "from-purple-500/80 to-pink-400/80",
    "from-orange-400/80 to-pink-500/80",
    "from-rose-400/80 to-fuchsia-500/80",
  ];

  const timeline = [
    {
      date: "28-01-2022",
      place: "",
      photo: "/img/historia/1.jpeg",
      color: colors[0],
      title: "",
      description: "Fue la primera vez que hablamos, gracias por ser tan arriesgada y seguir hablándome a pesar de vivir lejos.",
    },
    {
      date: "16-02-2022",
      place: "",
      photo: "/img/historia/2.jpeg",
      color: colors[1],
      title: "",
      description: "Fue la primera vez que nos vimos y la primera fotito que te saqué, muy hermosa <3.",
    },
    {
      date: "18-02-2022",
      place: "",
      photo: "/img/historia/3.jpeg",
      color: colors[2],
      title: "",
      description: "La primera cita oficial que tuvimos con pizza.",
    },
    {
      date: "20-03-2022",
      place: "",
      photo: "/img/historia/4.jpeg",
      color: colors[3],
      title: "",
      description: "Tu primer cumpleaños que celebramos juntas y estando en el lolla.",
    },
    {
      date: "13-05-2022",
      place: "",
      photo: "/img/historia/5.jpeg",
      color: colors[0],
      title: "",
      description: "El día que empezamos a pololear <3.",
    },
    {
      date: "01-10-2022",
      place: "",
      photo: "/img/historia/6.jpeg",
      color: colors[1],
      title: "",
      description: "El día que llegó nuestro bebé larguito.",

    },
    {
      date: "24-12-2022",
      place: "",
      photo: "/img/historia/7.jpeg",
      color: colors[2],
      title: "",
      description: "El día que celebramos nuestra primera navidad juntas.",
    },
    {
      date: "31-12-2022",
      place: "",
      photo: "/img/historia/8.jpeg",
      color: colors[3],
      title: "",
      description: "Primer año nuevo juntas.",

    },
    {
      date: "12-02-2023",
      place: "",
      photo: "/img/historia/9.jpeg",
      color: colors[0],
      title: "",
      description: "El día que compramos todas nuestras cositas para irnos a vivir solas.",

    },
    {
      date: "01-03-2023",
      place: "",
      photo: "/img/historia/10.jpeg",
      color: colors[1],
      title: "",
      description: "Primer día comiendo en el depa de Viña.",

    },
    {
      date: "04-06-2023",
      place: "",
      photo: "/img/historia/11.jpeg",
      color: colors[2],
      title: "",
      description: "El día que llegó nuestra Kiwita.",

    },
    {
      date: "11-11-2023",
      place: "",
      photo: "/img/historia/oliverbb.jpeg",
      color: colors[3],
      title: "",
      description: "Llegada de nuestro Oliver, el más odioso.",
    },
    {
      date: "31-12-2023",
      place: "",
      photo: "/img/historia/12.jpeg",
      color: colors[3],
      title: "",
      description: "Celebrando el año nuevo en el otro depa de Viña jeje.",

    },
    {
      date: "23-03-2024",
      place: "",
      photo: "/img/historia/13.jpeg",
      color: colors[0],
      title: "",
      description: "Primer día en el depa de tu primer auto <3.",
    },
    {
      date: "17-02-2024",
      place: "",
      photo: "/img/historia/14.jpeg",
      color: colors[1],
      title: "",
      description: "Primer matrimonio al que fuimos juntas, salimos muy guapas :*",
    },
    {
      date: "25-12-2024",
      place: "",
      photo: "/img/historia/15.jpeg",
      color: colors[2],
      title: "",
      description: "Celebrando otra navidad juntas.",
    },
    {
      date: "04-02-2025",
      place: "",
      photo: "/img/historia/16.jpeg",
      color: colors[3],
      title: "",
      description: "Viajando para irnos a vivir al sur juntas, el comienzo de una nueva etapa <3.",
    },
    {
      date: "24-02-2025",
      place: "",
      photo: "/img/historia/17.jpeg",
      color: colors[0],
      title: "",
      description: "Viajecito a Chiloé.",
    },
    {
      date: "25-09-2025",
      place: "",
      photo: "/img/historia/18.jpeg",
      color: colors[1],
      title: "",
      description: "Cuando conocimos a Totito.",
    },
    {
      date: "05-02-2026",
      place: "",
      photo: "/img/historia/19.jpeg",
      color: colors[2],
      title: "",
      description: "Nuestra última adquisición, llegada de Maqui.",
    },
  ];

  return (
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 px-3 sm:px-4 py-6 sm:py-8 max-w-4xl mx-auto">
      <section>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-amber-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl px-2">
          Nuestra historia 💕
        </h2>
        
        <div className="relative">
          {/* Línea central - oculta en móvil */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-500 shadow-lg"></div>
          
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-center relative ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Conector central */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-white/80 to-white/50 ring-4 ring-white/20 shadow-lg"></div>
                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-16 bg-gradient-to-r ${
                    index % 2 === 0 ? "left-1/2" : "right-1/2"
                  } ${event.color}`}
                ></div>

                {/* Foto */}
                <div className="flex flex-col items-center w-full md:w-1/2 z-10 mb-4 md:mb-0">
                  <div 
                    className="w-full max-w-xs sm:max-w-sm md:w-55 h-48 sm:h-56 md:h-48 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 sm:ring-8 md:ring-12 ring-white/30 hover:scale-105 md:hover:scale-110 hover:ring-pink-400/50 transition-all duration-500 cursor-pointer relative group"
                    style={{
                      backgroundImage: `url(${event.photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Ver foto en grande"
                    onClick={() => setSelectedPhoto(event.photo)}
                    onKeyDown={(eventKey) => {
                      if (eventKey.key === "Enter" || eventKey.key === " ") {
                        eventKey.preventDefault();
                        setSelectedPhoto(event.photo);
                      }
                    }}
                  >
                    {/* Overlay romántico */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-2xl sm:rounded-3xl group-hover:bg-black/30 transition-all duration-300"></div>
                    
                  </div>
                  {/* Separador móvil */}
                  <div className="md:hidden mt-4 h-0.5 w-24 bg-gradient-to-r from-pink-400/70 via-purple-400/70 to-pink-500/70 rounded-full"></div>
                  {/* Línea vertical - solo desktop */}
                  <div className={`hidden md:block w-0.5 h-20 bg-gradient-to-${index % 2 === 0 ? 'b' : 't'} ${event.color} shadow-sm`}></div>
                </div>
                
                {/* Contenido */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl hover:shadow-pink-500/25 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                        {event.date}
                      </span>
                      <span className="text-base sm:text-lg font-medium text-pink-200/80 italic">{event.place}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                      {event.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95 font-light tracking-wide">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm px-3 pt-45"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-xs max-h-[40vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-4 right-0 translate-y-0 rounded-full bg-white/90 text-black px-3 py-1 text-sm font-semibold shadow-lg hover:bg-white"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Cerrar"
            >
              Cerrar
            </button>
            <img
              src={selectedPhoto}
              alt="Foto de la historia"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
