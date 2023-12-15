import "./App.css";
import { Background } from "./components/Background/Background.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { ItemList } from "./components/ItemList/ItemList.tsx";
import { SideBar } from "./components/SideBar/SideBar.tsx";
import { useState } from "react";
import { Item } from "./lib/constants.ts";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <>
      <Background />
      <main>
        <Header />
        <ItemList items={items} />
        <SideBar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
