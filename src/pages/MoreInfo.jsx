import { useParams } from "react-router"
import useDetails from "../hooks/useDetails";
import useCredits from "../hooks/useCredits";
import Vote from "../components/Main/Vote";
import Actor from "../components/Main/Actor";

function MoreInfo() {

    const params = useParams();
    const infoURL = `https://api.themoviedb.org/3/${params.media_type}/${params.id}`;
    const creditsURL = `https://api.themoviedb.org/3/${params.media_type}/${params.id}/credits`;

    const { data } = useDetails(infoURL);
    const { data: actorData } = useCredits(creditsURL);

    return (
        <div className="d-flex text-light my-5 border border-light more-info-wrapper">
            <div className="info-image-wrapper border-end border-light">
                <img src={data.imageSrc} className="more-info-movie-image" />
            </div>
            <div className="info-body d-flex flex-column px-5 py-5 justify-content-between">
                <div>
                    <h2>Titolo: {data.title}</h2>
                    <hr />
                </div>
                <p className="flex-grow-1">
                    {data.overview}
                </p>
                <p>
                    Voto: <Vote vote={data.adaptedVote} />
                </p>
            </div>
            <div>
                <h2>Cast:</h2>
                <div className="d-flex flex-column row-gap-2 py-2">
                    {actorData.map(({id, name, character, img}) => (
                        <Actor 
                        key = {id}
                        actorName={name}
                        actorImage={img}
                        actorRole={character}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoreInfo