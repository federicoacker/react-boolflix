
function Actor({ actorImage, actorName, actorRole }) {
    return (
        <div className="d-flex">
            <div className="actor-image-wrapper px-1">
                <img src={actorImage} alt={actorName} className="actor-image" />
            </div>
            <div className="d-flex flex-column px-2">
            <h4 className=" text-nowrap">{actorName}</h4>
            <p>Nel ruolo di: <br/> {actorRole}</p>
            </div>
        </div>
    )
}

export default Actor