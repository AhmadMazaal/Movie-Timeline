import * as React from 'react'
import MovieCard from './MovieCard'


export default function Result(props) {

    const { movies, searchResult, type } = props
    return (
        <div>
            <MovieCard movies={movies} searchResult={searchResult} type={type} />
        </div>
    )
}
