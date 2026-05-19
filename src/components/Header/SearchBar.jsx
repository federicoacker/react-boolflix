import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useState } from "react";


function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [initialValue] = useState(searchParams.get("query"));
    const [debouncedQuery, setQuery, query] = useDebounce(initialValue ? initialValue : "", 500);
    const navigate = useNavigate();

    const queryChangeHandler = (event) => {
        setQuery(event.target.value);
    }
    useEffect( () => {
        if(debouncedQuery.trim() !== ""){
            setSearchParams({query:debouncedQuery});
        }
    }, [debouncedQuery, setSearchParams]);

    return (
        <input 
        className="form-control" 
        type="text" 
        name="query" 
        value={query} 
        onChange={queryChangeHandler} 
        placeholder="Search movies.." 
        onClick={()=>{navigate("/search")}}/>
    )
}

export default SearchBar