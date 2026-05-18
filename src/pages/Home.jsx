
import useMovie from "../hooks/useMovie"

function Home() {
    const {data, isLoaded, loadingError} = useMovie();
    return (
        <div className="text-white bg-tertiary">
            {loadingError && <h1>{loadingError}</h1>}
            {isLoaded && JSON.stringify(data)}
        </div>
    )
}

export default Home