import useMovie from "../../hooks/useMovie"


function SearchBar() {
    const {searchQuery, queryChangeHandler} = useMovie();
    return (
        <form className="d-flex gap-2">
            <input className="form-control" type="text" name="query" value={searchQuery} onChange={queryChangeHandler} placeholder="Search movies.." />
        </form>
    )
}

export default SearchBar