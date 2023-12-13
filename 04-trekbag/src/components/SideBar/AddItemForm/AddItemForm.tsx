import { Button } from "../../Button/Button.tsx";

export const AddItemForm = () => {
  return (
    <form>
      <h2>Add Item</h2>
      <input type="text" placeholder="Item Name" />
      <Button>Add</Button>
    </form>
  );
};
