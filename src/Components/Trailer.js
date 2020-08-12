import React from "react";
import "../App.css";
// import queryString from "query-string";
export default function Trailer(props) {
  const id = props.match.params.id;
  const apiKey = "1b1aa94594e5c58e59d2f9a61028fe64";
  const [movieKey, setMovieKey] = React.useState("");
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    const fetchMovie = () => {
      return (
        fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        )
          // https://api.themoviedb.org/3/movie/345454?api_key=1b1aa94594e5c58e59d2f9a61028fe64&language=en-US

          .then((res) => res.json())
          .then((data) => {
            setMovieKey(data.results[0].key);
            setName(data.results[0].name);
          })
          .catch((err) => setName(""))
      );
    };
    fetchMovie();
  }, []);
  // for mobile width='350' height='250'
  const iframe = `<iframe width='400'   height='300' src=https://www.youtube.com/embed/${movieKey} frameborder='0' allow=fullscreen; autoplay; encrypted-media;  picture-in-picture'></iframe>`;
  const setIframe = () => {
    return {
      __html: iframe,
    };
  };
  return (
    <div className="trailer-container">
      <h2 className="trailer-title">
        {name.length !== undefined ? name : "Movie Trailer"}
      </h2>
      <hr
        style={{
          backgroundColor: "#d9534f",
          height: ".4rem",
          width: "30vw",
          marginBottom: "5rem",
        }}
      />
      <div
        className="trailer-iframe"
        dangerouslySetInnerHTML={setIframe()}
      ></div>
    </div>
  );
}
