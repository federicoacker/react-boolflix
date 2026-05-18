import { createContext, useState } from "react";
import useSearch from "../hooks/useSearch.js";
import useDebounce from "../hooks/useDebounce.js";

const MovieContext = createContext(null);

function MovieProvider({children}) {
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedQuery = useDebounce(searchQuery, 500);
    const {data, loadingError, isLoaded} = useSearch(debouncedQuery);

    const queryChangeHandler = (event) => {
        setSearchQuery(event.target.value);
    }

    const value = {
        searchQuery,
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