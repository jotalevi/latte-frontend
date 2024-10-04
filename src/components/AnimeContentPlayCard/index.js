import "./style.css";
import "./style_mobile.css";

import { useNavigate } from "react-router-dom";

function AnimeContentPlayCard(props) {
  const navigate = useNavigate();
  if (props.skeleton) {
    return (
      <div
        className={"anime-skeleton-card " + (props.static ? "transparent" : "")}
      >
      
      </div>
    );
  }

  return (
    <div
      className="anime-card"
      onClick={() => {
        navigate(`/a/${props.animeData.anime}`);
      }}
    >
      <img src={props.animeData.thumbnail} alt='anime' className="anime-card-img-bg" />
      <div className="crumple-data">
        <div className="anime-card-title">{props.animeData.title}</div>
        <div className="anime-card-shortk">{props.animeData.type}</div>
      </div>
      <div className="anime-card-data-stack">
        <div className="anime-card-data-stack-topper">
          <div className="anime-card-title">{props.animeData.title}</div>
          <div className="anime-card-shortk">{props.animeData.type}</div>
          <div className="anime-card-descript">{props.animeData.info}</div>
        </div>
        <div className="anime-card-data-stack-bottom">
          <svg
            className="icons-fill"
            width="35"
            height="25"
            viewBox="0 0 35 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27.2685 3.125H7.17591C5.58286 3.125 4.30554 4.05208 4.30554 5.20833V19.7917C4.30554 20.9375 5.59721 21.875 7.17591 21.875H27.2685C28.8472 21.875 30.1389 20.9375 30.1389 19.7917V5.20833C30.1389 4.05208 28.8472 3.125 27.2685 3.125ZM14.3518 16.6667V8.33333L21.5278 12.5" />
          </svg>

          {props.isFavorite ? (
            <svg
              className="icons-fill"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.45 3H5.95C5.49913 3 5.06673 3.21071 4.74792 3.58579C4.42911 3.96086 4.25 4.46957 4.25 5V21L10.2 18L16.15 21V5C16.15 3.89 15.385 3 14.45 3Z" />
            </svg>
          ) : (
            <svg
              className="icons-fill"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.45 18L10.2 15.82L5.95 18V5H14.45M14.45 3H5.95C5.49913 3 5.06673 3.21071 4.74792 3.58579C4.42911 3.96086 4.25 4.46957 4.25 5V21L10.2 18L16.15 21V5C16.15 3.89 15.385 3 14.45 3Z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimeContentPlayCard;
