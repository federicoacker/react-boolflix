import { useState } from "react"
import { Card, Col } from "react-bootstrap"
import { Tooltip } from "react-tooltip"

function ItemCard({ title, original_language, original_title, vote_average, imageSrc, overview }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Col xs={12} sm={12} md={6} xl={4} data-bs-theme="dark" className="card-container">
            <Card className={`h-100 result-card front ${isHovered && "flipped"}`} onClick={(event) => {
                const target = event.target;
                target.name === "movie-poster" && setIsHovered(true);
                (target.name === "exit-button" || target.className.includes("bi-x-lg")) && setIsHovered(false);
            }}>
                {isHovered &&
                    <div className="back h-100" name="back-card">

                        <Card.Header className="d-flex flex justify-content-between align-items-center column-gap-2">
                            <Card.Title>
                                <h3 className="text-center">{title}</h3>
                            </Card.Title>
                            <button className="btn btn-danger align-self-start" name="exit-button">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </Card.Header>
                        <Card.Body className="d-flex flex-column">
                            <Card.Text className="flex-grow-1">
                                {original_title !== title &&
                                    <span>
                                        Titolo Originale: {original_title}
                                        <br />
                                    </span>
                                }

                                Lingua Originale: <span
                                    className={`lang-icon lang-icon-${original_language}`}
                                    data-tooltip-id="language-tooltip"
                                    data-tooltip-content={original_language}
                                />
                            </Card.Text>
                            <div className="card-overview-text">
                                <Card.Text >
                                    {overview}
                                </Card.Text>
                            </div>
                            <Tooltip id="language-tooltip" />
                            <hr/>
                            <Card.Text>
                                Voto: {Array.from({ length: vote_average }, (element, index) => <i key={index} className="bi bi-star-fill"></i>)}
                            </Card.Text>
                        </Card.Body>
                    </div>
                }
                {!isHovered ? <img src={imageSrc} alt={title} name="movie-poster" className="img-fluid posterImage front" /> : null}
            </Card>
        </Col>
    )
}

export default ItemCard