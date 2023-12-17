import { Counter } from "./Counter/Counter.tsx";
import { Logo } from "./Logo/Logo.tsx";
import { ItemProps } from "../../lib/interfaces.ts";

export const Header = ({
  items,
  completedItems,
}: {
  items: ItemProps[];
  completedItems: number;
}) => {
  return (
    <header>
      <Logo />
      <Counter items={items} completedItems={completedItems} />
    </header>
  );
};
