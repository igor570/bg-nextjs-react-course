import { Button } from "../../Button/Button.tsx";
import { useState } from "react";

export const AddItemForm = () => {
  const [formValue, setFormValue] = useState("");

  // const createItem = () => {
  //   const newItem = {
  //     ...item,
  //     id: Math.random(),
  //     title: formValue,
  //   };
  //
  //   setItem(newItem);
  // };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formValue);
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
