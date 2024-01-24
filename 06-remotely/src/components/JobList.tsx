import JobListItem from "./JobListItem.tsx";
import Spinner from "./Spinner.tsx";
import { JobItem } from "../lib/types.ts";
import { useActiveId } from "../lib/hooks.ts";

export function JobList({
  jobItems,
  isLoading,
}: {
  jobItems: JobItem[];
  isLoading: boolean;
}) {
  const activeId = useActiveId();
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            jobItem={jobItem}
            key={jobItem.id}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

export default JobList;
