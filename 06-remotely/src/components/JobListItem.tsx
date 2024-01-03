import BookmarkIcon from "./BookmarkIcon";

type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  relevanceScore?: number;
  daysAgo: number;
};

type JobItemListProps = {
  jobItem: JobItem;
};

export default function JobListItem({ jobItem }: JobItemListProps) {
  return (
    <li className="job-item">
      <a className="job-item__link">
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{jobItem.daysAgo}</time>
        </div>
      </a>
    </li>
  );
}
