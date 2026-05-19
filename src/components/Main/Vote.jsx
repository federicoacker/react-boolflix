
function Vote({ vote }) {
    let floatVote = vote % 1;

    const filledStars = Array.from({ length: 5 }, (element, index) => {
        if (index < vote - 1) {
            return <i key={index} className="bi bi-star-fill"></i>
        }

        if(floatVote >= 0.5){
            floatVote = 0;
            return <i key={index} className="bi bi-star-half"></i>
        }
        else{
            return <i key={index} className="bi bi-star"></i>
        }
    });


    return (
        filledStars
    );
}

export default Vote