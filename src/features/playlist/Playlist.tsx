import PlaylistItems from "./PlaylistItems";
import PlaylistForm from "./PlaylistForm";
import Typography from "../../components/atom/Typography";

type PlaylistType = {
  media: string;
  onChangeTrack: (name: string) => void;
  data: string[];
  onAddElement: (add: string) => void;
  onRemoveElement: (remove: string) => void;
};

const Playlist = ({
  media,
  onChangeTrack,
  data,
  onAddElement,
  onRemoveElement,
}: PlaylistType) => {
  return (
    <div>
      <Typography className={"mb-6"} variant={"h2"}>
        Choose your media
      </Typography>
      <PlaylistForm onAddElement={onAddElement} />
      <PlaylistItems
        items={data}
        onChangeTrack={onChangeTrack}
        onRemoveElement={onRemoveElement}
        media={media}
      />
    </div>
  );
};

export default Playlist;
