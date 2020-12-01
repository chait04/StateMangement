import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext'

const AddMovie = () => {

    const [name, setName] =useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = e => {
        setName(e.target.value)
    };

    const updatePrice = e => {
        setPrice(e.target.value)
    };

    const addMovie = e => {
        e.prevenDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
    }

    return (
        <form className="form" onSubmit={addMovie}>
            <input type="text" value={name} name="name" onChange={updateName}/>
            <input 
                type="text"
                value={price}
                name="price"
                onChange={updatePrice}
            />
            <button>Submit</button>         
        </form>
    )
}

export default AddMovie