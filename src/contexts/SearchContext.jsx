import { useState } from "react";
import { createContext } from "react";

const SearchContext = createContext(null);
function SearchProvider ({children}) {
    const [isSearching, setIsSearching] = useState(false);
    const value = {
        isSearching,
        setIsSearching
    }
    return (
        <SearchContext value={value}>
            {children}
        </SearchContext>
    )
}

export {
    SearchContext,
    SearchProvider
}