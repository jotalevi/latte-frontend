import "./style.css";

function NavBar(props) {
  return (
    <>
      <div className="nav-bar-frame nav-shadow"></div>
      <div className="nav-bar-frame">
        <div className="title-div">Latte</div>
        <div className="right-hand-actions-frame">
          {props.showUserMenus ? (
            <>
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
