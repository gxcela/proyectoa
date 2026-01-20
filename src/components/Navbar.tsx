"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/", label: "Inicio", icon: "🏠" },
  { href: "/carta", label: "Carta", icon: "💌" },
  { href: "/historia", label: "Historia", icon: "📖" },
  { href: "/quiz", label: "Quiz", icon: "❓" },
  { href: "/galeria", label: "Galería", icon: "🖼️" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <style jsx>{`
        .navbar-container {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      
      <nav className="fixed top-6 left-0 right-0 z-50 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="navbar-container rounded-3xl shadow-2xl p-4 md:p-6 flex items-center justify-center gap-6 md:gap-8 h-20">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-6 py-4 min-w-0 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 ease-out group relative overflow-hidden whitespace-nowrap
                    ${isActive 
                      ? 'bg-gradient-to-r from-pink-400/90 to-purple-500/90 shadow-xl shadow-pink-500/40 border-2 border-white/40 scale-[1.02]' 
                      : 'bg-white/10 hover:bg-white/20 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/30 hover:border hover:border-white/30'
                    }
                  `}
                >
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="truncate max-w-[100px] md:max-w-none">{item.label}</span>
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
