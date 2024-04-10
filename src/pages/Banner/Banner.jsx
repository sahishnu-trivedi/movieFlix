// import Buttons from "../../components/Buttons";

function Banner({ content }) {
    return(
        <div className="relative overflow-hidden bg-gray-900 py-44 sm:py-44 banner-overlay">
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${content.poster_path}`} alt={`${content.title}`} className="absolute inset-0 z-0 h-full w-full object-cover object-top md:object-top"/>
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 banner-text">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary-color">{content.title}</h2>
                        <p className="mt-6 text-lg leading-8 text-gray">{content.overview}</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray">Year Released</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-primary-color">{content.release_date}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray">Popularity</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-primary-color">{content.popularity}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray">Movie Genre</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-primary-color">{content.genre_ids}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray">Movie Category</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-primary-color">{content.genre_ids[1]}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;