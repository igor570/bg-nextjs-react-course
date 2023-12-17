import { ItemProps } from "../../lib/interfaces.ts";
import Select from "react-select";
import { useState } from "react";

const sortOptions = [
  {
    label: "Sort by Default",
    value: "default",
  },
  {
    label: "Sort by Packed",
    value: "packed",
  },
  {
    label: "Sort by Unpacked",
    value: "unpacked",
  },
];

export const ItemList = ({
  items,
  handleDestroyItem,
  toggleItemCompleted,
}: {
  items: ItemProps[];
}) => {
  const [sortOption, setSortOption] = useState("default");

  //sorting the items state variable before rendering
  const sortedItems = [...items].sort((a, b) => {
    if (sortOption === "packed") {
      return b.completed - a.completed;
    }
    if (sortOption === "unpacked") {
      return a.completed - b.completed;
    }
    return;
  });

  return (
    <ul>
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortOption(option.value)}
            defaultValue={sortOptions[0]}
            options={sortOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
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
