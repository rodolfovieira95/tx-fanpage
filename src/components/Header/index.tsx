import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  return (
    <header className="flex px-20 h-16 w-full items-center">
      <Link href="/" className="w-full">
        <h1 className="font-bold text-xl">STMPD Fanpage</h1>
      </Link>
      <div className="flex justify-end w-full items-center gap-2">
        <Link href="/artists">
          <p>Artists</p>
        </Link>
        <Link href="/collectable">
          <p>Collectables</p>
        </Link>
        <Link href="/auth">Login</Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
