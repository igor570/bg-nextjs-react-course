import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

interface CountButtonProps {
  setCount: (count: number) => void;
  count: number;
}
export const CountButtons = ({ setCount, count }: CountButtonProps) => {
  const incrementCount = () => {
    if (count === 5) return;
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count === 0) return;
    setCount((prevCount) => prevCount - 1);
  };


  
  return (
    <div className="button-container">
      <button className="count-btn" onClick={decrementCount}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={incrementCount}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
};
