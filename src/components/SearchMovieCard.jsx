import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContextProvider";

export default function SearchMovieCard ({ movieList }) {
    const {setOpenSearchbar} = useContext(GlobalContext)

    const createMovieSlug = (movie) => {
        if(movie && movie.title && movie.title.includes(' ')){
          movie.title.replaceAll(' ', '-').toLowerCase()
        }
        else{
          return movie.title
        }
      }
    return (
        <div className="absolute z-10 movie-search-card px-4 bg-white shadow">
            {movieList && movieList.length > 0 && 
                movieList.map((movieListResult) => (
                    <Link key={movieListResult.id} onClick={() => setOpenSearchbar(false)} to={{
                        pathname: `/moviedetail/${createMovieSlug(movieListResult)}`,
                        search: `id=${movieListResult.id}`,
                      }}>
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full mt-2">
                            <img className="object-cover h-20 w-30 rounded-t-lg md:h-20 md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/original/${movieListResult.poster_path}`} alt={`${movieListResult.title}`} />
                            <div className="flex flex-col items-start justify-between p-1 ml-2 leading-normal">
                                <h5 className="mb-1 text-l font-bold tracking-tight text-gray-900 dark:text-white">{movieListResult.title}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Release Date: {movieListResult.release_date}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}