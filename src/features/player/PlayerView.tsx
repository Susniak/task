import { forwardRef } from "react";

type PlayerViewType = {
  media: string;
  onLoad: () => void;
};

const PlayerView = ({ media, onLoad }: PlayerViewType, ref) => {
  return (
    <div>
      <video width={"100%"} src={media} ref={ref} onLoadedData={onLoad} />
    </div>
  );
};

export default forwardRef(PlayerView);
