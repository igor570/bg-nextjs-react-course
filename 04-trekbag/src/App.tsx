import "./App.css";
import { Background } from "./components/Background/Background.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { ItemList } from "./components/ItemList/ItemList.tsx";
import { SideBar } from "./components/SideBar/SideBar.tsx";
import { useState } from "react";
import { ItemProps } from "./lib/constants.ts";

function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  const handleAddItem = (newItem: ItemProps) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <>
      <Background />
      <main>
        <Header />
        <ItemList items={items} />
        <SideBar handleAddItem={handleAddItem} />
      </main>
      <Footer />
    </>
  );
}

export default App;
