import React from "react";

const GarrixLaserShow = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Logo do Martin Garrix (símbolo "+") maior e mais brilhante */}
      <div className="text-white text-[400px] font-black absolute z-10 animate-pulse-slow drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
        +
      </div>

      {/* Lasers amorfos */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-t from-transparent via-cyan-400 to-purple-400 opacity-50 animate-laser-amorph"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              filter: "blur(4px)",
            }}
          ></div>
        ))}
      </div>

      {/* Efeito de flash */}
      <div className="absolute inset-0 bg-white opacity-0 animate-flash"></div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0">
        {[...Array(70)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GarrixLaserShow;
