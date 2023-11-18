import "./style.css";

import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import SmallFooter from "../../components/SmallFooter";

import TextButton from "../../components/TextButton";
import LittleLink from "../../components/LittleLink";
import AlertCard from "../../components/AlertCard";

function NewCommersPage() {
  return (
    <div className="full-screen-div">
      <NavBar />
      <AlertCard
        style={{
          width: "800px",
        }}
      >
        <div className="alert-card-text">
          Hey there! <br />
          To watch content on our site you must log in. <br />
          To create an account, you either must receive an invitation code or
          purchase one.
        </div>
        <div className="side-by-side-flex">
          <TextButton
            type="primary"
            style={{ width: "250px" }}
            text="Purchase Code"
            onClick={() => {}}
          />
          <Link to={"/register"}>
            <TextButton
              type="secondary"
              style={{ width: "250px" }}
              text="I have a code already"
              onClick={() => {}}
            />
          </Link>
        </div>
        <Link to={"/login"}>
          <LittleLink text="LogIn" />
        </Link>
      </AlertCard>
      <SmallFooter />
    </div>
  );
}

export default NewCommersPage;
