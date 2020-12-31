import * as React from "react";
import profile from "../Assets/user.svg";
import { Link } from "react-router-dom";
import Emoji from "./Emoji";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../src/firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Container from "@material-ui/core/Container";
// import CircularProgress from "@material-ui/core/CircularProgress";

export default function Login() {
  const styles = (theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },
    progess: {
      position: "absolute",
    },
  });
  // const handleChange = (event) => {
  //   [event.target.name] = event.target.value;
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   const userData = {
  //     email,
  //     password,
  //   };
  // };
  // const [loading, setLoading] = React.useState(false);
  // const [errors, setErrors] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [email, setEmail] = React.useState("");
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
        <label htmlFor="loginEmail">Email or Username</label>
        <input
          type="email"
          id="loginEmail"
          name="loginEmail"
          placeholder="johndoe@example.com"
        />
        <label>Password</label>
        <input
          type="password"
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

    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <div className={styles.paper}>
    //     <Avatar className={styles.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
    //     <Typography component="h1" variant="h5">
    //       Login
    //     </Typography>
    //     <form className={styles.form} noValidate>
    //       <TextField
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         label="Email Address"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //         onChange={handleChange}
    //       />
    //       <TextField
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //         onChange={handleChange}
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         color="primary"
    //         className={styles.submit}
    //         onClick={handleSubmit}
    //         disabled={loading || !email || !password}
    //       >
    //         Sign In
    //         {loading && (
    //           <CircularProgress size={30} className={styles.progess} />
    //         )}
    //       </Button>
    //       <Grid container>
    //         <Grid item>
    //           <Link href="signup" variant="body2">
    //             {"Don't have an account? Sign Up"}
    //           </Link>
    //         </Grid>
    //       </Grid>
    //       {errors && (
    //         <Typography variant="body2" className={styles.customError}>
    //           {errors}
    //         </Typography>
    //       )}
    //     </form>
    //   </div>
    // </Container>
  );
}
