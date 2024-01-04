import { useEffect, useState } from "react";
import { JobItem } from "./types.ts";

export const useJobItems = (formValue: string) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const jobItemsSliced = jobItems.slice(0, 7); //derived state, computing from job items state variable

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

  return [jobItemsSliced, isLoading] as const;
  /*
   Because this array won't change, we can use "as const" to tell typescript that this array won't change.
   This also fixes the types of the array elements, jobItemsSliced can only be a JobItem[] and isLoading
   can only be a boolean.
   */
};
