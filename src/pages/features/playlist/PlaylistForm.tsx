import { useCallback, useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import Typography from "../../components/atom/Typography";
import useInput from "./helpers/useInput";

type PlaylistFormType = {
  onAddElement: (value: string) => void;
};

const PlaylistForm = ({ onAddElement }: PlaylistFormType) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const { isValid, onChange, value, onClear } = useInput(true);
  const submitForm = useCallback(
    (event) => {
      event.preventDefault();
      setSubmitted(true);

      if (isValid) {
        onAddElement(value);
        onClear();
      }
    },
    [isValid, value, onClear, onAddElement],
  );

  return (
    <div className={"p-6 border-2"}>
      <div className={"mb-6"}>
        <Typography>
          Add URL to your own Media and have fun of Player usage!
        </Typography>
      </div>
      <form onSubmit={submitForm} className={"w-full"}>
        <div className={"flex justify-between items-end w-full"}>
          <div className={"w-5/6 mr-6"}>
            <Input
              onChange={onChange}
              value={value}
              name={"url"}
              label={"Asset URL"}
            />
          </div>
          <div className={"w-1/6"}>
            <Button type={"submit"}>
              <Typography>Add</Typography>
            </Button>
          </div>
        </div>
      </form>
      {isSubmitted && !isValid ? (
        <Typography className={"mt-2 text-red-600"}>
          Input is required
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
};

export default PlaylistForm;
