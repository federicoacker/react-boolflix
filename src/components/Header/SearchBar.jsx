import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useState } from "react";


function SearchBar() {
    const navigate = useNavigate();
    const [isSearching, setIsSearching] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [initialValue] = useState(searchParams.get("query"));
    const [debouncedQuery, setQuery, query] = useDebounce(initialValue ? initialValue : "", 500);

    const queryChangeHandler = (event) => {
        setQuery(event.target.value);
    }
    useEffect( () => {
        if(debouncedQuery.trim() !== ""){
            setSearchParams({query:debouncedQuery});
        }
        else if(debouncedQuery.trim() === "" && isSearching){
            navigate(`/search?query=`);
        }
        else{
            navigate("/");
        }
    }, [debouncedQuery, setSearchParams, navigate, isSearching]);

    return (
        <input 
        className="form-control" 
        type="text" 
        name="query" 
        value={query} 
        onChange={queryChangeHandler} 
        placeholder="Search movies.." 
        onClick={()=>{
            setIsSearching(true);
        }}
        onBlur={()=>{
            setIsSearching(false);
        }}
        />
    )
}

export default SearchBar