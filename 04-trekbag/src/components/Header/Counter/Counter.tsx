import useItemStore from "../../../stores/itemsStore.ts";

export const Counter = () => {
  const items = useItemStore((state) => state.items);
  const completedItems = items.filter((item) => item.completed).length;

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
