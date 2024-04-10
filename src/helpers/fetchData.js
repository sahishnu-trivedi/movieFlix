const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFiMDZjZDQ2ZWFiYmYwZGFlMTA3ZDRmN2Q0NTE5ZSIsInN1YiI6IjY1YWE1NWMzOGQ1MmM5MDEzNzgxZGQyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nEuvsBbYJCezSz-NsVOhnmPGXxKswUuc2U6R12VioE'
    }
};

export const fetchMovies = () => {
    return fetch(`${import.meta.env.VITE_APP_BASE_URL}/now_playing?language=en-US&page=1`, options);
}

export const fetchFavouritesMovies = () => {
    return fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`, options);
}

export const fetchSearchedMovies = (searchValue) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options);
}

export const fetchUpcomingMovies = () => {
    return fetch(`${import.meta.env.VITE_APP_BASE_URL}/upcoming?language=en-US&page=1`, options);
}

export const fetchTopRatedMovies = () => {
    return fetch(`${import.meta.env.VITE_APP_BASE_URL}/top_rated?language=en-US&page=1`, options);
}

export const fetchTopRatedSeries = () => {
    return fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, options);
}

export const fetchMovieDetail = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
}

export const fetchTrendingList = () => {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options);
}

export const fetchTrendingSeriesList = () => {
    return fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`, options);
}