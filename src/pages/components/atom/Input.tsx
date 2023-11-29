import Typography from "./Typography";
import { ChangeEventHandler } from "react";

type InputType = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  label: string;
};

const Input = ({ value, onChange, name, label }: InputType) => {
  return (
    <div className={"flex flex-col w-full"}>
      <label htmlFor={name}>
        <Typography>{label}</Typography>
      </label>
      <input
        className={"border-2 w-full"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
