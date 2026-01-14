import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#121212] border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO CON ANIMACIÓN Y COLORES */}
        <div className="w-full h-[70px] bg-[#111] border-b border-gray-800 flex items-center justify-center">

<h1 className="text-2xl font-extrabold tracking-wider flex gap-0.5">
  {[
    { l: "K ", c: "#ff3b3b" },
    { l: "h ", c: "#ff7f00" },
    { l: "i ", c: "#ffea00" },
    { l: "p ", c: "#32cd32" },
    { l: "u ", c: "#00bfff" },
    { l: "  ", c: "" },
    { l: "P ", c: "#ff1493" },
    { l: "r ", c: "#ff3b3b" },
    { l: "e ", c: "#ffa500" },
    { l: "d ", c: "#ffff00" },
    { l: "i ", c: "#00fa9a" },
    { l: "c ", c: "#00bfff" },
    { l: "t ", c: "#ba55d3" },
  ].map((item, i) => (
    <span
      key={i}
      className="glow-letter"
      style={{
        color: item.c,
        animationDelay: `${i * 0.15}s`,
      }}
    >
      {item.l}
    </span>
  ))}
</h1>
        
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          {/* LINK PEQUEÑO A LA GUÍA (NUEVA PESTAÑA) */}
          <a
            href="/guia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Guía de interpretación
          </a>

        </div>

        {/* BOTÓN MOBILE */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-gray-700 px-6 py-4 space-y-3 text-gray-300">

          <a className="block w-full text-left hover:text-white">
            Inicio
          </a>

          <a
            href="/guia"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left hover:text-cyan-400 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Guía de interpretación
          </a>

          <a className="block w-full text-left hover:text-white">
            Contactos
          </a>

        </div>
      )}
    </nav>
  );
};
