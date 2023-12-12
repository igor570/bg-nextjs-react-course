import { ResetIcon } from "@radix-ui/react-icons";

interface ResetButtonProps {
  setCount: (count: number) => void;
}

export const ResetButton = ({ setCount }: ResetButtonProps) => {
  const resetCount = () => {
    setCount(0);
  };
  return (
    <button className="reset-btn">
      <ResetIcon className="reset-btn-icon" onClick={resetCount} />
    </button>
  );
};
