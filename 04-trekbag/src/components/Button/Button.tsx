import { ButtonProps } from "../../lib/interfaces.ts";

export const Button = ({ children, type, buttonFunction }: ButtonProps) => {
  return (
    <button
      onClick={buttonFunction}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
};
