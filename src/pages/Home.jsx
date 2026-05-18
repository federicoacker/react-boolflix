import useMovie from "../hooks/useMovie"

function Home() {
    const {data, isLoaded, loadingError} = useMovie();
    return (
        <>
        {isLoaded && JSON.stringify(data)}
        {loadingError && <h1>{loadingError}</h1>}
        </>
    )
}

export default Home