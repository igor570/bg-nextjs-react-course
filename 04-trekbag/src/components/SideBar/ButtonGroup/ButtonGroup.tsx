import { Button } from "../../Button/Button.tsx";

interface ButtonGroupProps {
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsIncomplete: () => void;
}

export const ButtonGroup = ({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}: ButtonGroupProps) => {
  const secondaryButtons = [
    {
      id: 1,
      type: "secondary",
      text: "Mark all as Complete",
      buttonFunction: handleMarkAllAsComplete,
    },
    {
      id: 2,
      type: "secondary",
      text: "Mark all as Incomplete",
      buttonFunction: handleMarkAllAsIncomplete,
    },
    {
      id: 3,
      type: "secondary",
      text: "Reset to initial",
      buttonFunction: handleResetToInitial,
    },
    {
      id: 4,
      type: "secondary",
      text: "Remove all items",
      buttonFunction: handleRemoveAllItems,
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
