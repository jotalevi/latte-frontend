import TextButton from "../TextButton";
import "./style.css";

function AnimePlayBanner(props) {
  console.log(props.animeData);
  return (
    <div className="player">
      <object
        className="frameitem"
        data={props.animeData.media_url}
        allowfullscreen="true"
        height="500"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
      ></object>
    </div>
  );
}

export default AnimePlayBanner;
