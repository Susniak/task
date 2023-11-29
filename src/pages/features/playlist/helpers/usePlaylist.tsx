"use client";
import { useCallback, useEffect, useState } from "react";
import mapVideosResponse from "./mapVideosResponse";

const usePlaylist = (onRemoveCallback) => {
  const [data, setData] = useState([]);
  const onAddElement = useCallback(
    (url: string) =>
      setData((data) => (data.indexOf(url) !== -1 ? data : [...data, url])),
    [],
  );
  const onRemoveElement = useCallback(
    (url: string) => {
      setData((data) => data.filter((element) => element !== url));
      onRemoveCallback(url);
    },
    [onRemoveCallback],
  );

  useEffect(() => {
    fetch("./data.json")
      .then((resp) => resp.json())
      .then((data) => setData(mapVideosResponse(data)));
  }, []);

  return {
    data,
    onAddElement,
    onRemoveElement,
  };
};

export default usePlaylist;
