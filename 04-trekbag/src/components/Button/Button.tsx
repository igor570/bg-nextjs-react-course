import { ButtonProps } from "../../lib/interfaces.ts";

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
};
