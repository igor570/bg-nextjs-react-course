import { Button } from "../../Button/Button.tsx";
import { useState } from "react";
import { ItemProps } from "../../../lib/interfaces.ts";

interface AddItemFormProps {
  handleAddItem: (newItem: ItemProps) => void;
}

export const AddItemForm = ({ handleAddItem }: AddItemFormProps) => {
  const [formValue, setFormValue] = useState("");

  const createItem = () => {
    if (!formValue) return;
    const newItem = {
      id: new Date().getTime(),
      title: formValue,
      completed: false,
    };
    handleAddItem(newItem);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createItem();
        setFormValue("");
      }}
    >
      <h2>Add Item</h2>
      <input
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        type="text"
        placeholder="Item Name"
      />
      <Button>Add</Button>
    </form>
  );
};
