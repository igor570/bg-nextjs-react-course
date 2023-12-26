import { Pattern } from "./Pattern";
import { Logo } from "./Logo";
import { PageHeading } from "./PageHeading";
import { FeedBackForm } from "./FeedBackForm";

export function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedBackForm />
    </header>
  );
}
