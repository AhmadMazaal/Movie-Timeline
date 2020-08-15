import * as React from "react";
import "../App.css";
import Error from "../routes/error";
import { Spring } from "react-spring/renderprops";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Colors from "../constants/colors";
import MovieNotFound from "../routes/movieNotFound";

export default function MovieCard(props) {
  const { movies, movieCategory, searchResult, type } = props;

  if (movies !== undefined && type === "query") {
    if (movies.length === 0) return <MovieNotFound />;
    return (
      <Spring from={{ marginLeft: -500 }} to={{ marginLeft: 0 }}>
        {(props) => (
          <div className="movie-card">
            <h1 className="movie-category">
              Search Result For{" "}
              <span className="search-result">"{searchResult}"</span>
            </h1>
            {movies
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <div key={movie.id} style={props}>
                  <div className="card">
                    <img
                      className="card--image"
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                      alt={movie.title + "poster"}
                    />
                    <div className="card--content">
                      <h3 className="card--title">{movie.title}</h3>

                      <Link style={{ textDecoration: "none" }} to="/">
                        <p
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          Add to favorites{" "}
                          <FaPlus size="1.2rem" color={Colors.warning} />
                        </p>
                      </Link>

                      <form action={`/Trailer/${movie.id}`}>
                        <button className="trailer-btn">Watch Trailer</button>
                      </form>
                      <p>
                        <small>RELEASE DATE: {movie.release_date}</small>
                      </p>
                      <p>
                        <small>RATING: {movie.vote_average}</small>
                      </p>
                      <p className="card--desc">{movie.overview}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Spring>
    );
  } else if (movieCategory && type === "popular") {
    return (
      <Spring from={{ marginLeft: -500 }} to={{ marginLeft: 0 }}>
        {(props) => (
          <div className="movie-card">
            <h1 className="movie-category">
              Most <span className="movie-category-title">20</span> Popular
              Movies
            </h1>
            {movieCategory
              .filter((movieCategory) => movieCategory.poster_path)
              .map((movieCategory) => (
                <div key={movieCategory.id} style={props}>
                  <div className="card">
                    <img
                      className="card--image"
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieCategory.poster_path}`}
                      alt={movieCategory.title + "poster"}
                    />
                    <div className="card--content">
                      <h3 className="card--title">{movieCategory.title}</h3>
                      <Link style={{ textDecoration: "none" }} to="/">
                        <p
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          Add to favorites{" "}
                          <FaPlus size="1.2rem" color={Colors.warning} />
                        </p>
                      </Link>
                      {/* <Link style={{textDecoration:"none"}}  to={`/${movieCategory.id}`} ><p style={{fontSize:"1.5rem",fontWeight:"bold",color:"#333"}}>Press Here to Watch trailer</p></Link> */}
                      <form action={`/Trailer/${movieCategory.id}`}>
                        <button className="trailer-btn">Watch Trailer</button>
                      </form>

                      <p>
                        <small>
                          RELEASE DATE: {movieCategory.release_date}
                        </small>
                      </p>
                      <p>
                        <small>RATING: {movieCategory.vote_average}</small>
                      </p>

                      <p className="card--desc">{movieCategory.overview}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Spring>
    );
  } else if (movieCategory && type === "topRated") {
    return (
      <Spring from={{ marginLeft: -500 }} to={{ marginLeft: 0 }}>
        {(props) => (
          <div className="movie-card">
            <h1 className="movie-category">
              Top <span className="movie-category-title">20</span> Rated Movies
            </h1>
            {movieCategory
              .filter((movieCategory) => movieCategory.poster_path)
              .map((movieCategory) => (
                <div key={movieCategory.id} style={props}>
                  <div className="card">
                    <img
                      className="card--image"
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieCategory.poster_path}`}
                      alt={movieCategory.title + "poster"}
                    />
                    <div className="card--content">
                      <h3 className="card--title">{movieCategory.title}</h3>

                      <Link style={{ textDecoration: "none" }} to="/">
                        <p
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          Add to favorites{" "}
                          <FaPlus size="1.2rem" color={Colors.warning} />
                        </p>
                      </Link>

                      <form action={`/Trailer/${movieCategory.id}`}>
                        <button className="trailer-btn">Watch Trailer</button>
                      </form>

                      <p>
                        <small>
                          RELEASE DATE: {movieCategory.release_date}
                        </small>
                      </p>
                      <p>
                        <small>RATING: {movieCategory.vote_average}</small>
                      </p>
                      <p className="card--desc">{movieCategory.overview}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Spring>
    );
  } else {
    return <Error />;
  }
}
