import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="container">
      <div className="register-card">
        <div className="register-left">
          <div className="left-container">
            <div className="Heading">CoWatch</div>
            <div className="subText">
              CoWatch is the ultimate video-watching platform that allows you to
              watch videos together with friends and family in real-time, no
              matter where they are in the world.
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <div className="heading">Register</div>
            <div className="subtext">Please enter your details</div>
            <input
              type="email"
              className="inputField"
              placeholder="ENTER EMAIL"
            />
            <input
              type="password"
              className="inputField"
              placeholder="ENTER PASSWORD"
            />
            <input
              type="password"
              className="inputField"
              placeholder="RE-ENTER PASSWORD"
            />
            <Button className="btn">Register </Button>
            <div>
              Already a member? <Link to={"/login"}>Login Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
