import toast from "react-hot-toast";
import { JobContentApiResponse, JobItemApiResponse } from "./types.ts";
import { BASE_API_URL } from "./constants";

export const handleErrors = (error: unknown) => {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An error occurred";
  }
  toast.error(message); //Handling unknown type in RQ4, but RQ5 assumes Error type by Default.
};

//API CALLS
export const fetchJobContent = async (
  id: number,
): Promise<JobContentApiResponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return data;
};

export const fetchJobItems = async (
  formValue: string,
): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${formValue}`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return data;
};
