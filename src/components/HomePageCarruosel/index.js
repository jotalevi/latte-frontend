import TextButton from "../TextButton";
import "./style.css";

function HomePageCarruosel(props) {
  return (
    <div className="home-page-carrousel">
      <div className="carrousel-item">
        <div className="icr-left-items">
          <div className="icr-title">Anime Title</div>
          <div>
            <div className="icr-description">Action, Drama, Fantasy</div>
            <div className="icr-text-content">
              Umika is a sweet yet shy high school girl. She has trouble
              speaking to others and dreams of having a friend from another
              planet. But her lonely school life takes a cosmic turn when she
              meets transfer student Yu, an alien with telepathic powers! The
              two become close and promise to go
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
            text="Watch S1E1 now"
          >
            <svg
              className="play-box"
              width="62"
              height="45"
              viewBox="0 0 62 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.0833 5.625H12.9167C10.0492 5.625 7.75 7.29375 7.75 9.375V35.625C7.75 37.6875 10.075 39.375 12.9167 39.375H49.0833C51.925 39.375 54.25 37.6875 54.25 35.625V9.375C54.25 7.29375 51.925 5.625 49.0833 5.625ZM25.8333 30V15L38.75 22.5"
                fill="black"
              />
            </svg>
          </TextButton>
        </div>
      </div>
    </div>
  );
}

export default HomePageCarruosel;
