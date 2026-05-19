import { useParams } from "react-router"
import useDetails from "../hooks/useDetails";
import Vote from "../components/Main/Vote";

function MoreInfo() {

    const params = useParams();
    const infoURL = `https://api.themoviedb.org/3/${params.media_type}/${params.id}`;

    const { data, isLoaded, loadingError } = useDetails(infoURL);
    console.log(isLoaded, loadingError);


    return (
        <div className="d-flex text-light ">
            <div className="info-image-wrapper">
                <img src={data.imageSrc} className="img-fluid" />
            </div>
            <div className="info-body d-flex flex-column px-5">
                <h2>Titolo: {data.title}</h2>
                <hr/>
                <p>
                    {data.overview}
                </p>
                <p>
                    Voto: <Vote vote={data.adaptedVote}/>
                </p>
            </div>
        </div>
    )
}

export default MoreInfo