import { useEffect, useState } from "react"
import { fetchTrendingList, fetchTrendingSeriesList } from "../../helpers/fetchData";
import MovieSliderCard from "../../components/MovieSliderCard/MovieSliderCard";

export default function Trending () {
    const [trendingList, setTrendingList] = useState([]);
    const [trendingSeriesList, setTrendingSeriesList] = useState([]);

    const fetchTrendingData = async () => {
        fetchTrendingList().then(res => res.json())
        .then(data => setTrendingList(data.results))
        .catch(err => console.log(err));
    }

    const fetchTrendingSeriesData = async () => {
        fetchTrendingSeriesList().then(res => res.json())
        .then(data => setTrendingSeriesList(data.results))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchTrendingData();
        fetchTrendingSeriesData()
        console.log('trendingList ', trendingList)
    }, [])
    return(
        <div className='pb-4 mt-20'>
            <div className="trending-banner relative overflow-hidden bg-gray-900 py-24 sm:py-24 banner-overlay text-center">
                <h3 className='mb-4 text-6xl font-bold text-primary-color relative z-40'>Trending Now</h3>
            </div>
            <div className="container mx-auto">
                <h3 className='my-4 text-3xl font-bold text-primary-color relative'>Trending Movies</h3>
                <div className="grid grid-cols-5 gap-5">
                    {trendingList.length > 0 && 
                        trendingList.slice(0, 10).map((trendingMovieCard) => (
                            <MovieSliderCard sliderCard={trendingMovieCard} />
                        ))
                    }
                </div>

                <h3 className='mb-4 mt-12 pt-8 text-3xl font-bold text-primary-color relative z-50 trending-series-title'>Trending Series</h3>
                <div className="grid grid-cols-5 gap-5">
                    {trendingSeriesList.length > 0 && 
                        trendingSeriesList.slice(0, 10).map((trendingSeriesList) => (
                            <MovieSliderCard sliderCard={trendingSeriesList} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}