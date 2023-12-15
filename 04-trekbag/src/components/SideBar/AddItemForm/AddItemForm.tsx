import { Button } from "../../Button/Button.tsx";
import { SetStateAction, useState, Dispatch } from "react";
import { ItemProps } from "../../../lib/constants.ts";

//Not sure wtf this is, but it works :D
interface AddItemFormProps {
  setItems: Dispatch<SetStateAction<ItemProps[]>>;
}

export const AddItemForm = ({ setItems }: AddItemFormProps) => {
  const [formValue, setFormValue] = useState("");

  const createItem = () => {
    if (!formValue) return;
    const newItem = {
      id: new Date().getTime(),
      title: formValue,
      completed: false,
    };
    setItems((prev) => [...prev, newItem]);
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
