import { useState } from "react";
import useSearch from "../../hooks/useSearch.js";

function SearchBar() {
    const [queryValue, setQueryValue] = useState("");
    const [submittedQueryValue, setSubmittedQueryValue] = useState("");
    const {data, loadingError, isLoaded} = useSearch(submittedQueryValue);

    const changeHandler = (event) => {
        setQueryValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmittedQueryValue(queryValue);
        setQueryValue("");
    }
    return (
        <form className="d-flex gap-2" onSubmit={submitHandler}>
            <input className="form-control" type="text" name="query" value={queryValue} onChange={changeHandler} placeholder="Search movies.." />
            <button className="btn btn-danger">Search</button>
            {JSON.stringify(data)}
        </form>
    )
}

export default SearchBar