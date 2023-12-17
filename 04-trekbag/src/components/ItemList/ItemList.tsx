import { ItemProps } from "../../lib/interfaces.ts";

export const ItemList = ({
  items,
  handleDestroyItem,
  toggleItemCompleted,
}: {
  items: ItemProps[];
}) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={crypto.randomUUID()}
          title={item.title}
          completed={item.completed}
          id={item.id}
          handleDestroyItem={handleDestroyItem}
          toggleItemCompleted={toggleItemCompleted}
        />
      ))}
    </ul>
  );
};

const Item = ({
  title,
  completed,
  id,
  handleDestroyItem,
  toggleItemCompleted,
}: ItemProps) => {
  return (
    <li className="item">
      <label onClick={() => toggleItemCompleted(id)}>
        <input checked={completed} type="checkbox" />
        {title}
      </label>
      <button onClick={() => handleDestroyItem(id)}>❌</button>
    </li>
  );
};
