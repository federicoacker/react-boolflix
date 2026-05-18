import { Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

function ItemCardList({data, isLoaded}) {

    return (
        <Row className="row-gap-2 py-4">
            {(isLoaded) && data?.map(({ id, title, name, original_language, original_title, vote_average, imageSrc }) => {
                return <ItemCard
                    key={id}
                    title={title}
                    name={name}
                    original_language={original_language}
                    original_title={original_title}
                    vote_average={vote_average}
                    imageSrc={imageSrc}
                />
            })}
        </Row>
    )
}

export default ItemCardList