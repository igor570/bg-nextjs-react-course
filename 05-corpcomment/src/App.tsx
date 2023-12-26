import "./App.css";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { HashtagList } from "./components/HashtagList";

function App() {
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
