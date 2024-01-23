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
import { useActiveId, useJobContent, useJobItems } from "../lib/hooks.ts";

function App() {
  const [formValue, setFormValue] = useState<string>("");
  //jobItems will be jobItemsSliced but returning in array overwrites the name of the variable
  const [jobItems, isLoading] = useJobItems(formValue);
  const activeId = useActiveId();
  const jobContent = useJobContent(activeId);

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
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItems} isLoading={isLoading} />
          <Pagination />
        </Sidebar>
        <JobItemContent jobContent={jobContent} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
