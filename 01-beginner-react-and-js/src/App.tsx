import "./App.css";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100dvh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 50,
          }}
        >
          {count <= 10 ? <Counter count={count} /> : null}
          <Button setCount={setCount} />
        </div>
      </div>
    </>
  );
}

export default App;
