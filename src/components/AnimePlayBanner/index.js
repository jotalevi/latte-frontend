import TextButton from "../TextButton";
import "./style.css";

function AnimePlayBanner(props) {
  console.log(props.animeData);
  return (
    <div className="player">
      <iframe
        className="frameitem"
        src={props.animeData.media_url}
        allowfullscreen="true"
        height="500"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
      ></iframe>
    </div>
  );
}

export default AnimePlayBanner;
