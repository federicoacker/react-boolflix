import { Row } from "react-bootstrap";
import ItemCard from "./ItemCard";
import useGenreContext from "../../hooks/useGenreContext";


function ItemCardList({ data, isLoaded }) {

    const {genreId} = useGenreContext();

    const filteredData = data.filter(element => {
        return element.genre_ids.includes(genreId) ? true : genreId === -1 ? true : false;
    })
    
    return (
        <Row className="row-gap-2 py-4 result-row g-1">
            {(isLoaded) && filteredData.map(({ id, title, original_language, original_title, vote_average, imageSrc, overview, media_type }) => {
                return (
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
                    />
                )
            })}
        </Row>
    )
}

export default ItemCardList