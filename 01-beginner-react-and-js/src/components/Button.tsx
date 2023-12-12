interface ButtonProps {
  setCount: (show: number) => void;
}

export const Button = ({ setCount }: ButtonProps) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <button onClick={handleClick}>+</button>;
};
