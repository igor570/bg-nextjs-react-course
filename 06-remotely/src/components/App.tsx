import { useState, useEffect } from "react";
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

function App() {
  const [formValue, setFormValue] = useState<string>("");
  const [jobItems, setJobItems] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!formValue) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${formValue}`,
      );
      const data = await response.json();
      setJobItems(data.jobItems);
      setIsLoading(false);
    };
    fetchData();
  }, [formValue]);

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
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
