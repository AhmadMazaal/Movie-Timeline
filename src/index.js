import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import SearchMovies from "./Components/SearchMovies";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Subscription from "./routes/subscribtion";
import PageNotFound from "./routes/pageNotFound";

import MovieNotFound from "./routes/movieNotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import PopularMovies from "./Components/PopularMovies";
import Result from "./Components/Result";
import TopRated from "./Components/TopRated";
import About from "./Components/About";
import Trailer from "./Components/Trailer";
import Signup from "./routes/Signup";

export default function Main() {
  const [query, setQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [searchResult, setSearchResult] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [type, setType] = React.useState("");
  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1b1aa94594e5c58e59d2f9a61028fe64&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
    setQuery("");
    setType("popular");
  }, []);

  const searchMovies = async (e) => {
    e.preventDefault();
    document.getElementById("queryMovie").value = null;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=1b1aa94594e5c58e59d2f9a61028fe64&language=en-US&query=${query}&page=1&include_adult=false`;
    if (!query) return alert("Please enter a movie!");
    try {
      const res = await fetch(url);
      const data = await res.json();
      setVisible(true);
      setType("query");
      setSearchResult(query);
      setMovies(data.results);
      setQuery("");
    } catch (err) {
      console.error(err);
      window.location = "/error";
    }
  };
  return (
    <>
      <Router>
        <Header title="Movie Timeline" />
        <div className="container-app">
          <Navbar setVisible={setVisible} setType={setType} />
          <hr
            style={{
              backgroundColor: "#d9534f",
              height: ".4rem",
              width: "50vw",
              marginBottom: "5rem",
            }}
          />

          <Switch>
            <Route
              path="/"
              render={(props) => (
                <div>
                  <SearchMovies
                    {...props}
                    searchMovies={searchMovies}
                    setQuery={setQuery}
                  />
                  {visible ? (
                    <Redirect to="Result" />
                  ) : (
                    <PopularMovies
                      {...props}
                      type={type}
                      movieCategory={popularMovies}
                    />
                  )}
                </div>
              )}
              exact
            />

            <Route
              path="/Result"
              render={(props) => (
                <div>
                  <SearchMovies
                    {...props}
                    searchMovies={searchMovies}
                    setQuery={setQuery}
                  />
                  <Result
                    movies={movies}
                    type={type}
                    searchResult={searchResult}
                  />
                </div>
              )}
            />

            <Route
              path="/topRated"
              render={(props) => (
                <div>
                  <SearchMovies
                    {...props}
                    searchMovies={searchMovies}
                    setQuery={setQuery}
                  />
                  {visible ? <Redirect to="Result" /> : <TopRated />}
                </div>
              )}
            />
            <Route path="/About" component={About} />
            <Route path="/Subscription" component={Subscription} />
            <Route path="/Login" component={Login} />
            <Route path="/Trailer/:id" component={Trailer} />
            <Route path="/Signup" component={Signup} />
            <Route path="/invalid" component={MovieNotFound} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();
