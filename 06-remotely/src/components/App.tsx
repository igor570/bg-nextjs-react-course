import { useState } from "react";
import Header, { HeaderTop } from "./Header.tsx";
import Container from "./Container.tsx";
import Footer from "./Footer.tsx";
import Background from "./Background.tsx";
import Logo from "./Logo.tsx";
import BookmarksButton from "./BookmarksButton.tsx";
import SearchForm from "./SearchForm.tsx";
import Sidebar, { SidebarTop } from "./Sidebar.tsx";
import JobItemContent from "./JobItemContent.tsx";
import ResultsCount from "./ResultsCount.tsx";
import SortingControls from "./SortingControls.tsx";
import JobList from "./JobList.tsx";
import Pagination from "./PaginationControls.tsx";
import { useJobItems } from "../lib/hooks.ts";
import { useDebounce } from "../lib/hooks.ts";

function App() {
  const [formValue, setFormValue] = useState<string>("");
  const debouncedFormValue = useDebounce(formValue, 250);
  const [jobItems, isLoading] = useJobItems(debouncedFormValue);

  const totalJobResults = jobItems?.length || 0;
  const jobItemsSliced = jobItems?.slice(0, 7) || [];

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm formValue={formValue} setFormValue={setFormValue} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalJobResults={totalJobResults} />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <Pagination />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
