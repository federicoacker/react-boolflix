import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function useMovie(){
    const movieValues = useContext(MovieContext);
    if(movieValues){
        throw new Error("Hai dimenticato di wrappare MovieProvider attorno all'APP");
    }
    return movieValues
}

export default useMovie;