import { useState } from "react";
import useSearch from "../../hooks/useSearch.js";
import useDebounce from "../../hooks/useDebounce.js";

function SearchBar() {
    const [queryValue, setQueryValue] = useState("");
    const debouncedValue = useDebounce(queryValue, 500);
    const {data, loadingError, isLoaded} = useSearch(debouncedValue);

    const changeHandler = (event) => {
        setQueryValue(event.target.value);
    }


    return (
        <form className="d-flex gap-2">
            <input className="form-control" type="text" name="query" value={queryValue} onChange={changeHandler} placeholder="Search movies.." />
        </form>
    )
}

export default SearchBar