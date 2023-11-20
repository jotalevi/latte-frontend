import "./style.css";

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
        <div className="episode-card-title">{`${props.animeId}-ep${props.episodeId}`}</div>
      </div>
    </div>
  );
}

export default EpisodePlayCard;
