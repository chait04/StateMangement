import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'

function Nav() {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className="navbar">
            <h3>Cody CK</h3>
            <p>No of Lists: {movies.length}</p>
            
        </div>
    )
}

export default Nav
