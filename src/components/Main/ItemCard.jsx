import { useState } from "react"
import { Card, Col } from "react-bootstrap"
import { useNavigate } from "react-router";
import { Tooltip } from "react-tooltip"
import Vote from "./Vote";
import useSearchContext from "../../hooks/useSearchContext";

function ItemCard({ id, media_type, title, original_language, original_title, vote_average, imageSrc, overview }) {
    const [isHovered, setIsHovered] = useState(false);
    const {setIsSearching} = useSearchContext();
    const navigate = useNavigate();

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} xxl={2} data-bs-theme="dark" className="card-container">
            <Card className={`h-100 item-card front fs-4 ${isHovered && "flipped"}`} 
            onClick={(event) => {
                const target = event.target;
                target.name === "movie-poster" && setIsHovered(true);
                (target.name === "exit-button" || target.className.includes("bi-x-lg")) && setIsHovered(false);
            }}
            tabIndex={title.length}
            onBlur={(event)=>{
                const relatedTarget = event.relatedTarget;
                relatedTarget.name !== "more-info" && setIsHovered(false)}
                }>
                {isHovered &&
                    <div className="back h-100 d-flex flex-column" name="back-card">

                        <Card.Header className="d-flex flex justify-content-between align-items-center column-gap-2">
                            <Card.Title>
                                <h3 className="item-main-title">{title}</h3>
                            </Card.Title>
                            <button className="btn btn-danger align-self-start" name="exit-button">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </Card.Header>
                        <Card.Body className="d-flex flex-column ">
                            <Card.Text className="flex-grow-1 item-title">
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
                                <Card.Text className="ellipsis-box">
                                    {overview}
                                </Card.Text>
                            </div>
                            <button 
                            className="btn btn-danger" 
                            name="more-info" 
                            onClick={()=>{
                                setIsSearching(false);
                                navigate(`/${media_type}/${id}`, {replace:true})
                            }
                            }
                                >
                                Più informazioni
                            </button>
                            <Tooltip id="language-tooltip" className="rounded bg-danger px-1 fs-6"/>
                            <hr/>
                            <Card.Text>
                                Voto: <Vote vote={vote_average}/>
                            </Card.Text>
                        </Card.Body>
                    </div>
                }
                {!isHovered && <img src={imageSrc} alt={title} name="movie-poster" className="img-fluid posterImage front" />}
            </Card>
        </Col>
    )
}

export default ItemCard