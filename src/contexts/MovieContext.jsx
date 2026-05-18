import { createContext } from "react";
import useSearch from "../hooks/useSearch.js";
import useDebounce from "../hooks/useDebounce.js";

const MovieContext = createContext(null);

function MovieProvider({children}) {
    const [debouncedQuery, setQuery] = useDebounce("", 500);
    const { data, loadingError, isLoaded} = useSearch(debouncedQuery);

    const queryChangeHandler = (event) => {
        setQuery(event.target.value);
    }
    const value = {
        data,
        loadingError,
        isLoaded,
        queryChangeHandler
    }

    return (
    <MovieContext value={value}>
        {children}
    </MovieContext>
    );
}

export {
    MovieContext,
    MovieProvider
}