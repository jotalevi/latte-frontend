import "./style.css";
import "./style_mobile.css";

import { useNavigate } from "react-router-dom";

function EpisodePlayCard(props) {
  const navigate = useNavigate();

  return (
    <div
      className="episode-card"
      onClick={() => {
        navigate(`/a/${props.animeId}/${props.episodeId}`);
      }}
    >
      <div className="episode-card-data-stack">
        <div className="episode-card-title">
          {`${props.animeId}-ep${props.episodeId}`}{" "}
        </div>
        <svg
          className="play-box"
          width="31"
          height="22.5"
          viewBox="0 0 62 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.0833 5.625H12.9167C10.0492 5.625 7.75 7.29375 7.75 9.375V35.625C7.75 37.6875 10.075 39.375 12.9167 39.375H49.0833C51.925 39.375 54.25 37.6875 54.25 35.625V9.375C54.25 7.29375 51.925 5.625 49.0833 5.625ZM25.8333 30V15L38.75 22.5"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default EpisodePlayCard;
