import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="left-container">
            <div className="Heading">Welcome Back!</div>
            <div className="subText">
              Login to Cowatch & watch videos together with friends and family
              in real-time.
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <div className="heading">Login</div>
            <div className="subtext">Please sign in to continue</div>
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
            <Button className="btn">Login </Button>
            <div>
              Not a member? <Link to={"/register"}>Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
