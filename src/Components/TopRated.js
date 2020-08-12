import* as React from 'react';
import MovieCard from './MovieCard';


export default function TopRated() {


    
  const [topRated, setTopRated] = React.useState([]);

//   const topRatedHanlder = () => {
//     fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1b1aa94594e5c58e59d2f9a61028fe64&language=en-US&page=1")
//     .then(res => res.json())
//     .then(data => setTopRated(data.results));
//   }
React.useEffect( () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1b1aa94594e5c58e59d2f9a61028fe64&language=en-US&page=1")
    .then(res => res.json())
    .then(data => setTopRated(data.results));
},[])

    return (
        <div>
            <MovieCard movieCategory={topRated}  type="topRated"/>            
        </div>
    )
}
