import { ItemProps } from "../../lib/constants.ts";

export const ItemList = ({ items }: { items: ItemProps[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          completed={item.completed}
          id={item.id}
        />
      ))}
    </ul>
  );
};

const Item = ({ title, completed }: ItemProps) => {
  return (
    <li className="item">
      <label>
        <input checked={completed} type="checkbox" />
        {title}
      </label>
      <button>❌</button>
    </li>
  );
};
