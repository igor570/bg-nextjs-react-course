import { AddItemForm } from "./AddItemForm/AddItemForm.tsx";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup.tsx";
import { ItemProps } from "../../lib/interfaces.ts";

interface SideBarProps {
  handleAddItem: (newItem: ItemProps) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsIncomplete: () => void;
}

export const SideBar = ({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}: SideBarProps) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
};
