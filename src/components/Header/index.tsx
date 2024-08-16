import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  return (
    <header className="flex px-20 h-16 w-full items-center">
      <h1 className="w-full font-bold text-xl">STMPD Fanpage</h1>
      <div className="flex justify-end w-full items-center gap-2">
        <p>Login</p>
        <ThemeToggle />
      </div>
    </header>
  );
}
