"use client";

import Player from "./features/player/Player";
import Playlist from "./features/playlist/Playlist";
import { useCallback, useEffect, useState } from "react";
import usePlaylist from "./features/playlist/helpers/usePlaylist";

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);
  const [currentMedia, setCurrentMedia] = useState("");
  const onRemoveCallback = (url: string) => {
    if (url === currentMedia) {
      setCurrentMedia(data[0]);
    }
  };
  const { data, onRemoveElement, onAddElement } = usePlaylist(onRemoveCallback);

  const onChangeTrack = useCallback(
    (direction: number) => {
      if (!data) {
        return;
      }
      const currentIndex = data.indexOf(currentMedia) + direction;

      if (currentIndex >= 0 && currentIndex < data.length) {
        setCurrentMedia(data[currentIndex]);
      }
    },
    [data, currentMedia],
  );

  useEffect(() => {
    if (!isLoaded && data?.length > 0) {
      setCurrentMedia(data[0]);
      setLoaded(true);
    }
  }, [data]); // eslint-disable-line

  return (
    <main className={"flex items-center flex-col"}>
      <div className={"flex justify-between max-w-screen-xl"}>
        <div className={"w-1/3"}>
          <Playlist
            data={data}
            onRemoveElement={onRemoveElement}
            onAddElement={onAddElement}
            media={currentMedia}
            onChangeTrack={setCurrentMedia}
          />
        </div>
        <div className={"w-2/3 pl-8"}>
          <Player media={currentMedia} onChangeTrack={onChangeTrack} />
        </div>
      </div>
    </main>
  );
}
