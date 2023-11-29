import classNames from "classnames";
import { ReactNode } from "react";

type TypographyType = {
  variant?: "h2" | "text";
  children: ReactNode;
  className?: string;
};

const Typography = ({ variant, children, className }: TypographyType) => {
  const typographyClassName = classNames(
    "font-serif text-base",
    {
      "text-4xl": variant === "h2",
    },
    className,
  );

  switch (variant) {
    case "h2":
      return <h2 className={typographyClassName}>{children}</h2>;
    case "text":
    default:
      return <span className={typographyClassName}>{children}</span>;
  }
};

export default Typography;
