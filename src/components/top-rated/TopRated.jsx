import { useEffect, useState } from "react"
import { fetchTopRatedMovies, fetchTopRatedSeries } from "../../helpers/fetchData";

export default function TopRated() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedSeries, setTopRatedSeries] = useState([]);

    const fetchTopRatedMovieResult = async () => {
        return await fetchTopRatedMovies().then(res => res.json())
        .then(data => setTopRatedMovies(data.results))
        .catch(err => console.log(err));
    }

    const fetchTopRatedSeriesResult = async () => {
        return await fetchTopRatedSeries().then(res => res.json())
        .then(data => setTopRatedSeries(data.results))
        .catch(err => console.log(err));
    }

    useEffect (() => {
        fetchTopRatedMovieResult();
        fetchTopRatedSeriesResult();
        console.log(topRatedSeries);
    }, [])

    return(
        <div className="container mx-auto mt-12">
            <div className="columns-2">
                <div className="top-rated-movie-block">
                    <h3 className='text-3xl font-bold text-primary-color'>Top Rated Movies</h3>
                    {
                        topRatedMovies.slice(0, 10).map((movie, index) =>
                            <div key={movie.id} className="py-3 top-rated-movie-list">
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-between items-center star-icon">
                                        <p className="text-gray text-sm mr-2 top-rated-index text-tertiary-color">{index+1}</p>
                                        <h5 className="mb-0 text-tertiary-color">{movie.original_title}</h5>
                                    </div>
                                    <p className="mb-0 flex justify-between items-center star-icon text-tertiary-color">
                                        <ion-icon name="star-outline"></ion-icon>
                                        {(movie.vote_average).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <h3 className='text-3xl font-bold dark:text-white text-primary-color'>Top Rated Series</h3>
                    {
                        topRatedSeries.slice(0, 10).map((series, index) =>
                            <div key={series.id} className="py-3 top-rated-movie-list">
                                <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center star-icon">
                                    <p className="text-gray text-sm mr-2 top-rated-index text-tertiary-color">{index+1}</p>
                                    <h5 className="mb-0 text-tertiary-color">{series.name}</h5>
                                </div>
                                    <p className="mb-0 flex justify-between items-center star-icon text-tertiary-color">
                                        <ion-icon name="star-outline"></ion-icon>
                                        {(series.vote_average).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}