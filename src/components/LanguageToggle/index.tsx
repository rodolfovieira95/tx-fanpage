"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "pt-BR", name: "Português", flag: "🇧🇷" },
  { code: "en-US", name: "English", flag: "🇺🇸" },
  { code: "es-ES", name: "Español", flag: "🇪🇸" },
  { code: "de-DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "nl-NL", name: "Nederlands", flag: "🇳🇱" },
];

export function LanguageToggle() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = React.useState("en-US");

  const setLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    // Atualiza apenas o parâmetro de idioma na URL atual
    const currentPath = window.location.pathname;
    console.log({ currentPath });
    const newPath = `/${langCode}${currentPath.substring(6)}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
          {currentLang.toUpperCase()}
          <span className="sr-only">Alternar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.flag} {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
