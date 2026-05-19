const homeEndpoints = [
    {
        id:1,
        title:"I Film più popolari",
        endpoint:"https://api.themoviedb.org/3/movie/popular"
    },
    {
        id:2,
        title:"I Film più votati",
        endpoint:"https://api.themoviedb.org/3/movie/top_rated"
    },
    {
        id:3,
        title:"I Film in arrivo",
        endpoint:"https://api.themoviedb.org/3/movie/upcoming"
    },
    {
        id:4,
        title:"Le serie tv più popolari",
        endpoint:"https://api.themoviedb.org/3/tv/popular"
    },
    {
        id:5,
        title:"Le serie tv più votate",
        endpoint:"https://api.themoviedb.org/3/tv/top_rated"
    }
];

export {
    homeEndpoints
};