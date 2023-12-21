import {AddItemForm} from "./AddItemForm/AddItemForm.tsx";
import {ButtonGroup} from "./ButtonGroup/ButtonGroup.tsx";


export const SideBar = () => {
    return (
        <div className="sidebar">
            <AddItemForm/>
            <ButtonGroup/>
        </div>
    );
};
