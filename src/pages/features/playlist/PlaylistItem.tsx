import classNames from "classnames";
import Typography from "../../components/atom/Typography";

type PlayListItemType = {
  url: string;
  onRemove: () => void;
  onChangeTrack: () => void;
  isActive: boolean;
};

const PlaylistItem = ({
  url,
  onRemove,
  onChangeTrack,
  isActive,
}: PlayListItemType) => {
  const linkClassName = classNames("max-w-full break-all", {
    "font-bold": isActive,
  });

  return (
    <li className="flex justify-between p-4 border-b-2 border-gray-100 items-center">
      <div className={"w-2/3 "}>
        <a className={linkClassName} href={"#"} onClick={onChangeTrack}>
          <Typography>{url}</Typography>
        </a>
      </div>
      <a href={"#"} onClick={onRemove}>
        <Typography>Remove</Typography>
      </a>
    </li>
  );
};

export default PlaylistItem;
