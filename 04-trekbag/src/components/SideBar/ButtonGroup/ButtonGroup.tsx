import { Button } from "../../Button/Button.tsx";

export const ButtonGroup = () => {
  const secondaryButtons = [
    {
      id: 1,
      type: "secondary",
      text: "Mark all as Complete",
    },
    {
      id: 2,
      type: "secondary",
      text: "Mark all as Incomplete",
    },
    {
      id: 3,
      type: "secondary",
      text: "Reset to initial",
    },
    {
      id: 4,
      type: "secondary",
      text: "Remove all items",
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button key={button.id} type={button.type}>
          {button.text}
        </Button>
      ))}
    </section>
  );
};
