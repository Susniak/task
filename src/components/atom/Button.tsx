import classNames from "classnames";
import { ReactNode, SyntheticEvent } from "react";

type ButtonType = {
  children: ReactNode;
  onClick?: (event: SyntheticEvent) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  type = "button",
  children,
  onClick,
  className,
}: ButtonType) => {
  const buttonClassName = classNames(
    "p-2 border-slate-100 rounded-lg border-2",
    className,
  );

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
