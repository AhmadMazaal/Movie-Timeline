import * as React from "react";
// import Emoji from "../Components/Emoji";
// import { Link } from "react-router-dom";
import axios from "axios";
import tv from "../Assets/family-tv.jpg";
import "../App.css";

export default function Signup() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const Signup = (e) => {
    e.preventDefault();
    axios
      .post("users/signup", { username })
      .then((res) => console.log(res.data))
      .then(() => (window.location = "/"))
      .catch((err) => console.log(`Error: ${err}`));
    console.log(username, email, password, confirmPassword);
  };
  return (
    <div>
      <h2 className="signup-title">Sign up form</h2>
      <hr
        style={{
          backgroundColor: "#d9534f",
          height: ".4rem",
          width: "30vw",
          marginBottom: "5rem",
        }}
      />
      <img alt="watching tv" src={tv} className="signup-image" />

      <form onSubmit={Signup} className="signup-container">
        <label>Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="john"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password: </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Sign up" id="signup-btn" className="btn" />
      </form>
    </div>
  );
}
