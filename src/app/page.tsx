export default function Home() {
  return (
    <main className="min-h-screen pt-16 px-4 py-8 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8 animate-pulse">
        Feliz San Valentín 💖
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed text-white/90">
        Explora nuestra historia navegando por las secciones. 
        <br />
        <span className="text-pink-300 font-semibold">Te amo con todo mi corazón.</span>
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        <a href="/carta" className="group">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
            <span className="text-4xl mb-4 block">💌</span>
            <h3 className="text-2xl font-bold mb-2">Carta</h3>
            <p>Mi carta especial para ti</p>
          </div>
        </a>
        <a href="/historia" className="group">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="text-4xl mb-4 block">📖</span>
            <h3 className="text-2xl font-bold mb-2">Nuestra historia</h3>
            <p>Nuestra línea de tiempo juntos</p>
          </div>
        </a>
      </div>
    </main>
  );
}
