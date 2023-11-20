import TextButton from "../TextButton";
import "./style.css";

function AnimePageBanner(props) {
  return (
    <div className="home-page-carrousel">
      <div className="carrousel-item">
        <div className="icr-left-items">
          <div className="icr-title">{props.animeData.title}</div>
          <div>
            <div className="icr-description">{props.animeData.type}</div>
            <div className="icr-text-content">
              {props.animeData.info.slice(0, 300) + "... "}
            </div>
          </div>
          <TextButton
            type="primary"
            style={{
              width: "250px",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-evenly",
              alignItems: "center",
              font: '900 15px "SeoulHangangCbl-Regular", sans-serif',
            }}
            text="Add to watch list"
          >
            <svg
              class="vector"
              width="23"
              height="34"
              viewBox="0 0 23 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4916 28L11.7 24.0033L3.90829 28V4.16667H19.4916M19.4916 0.5H3.90829C3.0817 0.5 2.28896 0.886308 1.70448 1.57394C1.11999 2.26157 0.791626 3.19421 0.791626 4.16667V33.5L11.7 28L22.6083 33.5V4.16667C22.6083 2.13167 21.2058 0.5 19.4916 0.5Z"
                fill="black"
              />
            </svg>
          </TextButton>
        </div>
      </div>
    </div>
  );
}

export default AnimePageBanner;
