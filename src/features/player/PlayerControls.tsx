import { SyntheticEvent, useCallback } from "react";
import IconButton from "../../components/atom/IconButton";

type PlayerControlsType = {
  onPlay: () => void;
  isRunning: boolean;
  onStop: () => void;
  onChangeTrack: (count: number) => void;
  onChangeTime: (count: number) => void;
};

const PlayerControls = ({
  onPlay,
  isRunning,
  onStop,
  onChangeTrack,
  onChangeTime,
}: PlayerControlsType) => {
  const onChangeTrackEvent = useCallback(
    (direction: number) => (event: SyntheticEvent) => {
      event.preventDefault();

      if (onChangeTrack) {
        onChangeTrack(direction);
      }
    },
    [onChangeTrack],
  );

  const onChangeTimeEvent = useCallback(
    (time: number) => (event: SyntheticEvent) => {
      event.preventDefault();

      if (onChangeTime) {
        onChangeTime(time);
      }
    },
    [onChangeTime],
  );

  return (
    <div className={"flex justify-between"}>
      <IconButton icon={"previous"} onClick={onChangeTrackEvent(-1)} />
      <IconButton icon={"backward"} onClick={onChangeTimeEvent(-10)} />
      {!isRunning ? (
        <IconButton icon={"play"} onClick={onPlay} />
      ) : (
        <IconButton icon={"pause"} onClick={onStop} />
      )}
      <IconButton icon={"forward"} onClick={onChangeTimeEvent(10)} />
      <IconButton icon={"next"} onClick={onChangeTrackEvent(1)} />
    </div>
  );
};

export default PlayerControls;
