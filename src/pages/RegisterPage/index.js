import "./style.css";

import { Link } from "react-router-dom";

import TextButton from "../../components/TextButton";
import TextInput from "../../components/TextInput";
import LittleLink from "../../components/LittleLink";
import AlertCard from "../../components/AlertCard";

function RegisterPage() {
  return (
    <div className="full-screen-div-centers">
      <AlertCard>
        <div className="title-div">Latte</div>
        <TextInput placeholder="Invitation Code" password={false} />
        <Link to={"/"}>
          <LittleLink text="Don't have an invitation? Buy an account here!" />
        </Link>
        <TextInput placeholder="Mail" password={false} />
        <TextInput placeholder="Username" password={false} />
        <TextInput placeholder="Password" password={true} />
        <TextInput placeholder="Confirm password" password={true} />
        <Link to={"/"}>
          <TextButton
            type="primary"
            style={{ width: "350px" }}
            text="Create account"
            onClick={() => {}}
          />
        </Link>
      </AlertCard>
    </div>
  );
}

export default RegisterPage;
