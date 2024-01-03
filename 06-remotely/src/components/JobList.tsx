import JobListItem from "./JobListItem.tsx";
import Spinner from "./Spinner.tsx";

export function JobList({ jobItems, isLoading }) {
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
