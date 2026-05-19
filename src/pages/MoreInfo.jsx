import { useParams } from "react-router"
import useDetails from "../hooks/useDetails";
import Vote from "../components/Main/Vote";

function MoreInfo() {

    const params = useParams();
    const infoURL = `https://api.themoviedb.org/3/${params.media_type}/${params.id}`;

    const { data } = useDetails(infoURL);


    return (
        <div className="d-flex text-light my-5 border border-light more-info-wrapper">
            <div className="info-image-wrapper border-end border-light">
                <img src={data.imageSrc} className="img-fluid" />
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
        </div>
    )
}

export default MoreInfo