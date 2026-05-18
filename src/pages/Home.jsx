
import MovieList from "../components/Main/MovieList";
import useMovie from "../hooks/useMovie"

function Home() {
    const {isEmpty, isLoaded, loadingError} = useMovie();
    return (
        <div className="text-white bg-tertiary">
            {loadingError && <h1>{loadingError}</h1>}
            {(isLoaded && !isEmpty) && <MovieList/>}
        </div>
    )
}

export default Home