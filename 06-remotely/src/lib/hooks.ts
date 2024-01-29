import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "./constants.ts";
import { JobContentApiResponse, JobItemApiResponse } from "./types.ts";

//-----------Helper Functions-----------
const fetchJobContent = async (id: number): Promise<JobContentApiResponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return data;
};

const fetchJobItems = async (
  formValue: string,
): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${formValue}`);
  const data = await response.json();
  return data;
};

//-----------Hooks-----------

export const useJobItems = (formValue: string) => {
  const { data, isInitialLoading } = useQuery(
    ["job-items", formValue],
    () => fetchJobItems(formValue),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(formValue),
      onError: (error) => console.log(error),
    },
  );

  const jobItems = data?.jobItems;
  const isLoading = isInitialLoading;
  return [jobItems, isLoading] as const;
};

export const useJobContent = (id: number | null) => {
  const { data, isInitialLoading } = useQuery(
    ["job-content", id],
    () => (id ? fetchJobContent(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: (error) => console.log(error),
    },
  );
  const jobContent = data?.jobItem;
  const isLoading = isInitialLoading;
  return { jobContent, isLoading } as const;
};

export const useDebounce = <Value,>(value: Value, delay: number): Value => {
  const [debouncedValue, setDebouncedValue] = useState<Value>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value]);

  return debouncedValue;
};

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
