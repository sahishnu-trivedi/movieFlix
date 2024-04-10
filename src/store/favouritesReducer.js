const ADD_ALL_MOVIES = 'addAllMovies';
const ADD_MOVIES_TO_FAVOURITES = 'addMoviesToFavourites';
const REMOVE_MOVIES_FROM_FAVOURITES = 'removeMovieFromFavourites'

const favouritesreducer = (state, action) => {
    switch(action.type){
        case 'ADD_ALL_MOVIES': 
            return{
                ...state,
                allMovies: action.payload
            };
        case 'ADD_MOVIES_TO_FAVOURITES': 
            action.payload.addedToFavourites = true;
            return{
                ...state,
                favourites: [action.payload, ...state.favourites]
            };
        case 'REMOVE_MOVIES_FROM_FAVOURITES': 
            action.payload.addedToFavourites = false;
            return{
                ...state,
                favourites: [...state.favourites.filter((movie) => movie.id !== action.payload.id)]
            };
        default:
            return state;
    }
}

export default favouritesreducer