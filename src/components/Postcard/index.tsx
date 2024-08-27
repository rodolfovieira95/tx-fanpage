"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Postcard = ({
  img,
  id,
  userCollectedStickerts,
}: {
  img: string;
  id: number;
  userCollectedStickerts: Record<string, unknown>[];
}) => {
  const r = "4px";
  const isAlreadyCollated = userCollectedStickerts.some(
    ({ id: userStickerId }) => id === userStickerId
  );
  const [isAnimated, setIsAnimated] = useState(isAlreadyCollated);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDivClick = () => {
    setIsAnimated(true);
  };

  return (
    <>
      <div
        onClick={handleDivClick}
        className="relative w-[180px] h-[180px] bg-foreground border border-background cursor-pointer"
        style={{
          mask: `
            radial-gradient(${r}, transparent 97%, background) round calc(-1.5 * ${r}) calc(-1.5 * ${r}) / calc(3 * ${r}) calc(3 * ${r}),
            linear-gradient(background 0 0) no-repeat 50% / calc(100% - 3 * ${r}) calc(100% - 3 * ${r})
          `,
        }}
      >
        <div
          className={`absolute -top-52 left-1/2 transform -translate-x-1/2 h-[180px] p-[calc(2 * ${r})] bg-foreground transition-[top,opacity] duration-1000 ease-in-out opacity-0 ${
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
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Image
                className="object-cover"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                fill
                src={img}
                alt="Selo de Correios"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Nome do Artista</DialogTitle>
                <DialogDescription>
                  Informações detalhadas sobre este selo.
                </DialogDescription>
              </DialogHeader>
              <div className="relative w-full h-80">
                <Image
                  className="object-cover"
                  fill
                  src={img}
                  alt="Selo de Correios"
                />
              </div>
              <DialogFooter>
                <button onClick={() => setIsModalOpen(false)}>Fechar</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Postcard;
