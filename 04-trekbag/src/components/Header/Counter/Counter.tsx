import { ItemProps } from "../../../lib/interfaces.ts";

export const Counter = ({
  items,
  completedItems,
}: {
  items: ItemProps[];
  completedItems: number;
}) => {
  return (
    <>
      {items.length === 0 ? (
        <p>Nothing to pack!</p>
      ) : (
        <p>
          {completedItems} / {items.length} Packed
        </p>
      )}
    </>
  );
};
