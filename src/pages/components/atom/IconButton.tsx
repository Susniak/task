import classNames from "classnames";
import Button from "./Button";
import SvgComponent from "./SvgComponent";
import { SyntheticEvent } from "react";

type IconButtonType = {
  onClick: (event: SyntheticEvent) => void;
  icon: string;
};

const IconButton = ({ onClick, icon }: IconButtonType) => {
  const buttonClassName = classNames("b");

  return (
    <Button className={buttonClassName} onClick={onClick}>
      <SvgComponent src={`assets/${icon}.svg`} />
    </Button>
  );
};

export default IconButton;
