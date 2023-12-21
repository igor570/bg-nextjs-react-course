import {Button} from "../../Button/Button.tsx";
import {useState} from "react";
import useItemStore from "../../../stores/itemsStore.ts";

export const AddItemForm = () => {
    const [formValue, setFormValue] = useState("");
    const addItem = useItemStore((state) => state.addItem);
    const createItem = () => {
        if (!formValue) return;
        addItem(formValue);
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
