import { useEffect, useRef } from "react";
import PlayerView from "./PlayerView";
import PlayerControls from "./PlayerControls";
import usePlayer from "./usePlayer";
import LoadingBackdrop from "../../components/atom/LoadingBackdrop";

type PlayerType = {
  media: string;
  onChangeTrack: (count: number) => void;
};

const Player = ({ media, onChangeTrack }: PlayerType) => {
  const ref = useRef();
  const {
    isRunning,
    onPlay,
    onStop,
    onChangeVideoTime,
    stopLoading,
    startLoading,
    isLoading,
  } = usePlayer(ref?.current);

  useEffect(() => {
    if (media) {
      startLoading();
    }
  }, [media, startLoading]);

  return (
    <div className={"relative"}>
      <LoadingBackdrop isLoading={isLoading} />
      <PlayerView ref={ref} media={media} onLoad={stopLoading} />
      <PlayerControls
        isRunning={isRunning}
        onChangeTrack={onChangeTrack}
        onChangeTime={onChangeVideoTime}
        onPlay={onPlay}
        onStop={onStop}
      />
    </div>
  );
};

export default Player;
