import { ResultsCountProps } from "../lib/types";

export default function ResultsCount({ totalJobResults }: ResultsCountProps) {
  return (
    <p className="count">
      <strong>{totalJobResults} </strong> results
    </p>
  );
}
