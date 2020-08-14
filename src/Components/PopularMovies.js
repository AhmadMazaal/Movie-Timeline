import React from "react";
import MovieCard from "./MovieCard";

export default function PopularMovies(props) {
  const { movieCategory, type, posts } = props;
  return <MovieCard movieCategory={movieCategory} posts={posts} type={type} />;
}
