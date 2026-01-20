export default function HistoriaPage() {
  const timeline = [
    {
      date: "2024",
      place: "Viña del Mar",
      photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=500&fit=crop",
      color: "from-pink-400/80 to-purple-500/80",
      title: "Nos conocimos",
      description: "Nuestro primer encuentro en la playa de Viña del Mar. El sol se ponía y tu sonrisa iluminó todo.",
    },
    {
      date: "2024",
      place: "Primera cita",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop",
      color: "from-purple-500/80 to-pink-400/80",
      title: "Primer beso",
      description: "Esa noche mágica caminando por la costa. El corazón me latía como nunca.",
    },
    {
      date: "2025",
      place: "Aniversario",
      photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      color: "from-orange-400/80 to-pink-500/80",
      title: "Primer aniversario",
      description: "Celebrando nuestro amor con una cena inolvidable bajo las estrellas.",
    },
    {
      date: "2026",
      place: "San Valentín",
      photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop",
      color: "from-rose-400/80 to-fuchsia-500/80",
      title: "Este San Valentín",
      description: "Esta página web es mi regalo. Te amo cada día más.",
    },
  ];

  return (
    <main className="min-h-screen pt-16 px-4 py-8 max-w-4xl mx-auto">
      <section>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-amber-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
          Nuestra historia 💕
        </h2>
        
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-500 shadow-lg"></div>
          
          <div className="space-y-16">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`flex items-center justify-center relative ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                {/* Foto circular */}
                <div className="flex flex-col items-center w-1/2 z-10">
                  <div 
                    className="w-55 h-48 rounded-3xl overflow-hidden shadow-2xl ring-12 ring-white/30 hover:scale-110 hover:ring-pink-400/50 transition-all duration-500 cursor-pointer relative group"
                    style={{
                      backgroundImage: `url(${event.photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Overlay romántico */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-3xl group-hover:bg-black/30 transition-all duration-300"></div>
                    
                  </div>
                  {/* Línea vertical */}
                  <div className={`w-0.5 h-20 bg-gradient-to-${index % 2 === 0 ? 'b' : 't'} ${event.color} shadow-sm`}></div>
                </div>
                
                {/* Contenido */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-pink-500/25 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                        {event.date}
                      </span>
                      <span className="text-lg font-medium text-pink-200/80 italic">{event.place}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                      {event.title}
                    </h3>
                    <p className="text-xl leading-relaxed text-white/95 font-light tracking-wide">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
