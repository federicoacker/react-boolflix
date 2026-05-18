import { Card, Col } from "react-bootstrap"
import { Tooltip } from "react-tooltip"

function ItemCard({ title, name, original_language, original_title, vote_average, imageSrc }) {
    console.log(name);
    return (
        <Col xs={12} sm={12} md={6} xl={4} data-bs-theme="dark">
            <Card className="h-100">
                <Card.Header className="d-flex flex-column row-gap-3">
                    <Card.Img variant="top" src={imageSrc}/>
                    <Card.Title>
                        <h3 className="text-center">{title}</h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                    <Card.Text className="flex-grow-1">
                        {original_title !== title && <p>Titolo Originale: {original_title}</p>}
                        Lingua Originale: <span
                            className={`lang-icon lang-icon-${original_language}`}
                            data-tooltip-id="language-tooltip"
                            data-tooltip-content={original_language}
                        />
                    </Card.Text>
                    <Tooltip id="language-tooltip" />
                    <Card.Text>
                        Voto: {Array.from({length:vote_average}, (element ,index) => <i key={index} className="bi bi-star-fill"></i>)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemCard