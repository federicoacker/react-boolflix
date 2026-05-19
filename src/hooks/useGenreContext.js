import { GenreContext } from "../contexts/GenreContext";
import { useContext } from "react";

function useGenreContext() {
    const genreValue =  useContext(GenreContext);
    if(!GenreContext){
        console.error("Hai dimenticato di wrappare GenreProvider");
    }
    return genreValue;
}

export default useGenreContext;