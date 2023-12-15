import { initialItems } from "../../lib/constants.ts";
import { useState } from "react";

export const ItemList = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

interface ItemProps {
  item: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const Item = ({ item }: ItemProps) => {
  return (
    <li className="item">
      <label>
        <input checked={item.completed} type="checkbox" />
        {item.title}
      </label>
      <button>❌</button>
    </li>
  );
};
