import { Header } from "./Header";
import { FeedbackList } from "./FeedbackList";
export function Container() {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}
