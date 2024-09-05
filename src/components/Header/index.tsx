"use client";

import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { LanguageToggle } from "../LanguageToggle";
import { getDictionary } from "@/lib/dictionary";
import { useParams } from "next/navigation";

export async function Header() {
  const params = useParams();
  const locale = params.lang as string;
  const dict = await getDictionary(locale.split("-")[0]);

  return (
    <header className="flex px-20 h-16 w-full items-center">
      <Link href={`/${locale}`} className="w-full">
        <h1 className="font-bold text-xl">STMPD Fanpage</h1>
      </Link>
      <div className="flex justify-end w-full items-center gap-2">
        <Link href={`/${locale}/artists`}>
          <p>{dict.header.artists}</p>
        </Link>
        <Link href={`/${locale}/collectable`}>
          <p>{dict.header.collectables}</p>
        </Link>
        <Link href={`/${locale}/auth`}>
          <p>{dict.header.login}</p>
        </Link>
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
}
