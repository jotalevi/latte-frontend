import "./style.css";
import "./style_mobile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-bar-frame nav-shadow"></div>
      <div className="nav-bar-frame">
        <div
          className="title-div"
          onClick={() => {
            navigate(`/home`);
          }}
        >
          Latte
        </div>
        <div className="right-hand-actions-frame">
          {props.showUserMenus ? (
            <>
              <Link to="/s">
                <svg
                  id="bookmark-outline-fill"
                  className="vector"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.2571 0C15.5079 0 18.6256 1.29137 20.9243 3.59003C23.2229 5.88869 24.5143 9.00635 24.5143 12.2571C24.5143 15.2931 23.4017 18.084 21.5726 20.2337L22.0817 20.7429H23.5714L33 30.1714L30.1714 33L20.7429 23.5714V22.0817L20.2337 21.5726C18.084 23.4017 15.2931 24.5143 12.2571 24.5143C9.00635 24.5143 5.88869 23.2229 3.59003 20.9243C1.29137 18.6256 0 15.5079 0 12.2571C0 9.00635 1.29137 5.88869 3.59003 3.59003C5.88869 1.29137 9.00635 0 12.2571 0ZM12.2571 3.77143C7.54286 3.77143 3.77143 7.54286 3.77143 12.2571C3.77143 16.9714 7.54286 20.7429 12.2571 20.7429C16.9714 20.7429 20.7429 16.9714 20.7429 12.2571C20.7429 7.54286 16.9714 3.77143 12.2571 3.77143Z" />
                </svg>
              </Link>
              <svg
                id="bookmark-outline-fill"
                className="bookmark-outline"
                width="38"
                height="44"
                viewBox="0 0 38 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M26.4917 33L18.7 29.0033L10.9083 33V9.16667H26.4917M26.4917 5.5H10.9083C10.0817 5.5 9.289 5.88631 8.70451 6.57394C8.12002 7.26157 7.79166 8.19421 7.79166 9.16667V38.5L18.7 33L29.6083 38.5V9.16667C29.6083 7.13167 28.2058 5.5 26.4917 5.5Z" />
              </svg>
              <div className="user-pic-frame">
                <div className="username-text">{props.userTick ?? "UU"}</div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
