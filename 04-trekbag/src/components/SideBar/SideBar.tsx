import { AddItemForm } from "./AddItemForm/AddItemForm.tsx";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup.tsx";
import { ItemProps } from "../../lib/constants.ts";

interface SideBarProps {
  handleAddItem: (newItem: ItemProps) => void;
}

export const SideBar = ({ handleAddItem }: SideBarProps) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
};
