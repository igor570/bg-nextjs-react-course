import { useEffect } from "react";

interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  useEffect(() => {
    document.title = `Counter: ${count}`;

    return () => {
      document.title = "Counter reached 10";
    };
  }, [count]);

  return <div>{count}</div>;
};
