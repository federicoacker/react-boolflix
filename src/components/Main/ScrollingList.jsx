
import useAdaptiveScroll from "../../hooks/useAdaptiveScroll"
import ItemCard from "./ItemCard"


function ScrollingList({ data, loadingError, isLoaded }) {

    const rowRef = useAdaptiveScroll();
    

    return (
        <div ref={rowRef} className="d-flex list-row g-1">
            {(!isLoaded && loadingError) && <h1>Errore nel caricamento</h1>}
            {(isLoaded) && data.map(({ id, title, original_language, original_title, vote_average, imageSrc, overview, media_type }) => (
                <ItemCard
                media_type={media_type}
                id={id}
                key={id}
                title={title}
                original_language={original_language}
                original_title={original_title}
                vote_average={vote_average}
                imageSrc={imageSrc}
                overview={overview}
            />))}
        </div>
    )
}

export default ScrollingList