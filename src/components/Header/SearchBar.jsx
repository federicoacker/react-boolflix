import { useState } from "react";

function SearchBar() {
    const [queryValue, setQueryValue] = useState("");

    const changeHandler = (event) => {
        setQueryValue(event.target.value);
    }
    return (
        <form className="d-flex gap-2">
            <input className="form-control" type="text" name="query" value={queryValue} onChange={changeHandler} placeholder="Search movies.." />
            <button className="btn btn-danger">Search</button>
        </form>
    )
}

export default SearchBar