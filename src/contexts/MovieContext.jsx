import { createContext } from "react";
import useSearch from "../hooks/useSearch.js";
import useDebounce from "../hooks/useDebounce.js";
import { useSearchParams } from "react-router";

const MovieContext = createContext(null);

function MovieProvider({children}) {
    
    const [searchParams] = useSearchParams();
    const [debouncedQuery, setQuery] = useDebounce(searchParams.get("query"), 500);
    const {isEmpty, data, loadingError, isLoaded, queryUrl} = useSearch(debouncedQuery);
    
    const queryChangeHandler = (event) => {
        setQuery(event.target.value);
    }

    const value = {
        isEmpty,
        data,
        loadingError,
        isLoaded,
        queryChangeHandler,
        queryUrl
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