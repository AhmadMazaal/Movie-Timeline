import * as React from "react";
import profile from "../Assets/user.svg";
import { Link } from "react-router-dom";
import Emoji from "./Emoji";

export default function Login() {
  return (
    <div>
      <h2 className="login-title">Login form</h2>
      <hr
        style={{
          backgroundColor: "#d9534f",
          height: ".4rem",
          width: "30vw",
          marginBottom: "5rem",
        }}
      />
      <form className="login-container">
        {/* <div className="cine-logo">
          Login to your Timeline account
          <Emoji symbol="🎬" label="cine" />
        </div> */}
        <img alt="profile" src={profile} className="login-image" />
        <label>Email or Username</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@example.com"
        />
        <label>Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="your password"
        />
        <small>
          Don't have account?
          <Link className="signup-link" to="/signup">
            {" "}
            Signup
            <Emoji symbol="👋" label="waving" />
          </Link>
        </small>
        <small>
          Forgot your password?
          <Link className="signup-link" to="/ResetPassword">
            {" "}
            Reset password
            <Emoji symbol="🔑" label="ok" />
          </Link>
        </small>
        <input type="submit" value="Login" id="login-btn" />
      </form>
    </div>
  );
}
