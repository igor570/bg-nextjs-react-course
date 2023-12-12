interface CountProps {
  count: number;
}

export const Count = ({ count }: CountProps) => {
  return <div className="count">{count}</div>;
};
