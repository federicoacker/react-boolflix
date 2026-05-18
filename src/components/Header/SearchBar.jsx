
import useMovie from "../../hooks/useMovie"


function SearchBar() {
    const {searchQuery, queryChangeHandler} = useMovie();

    return (
        <input className="form-control" type="text" name="query" value={searchQuery} onChange={queryChangeHandler} placeholder="Search movies.." />
    )
}

export default SearchBar