
const API_key= "4d50a0b69d194b3dec5d5062d4cfb590";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_key}&language=hi-IN`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_key}&language=hi-IN`,
    fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComdeyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${API_key}&with_genres=99`
}

export default requests