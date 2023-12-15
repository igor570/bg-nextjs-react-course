import { AddItemForm } from "./AddItemForm/AddItemForm.tsx";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup.tsx";
import { ItemProps } from "../../lib/constants.ts";
import { Dispatch, SetStateAction } from "react";

//Not sure wtf this is, but it works :D
interface SideBarProps {
  setItems: Dispatch<SetStateAction<ItemProps[]>>;
}

export const SideBar = ({ setItems }: SideBarProps) => {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGroup />
    </div>
  );
};
