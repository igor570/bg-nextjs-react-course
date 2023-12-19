import "./App.css";
import { Background } from "./components/Background/Background.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { ItemList } from "./components/ItemList/ItemList.tsx";
import { SideBar } from "./components/SideBar/SideBar.tsx";
import { useEffect, useState } from "react";
import { ItemProps } from "./lib/interfaces.ts";
import { initialItems } from "./lib/constants.ts";

function App() {
  //Storing items in localStorage within state, will only be called once with an anonymous callback function
  const [items, setItems] = useState<ItemProps[]>(
    () => JSON.parse(localStorage.getItem("items")!) || initialItems,
  );

  const handleAddItem = (newItem: ItemProps) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, completed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, completed: false };
    });
    setItems(newItems);
  };

  const handleDestroyItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const toggleItemCompleted = (id: number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  //Every time items is updated, we update localStorage with this useEffect
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const completedItems = items.filter((item) => item.completed).length;

  return (
    <>
      <Background />
      <main>
        <Header items={items} completedItems={completedItems} />
        <ItemList
          items={items}
          handleDestroyItem={handleDestroyItem}
          toggleItemCompleted={toggleItemCompleted}
        />
        <SideBar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
