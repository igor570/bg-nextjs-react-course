import JobListItem from "./JobListItem.tsx";
import Spinner from "./Spinner.tsx";
import { JobItem } from "../lib/types.ts";

export function JobList({
  jobItems,
  isLoading,
}: {
  jobItems: JobItem[];
  isLoading: boolean;
}) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem jobItem={jobItem} key={jobItem.id} />
        ))}
    </ul>
  );
}

export default JobList;
