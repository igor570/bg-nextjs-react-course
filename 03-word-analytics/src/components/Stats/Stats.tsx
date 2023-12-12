const Stat = ({
  statNumber,
  statHeading,
}: {
  statNumber: number;
  statHeading: string;
}) => {
  return (
    <section className="stat">
      <span
        className={`${
          statNumber >= 0 ? "stat__number" : "stat__number--limit"
        }`}
      >
        {statNumber}
      </span>
      <h2 className="second-heading">{statHeading}</h2>
    </section>
  );
};

type StatsProps = {
  numberOfWords: string | number;
  numberOfCharacters: string | number;
  instaCharacters: string | number;
  facebookCharacters: string | number;
};

export const Stats = ({
  numberOfWords,
  numberOfCharacters,
  instaCharacters,
  facebookCharacters,
}: StatsProps) => {
  return (
    <section className="stats">
      <Stat statNumber={numberOfWords} statHeading={"Words"} />
      <Stat statNumber={numberOfCharacters} statHeading={"Characters"} />
      <Stat statNumber={instaCharacters} statHeading={"Instagram"} />
      <Stat statNumber={facebookCharacters} statHeading={"Facebook"} />
    </section>
  );
};
