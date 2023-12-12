import { Count, CountButtons, ResetButton, Title } from "./";
import {useEffect, useState} from "react";

export const Card = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "space") {
          setCount((prevCount) => prevCount + 1);
        }
      }
      window.addEventListener("keydown", handleKeyDown);
      //Cleanup
      return () => {
          window.removeEventListener("keydown", handleKeyDown);
      }
  }, [count]);

  return (
    <div className="card">
      {count === 5 ? (
        <Title text={"End of Free Tier"} />
      ) : (
        <Title text={"Fancy Counter"} />
      )}
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons count={count} setCount={setCount} />
    </div>
  );
};
