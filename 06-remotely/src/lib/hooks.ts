import { useEffect, useState } from "react";
import { BASE_API_URL } from "./constants.ts";
import { JobItem } from "./types.ts";
import { JobContent } from "./types.ts";

export const useActiveId = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
};

export const useJobItems = (formValue: string) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const jobItemsSliced = jobItems.slice(0, 7); //derived state, computing from job items state variable

  useEffect(() => {
    if (!formValue) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}?search=${formValue}`);
      const data = await response.json();
      setJobItems(data.jobItems);
      setIsLoading(false);
    };
    fetchData();
  }, [formValue]);

  return [jobItemsSliced, isLoading] as const;
  /*
   Because this array won't change, we can use "as const" to tell typescript that this array won't change.
   This also fixes the types of the array elements, jobItemsSliced can only be a JobItem[] and isLoading
   can only be a boolean.
   */
};

export const useJobContent = (id: number | null) => {
  const [jobContent, setJobContent] = useState<JobContent | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchJobContext = async () => {
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      console.log(data);
      setJobContent(data.jobItem);
    };
    fetchJobContext();
  }, [id]);
  return jobContent;
};
