import { Counter } from "./Counter/Counter.tsx";
import { Logo } from "./Logo/Logo.tsx";

export const Header = () => {
  return (
    <header>
      <Logo />
      <Counter />
    </header>
  );
};
