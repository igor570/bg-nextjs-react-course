export default function ResultsCount({
  totalJobResults,
}: {
  totalJobResults: number;
}) {
  return (
    <p className="count">
      <strong>{totalJobResults} </strong> results
    </p>
  );
}
