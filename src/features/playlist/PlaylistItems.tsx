import PlaylistItem from "./PlaylistItem";
import { useCallback } from "react";

type PlayListItemsType = {
  items: string[];
  onRemoveElement: (name: string) => void;
  onChangeTrack: (name: string) => void;
  media: string;
};

const PlaylistItems = ({
  items,
  onRemoveElement,
  media,
  onChangeTrack,
}: PlayListItemsType) => {
  const onRemoveElementCallback = useCallback(
    (url: string) => () => {
      onRemoveElement(url);
    },
    [onRemoveElement],
  );

  const onChangeTrackEvent = useCallback(
    (url: string) => () => {
      if (onChangeTrack) {
        onChangeTrack(url);
      }
    },
    [onChangeTrack],
  );

  if (!Array.isArray(items) || items.length === 0) {
    return <span>List is empty.</span>;
  }

  return (
    <ul>
      {items.map((item) => (
        <PlaylistItem
          isActive={media === item}
          onChangeTrack={onChangeTrackEvent(item)}
          url={item}
          key={item}
          onRemove={onRemoveElementCallback(item)}
        />
      ))}
    </ul>
  );
};

export default PlaylistItems;
