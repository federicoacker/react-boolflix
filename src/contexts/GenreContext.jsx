import { createContext, useState } from "react"

const GenreContext = createContext(null);

function GenreProvider({children}) {
    const [genreId, setGenreId] = useState(-1);
    
    const changeGenre = (event) => {
        setGenreId(Number(event.target.value));
    }

    const value={
        genreId,
        changeGenre
    }

    return (
        <GenreContext value={value}>
            {children}
        </GenreContext>
    )
}

export {
    GenreContext,
    GenreProvider
}