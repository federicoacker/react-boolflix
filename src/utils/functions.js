function mapResults(arrayOfResults){
    const mappedResults = arrayOfResults.map(item =>{
        const nameKey = item.media_type === "tv" ? "name" : "title";
        const originalNameKey = item.media_type === "tv" ? "original_name" : "original_title";
        const adaptedScore = item.vote_average/2;

        return {
            id:item.id,
            media_type:item.media_type,
            title:item[nameKey],
            original_title:item[originalNameKey],
            vote_average: adaptedScore,
            original_language:item.original_language,
            overview:item.overview,
            imageSrc:item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` 
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Banier_ontbreekt.svg/960px-Banier_ontbreekt.svg.png?utm_source=commons.wikimedia.org&utm_campaign=gallery&utm_content=thumbnail"
        }
    });

    return mappedResults;
}

export {mapResults}