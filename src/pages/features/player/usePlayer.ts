"use client";

import { useCallback, useState } from "react";

const usePlayer = (videoRef) => {
  const [isLoading, setLoading] = useState(true);
  const [isRunning, setRunning] = useState(false);

  const onPlay = useCallback(() => {
    setRunning(true);
    videoRef?.play();
  }, [videoRef]);
  const onStop = useCallback(() => {
    setRunning(false);
    videoRef?.pause();
  }, [videoRef]);
  const onChangeVideoTime = useCallback(
    (time: number) => {
      videoRef.currentTime = videoRef.currentTime + time;
    },
    [videoRef],
  );
  const stopLoading = useCallback(() => {
    setLoading(false);
    onPlay();
  }, [onPlay]);
  const startLoading = useCallback(() => {
    onStop();
    setLoading(true);
  }, [onStop]);

  return {
    stopLoading,
    startLoading,
    isLoading,
    isRunning,
    onPlay,
    onStop,
    onChangeVideoTime,
  };
};

export default usePlayer;
