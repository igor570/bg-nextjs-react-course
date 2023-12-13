import "./App.css";
import { Background } from "./components/Background/Background.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { ItemList } from "./components/ItemList/ItemList.tsx";
import { SideBar } from "./components/SideBar/SideBar.tsx";

function App() {
  return (
    <>
      <Background />
      <main>
        <Header />
        <ItemList />
        <SideBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
