import { Button } from "../../Button/Button.tsx";
import useItemStore from "../../../stores/itemsStore.ts";

export const ButtonGroup = () => {
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemStore((state) => state.markAllAsInComplete);
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  console.log('Button Rendering')

  const secondaryButtons = [
    {
      id: 1,
      type: "secondary",
      text: "Mark all as Complete",
      buttonFunction: markAllAsComplete,
    },
    {
      id: 2,
      type: "secondary",
      text: "Mark all as Incomplete",
      buttonFunction: markAllAsInComplete,
    },
    {
      id: 3,
      type: "secondary",
      text: "Reset to initial",
      buttonFunction: resetToInitial,
    },
    {
      id: 4,
      type: "secondary",
      text: "Remove all items",
      buttonFunction: removeAllItems,
    },
  ];


  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          buttonFunction={button.buttonFunction}
          key={button.id}
          type={button.type}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
};
