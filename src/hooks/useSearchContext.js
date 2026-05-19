import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

function useSearchContext() {
    const searchValues = useContext(SearchContext);
    if(!searchValues){
        console.error("Hai dimenticato di wrappare il SearchProvider");
    }

    return searchValues;
}

export default useSearchContext;