import { useContext } from "react";
import { GlobalContext } from "../../components/context/GlobalContextProvider";
import Buttons from "../../components/Buttons";

export default function Favourites () {
    const {favourites, removeMovieFromFavourites} = useContext(GlobalContext);
    console.log(favourites)

    return(
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary-color mt-24">Favourites</h2>
            <div className="mt-5 grid grid-cols-6 gap-4">
                {favourites && favourites.length > 0 &&
                favourites.map(movie => 
                    <div key={movie.id}>
                        <div className="overflow-hidden rounded-lg bg-gray-100">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title}`} className="object-cover object-center w-full h-full" />
                        </div>
                        <div className='flex items-center rating-block star-icon mt-1'>
                            <ion-icon name="star-outline"></ion-icon>
                            <p className='mb-0 font-normal text-sm text-gray'> {movie.ratingDigit}/10</p>
                        </div>
                        <h4 className='text-md font-semibold uppercase mt-1 text-primary-color'>{movie.title}</h4>
                        <p className='mb-0 text-sm text-tertiary-color overflow-hidden text-ellipses-multiline mt-1'>{movie.overview}</p>
                        <Buttons applyClass='red-btn mt-3' name='Remove' onClick={() => removeMovieFromFavourites(movie)} />
                    </div>
                )}
            </div>
            {favourites.length <= 0 && 
            <div>
                <h2 className="text-4xl font-bold tracking-tight text-tertiary-color mt-5">Add Movies to Favourites</h2>
            </div>
            }
        </div>
    )
}