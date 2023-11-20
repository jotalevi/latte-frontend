import "./style.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import TextButton from "../../components/TextButton";
import TextInput from "../../components/TextInput";
import LittleLink from "../../components/LittleLink";
import AlertCard from "../../components/AlertCard";

import BackendApis from "../../utils/BackendApis";

function LoginPage() {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUserNameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const handlePassWordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      await BackendApis.login(
        usernameValue.toString(),
        passwordValue.toString()
      )
    )
      navigate("/home");
    else {
      console.log("wrong password");
    }
    //BackendApis.getPopular(1);
  }

  return (
    <div className="full-screen-div-centers">
      <AlertCard>
        <form onSubmit={handleSubmit}>
          <div className="title-div">Latte</div>
          <TextInput
            placeholder="Username"
            value={usernameValue}
            onChange={handleUserNameChange}
            password={false}
          />
          <TextInput
            placeholder="Password"
            value={passwordValue}
            onChange={handlePassWordChange}
            password={true}
          />
          <Link to="/password-reset">
            <LittleLink text="Forgot your password?" />
          </Link>
          <TextButton
            type="primary"
            style={{ width: "350px" }}
            text="Login"
            onClick={handleSubmit}
          />
        </form>
      </AlertCard>
    </div>
  );
}

export default LoginPage;
