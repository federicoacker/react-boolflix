import { useNavigate, useSearchParams, useParams, useLocation } from "react-router";
import { useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useState } from "react";


function SearchBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const [isSearching, setIsSearching] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [initialValue] = useState(searchParams.get("query"));
    const [debouncedQuery, setQuery, query] = useDebounce(initialValue ? initialValue : "", 500);

    const queryChangeHandler = (event) => {
        setQuery(event.target.value);
    }

    useEffect(() => {
        if(location.pathname === "/"){
            setQuery("");
        }
        if (debouncedQuery.trim() !== "" && !params.media_type) {
            setSearchParams({ query: debouncedQuery });
        }
        else if (debouncedQuery.trim() === "" && isSearching) {
            navigate(`/search?query=`);
        }
        else if (params.media_type) {
            setQuery("");
        }
        else {
            navigate("/");
        }
    }, [debouncedQuery, setSearchParams, navigate, isSearching, params.media_type, setQuery, location.pathname]);

    return (
        <input
            className="form-control"
            type="text"
            name="query"
            value={query}
            onChange={queryChangeHandler}
            placeholder="Search movies.."
            onClick={() => {
                setIsSearching(true);
            }}
            onBlur={() => {
                setIsSearching(false);
            }}
        />
    )
}

export default SearchBar