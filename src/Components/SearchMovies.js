import * as React from 'react';
import '../App.css'


export default function SearchMovies(props){
    
    const {searchMovies, setQuery} = props;


    return(
        <>
        <form className="form" onSubmit={searchMovies}  autoComplete="off" method="get">
            <label htmlFor="query" className="label" >Movie Name: </label>
            <input type="text" className="input" name="query" id="queryMovie" placeholder="Enter a movie name, i.e. Avengers..." onChange={(e)=>setQuery(e.target.value)} />
            <input id="search" type="submit" className="button" value="Search" />
        </form>
        </>
        
    )
}