"use client";
import React, { useState } from "react";
import Image from "next/image";

const Postcard = ({ img }: { img: string }) => {
  const r = "4px";
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={toggleAnimation}
        className="relative w-[180px] h-[180px] bg-foreground border border-background cursor-pointer"
        style={{
          mask: `
        radial-gradient(${r}, transparent 97%, background) round calc(-1.5 * ${r}) calc(-1.5 * ${r}) / calc(3 * ${r}) calc(3 * ${r}),
        linear-gradient(background 0 0) no-repeat 50% / calc(100% - 3 * ${r}) calc(100% - 3 * ${r})
        `,
        }}
      >
        <div
          className={`absolute top-[-200px] left-1/2 transform -translate-x-1/2 h-[180px] p-[calc(2 * ${r})] bg-foreground transition-[top,opacity] duration-1000 ease-in-out opacity-0 ${
            isAnimated ? "-top-[1px] opacity-100" : ""
          }`}
          style={{
            mask: `
          radial-gradient(${r}, transparent 97%, background) round calc(-1.5 * ${r}) calc(-1.5 * ${r}) / calc(3 * ${r}) calc(3 * ${r}),
          linear-gradient(background 0 0) no-repeat 50% / calc(100% - 3 * ${r}) calc(100% - 3 * ${r})
          `,
            aspectRatio: "1",
          }}
        >
          <Image
            className="object-cover"
            fill
            src={img}
            alt="Selo de Correios"
          />
        </div>
      </div>
    </>
  );
};

export default Postcard;
