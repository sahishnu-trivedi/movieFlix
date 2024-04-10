import React, { useState } from "react";
import SearchMovieCard from "./SearchMovieCard";
import { fetchSearchedMovies } from "../helpers/fetchData";

function SearchBar(){
    const [searchMovie, setSearchMovie] = useState('');
    const [searchMovieResult, setSearchMovieResult] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleChange = async (e) => {
        setSearchMovie(e.target.value)

        await fetchSearchedMovies(e.target.value).then(res => res.json())
        .then(data => setSearchMovieResult(data.results))
        .catch(err => console.log(err));
    }

    const closeModal = () => {
      setShowModal(false);
      setSearchMovie('');
    }

    return(
      <div className="relative flex mr-3" data-headlessui-state="open">
        <button className="mr-3 ease-linear transition-all duration-150 search-icon" type="button" onClick={() => setShowModal(true)}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" fill="primary-color" clipRule="evenodd" d="M15.9503 11.202C15.9503 14.0814 13.6161 16.4157 10.7366 16.4157C7.8572 16.4157 5.52295 14.0814 5.52295 11.202C5.52295 8.32253 7.8572 5.98828 10.7366 5.98828C13.6161 5.98828 15.9503 8.32253 15.9503 11.202ZM15.8287 20.0578C14.3298 20.9215 12.5909 21.4157 10.7366 21.4157C5.09577 21.4157 0.522949 16.8428 0.522949 11.202C0.522949 5.56111 5.09577 0.988281 10.7366 0.988281C16.3775 0.988281 20.9503 5.56111 20.9503 11.202C20.9503 13.1752 20.3908 15.0178 19.4216 16.5796L27.2948 24.4527L23.7592 27.9883L15.8287 20.0578Z" fill="#66FCF1"/>
        </svg>

        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="opacity-60 fixed inset-0 z-40 bg-black" onClick={closeModal}></div>
              <div className="relative w-1/2 z-40">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative py-16 px-6 flex-auto">
                    <input className="block w-full appearance-none bg-transparent p-2 text-slate-900 placeholder:text-slate-600 focus:outline-none text-3xl font-semibold border-b border-btm-gray" placeholder="Search Movie Here..."  value={searchMovie} onChange={handleChange} />
                    {searchMovie && searchMovie.length > 0 &&
                      <SearchMovieCard movieList={searchMovieResult} />
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
}

export default SearchBar;