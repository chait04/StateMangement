import React from 'react'

function Movie({name, price, id}) {
    return (
        <div className="movie">
            <h3>{name}</h3>
            <p>{price}</p>
            {/* <h4>{id}</h4> */}
        </div>
    )
}

export default Movie
