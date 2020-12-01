import React,{useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    
    const [movies, setMovies] = useState([
        {
            name:"Harry Potter",
           price: "$90",
            id: "12234"
        },
        {
            name:"GAme Of  Thrones ",
            price: "$167",
            id: "12657834"
        },
        {
            name:"Johhny Deep",
            price: "$1824",
            id: "12904"
        },
        
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}


