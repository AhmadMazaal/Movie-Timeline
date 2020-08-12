import React from 'react'
import MovieCard from './MovieCard'

export default function PopularMovies(props) {
    const { movieCategory, type } = props
    return <MovieCard movieCategory={movieCategory} type={type} />
    
}
