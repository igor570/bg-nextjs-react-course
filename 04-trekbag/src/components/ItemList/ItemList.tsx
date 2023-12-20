import { ItemProps } from "../../lib/interfaces.ts";
import Select from "react-select";
import { sortOptions } from "../../lib/constants.ts";
import { useState, useMemo } from "react";

export const ItemList = ({
  items,
  handleDestroyItem,
  toggleItemCompleted,
}: {
  items: ItemProps[],
    handleDestroyItem: (id: number) => void,
    toggleItemCompleted: (id: number) => void,
}) => {
  const [sortOption, setSortOption] = useState("default");

  //Will only run if items or sortBy changes. This is a memoized version of the sort function
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortOption === "packed") {
        return b.completed - a.completed;
      }
      if (sortOption === "unpacked") {
        return a.completed - b.completed;
      }
      return;
    });
  }, [sortOption, items]);

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
