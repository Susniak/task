import Typography from "./Typography";

type LoadingBackdropType = {
  isLoading: boolean;
};

const LoadingBackdrop = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={
        "absolute w-full h-full bg-slate-800 flex items-center justify-center"
      }
    >
      <Typography className={"text-white"}>Loading...</Typography>
    </div>
  );
};

export default LoadingBackdrop;
