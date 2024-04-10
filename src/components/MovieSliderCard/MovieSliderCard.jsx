import React, { useContext, useEffect, useRef } from 'react'
import Buttons from '../Buttons'
import { GlobalContext } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom';

function MovieSliderCard({ sliderCard }) {
    const cardRef = useRef(null);
    const {addMovieToFavourites, removeMovieFromFavourites, favourites} = useContext(GlobalContext);
    const createMovieSlug = (movie) => {
      if(movie && movie.title && movie.title.includes(' ')){
        movie.title.replaceAll(' ', '-').toLowerCase()
      }
      else{
        return movie.title
      }
    }

    const addedMovieId = favourites.filter(movie => (movie.id == sliderCard.id))

    const isMovieFavourite = addedMovieId.length > 0 ? addedMovieId[0].addedToFavourites : false;

    const ratingDigit = Math.round(sliderCard.vote_average);

    const onMouseMove = (e) => {
      e.stopPropagation();
      var {offsetX: cursorX, offsetY: cursorY} = e,
      {offsetWidth: width, offsetHeight: height} = cardRef.current;
      console.log(cursorY)
  
  
      let amount = 15;
      let rotateX = -(width / 2 - cursorX) / amount;
      let rotateY = (height / 2 - cursorY) / amount;
      cardRef.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  
      // if(e.type == 'mouseleave') screen.style.transform = '';
    }

    useEffect(() => {
      if(cardRef.current) {
        cardRef.current.addEventListener('mousemove',(e) =>  onMouseMove(e), );
      }

      return () => {
      if(cardRef.current) {
        cardRef.current.removeEventListener('mousemove', null);
      }}
    }, []); 

  return (
    <div>
      <Link to={{
        pathname: `/moviedetail/${createMovieSlug(sliderCard)}`,
        search: `id=${sliderCard.id}`,
      }}>
      <div key={sliderCard.id}>
        <img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale'  ref={cardRef} style={{perspective: '300px', transformStyle: 'preserve-3d', transition: '1.5s cubic-bezier(0.2, 1, 0.8, 1)'}} src={`https://image.tmdb.org/t/p/w500/${sliderCard.poster_path}`} alt={sliderCard.original_title} />
        <div className='flex items-center rating-block star-icon mt-1'>
          <ion-icon name="star-outline"></ion-icon>
          <p className='mb-0 font-normal text-sm text-gray'> {ratingDigit}/10</p>
        </div>
        <h4 className='text-md font-semibold uppercase mt-1 text-primary-color'>{sliderCard.title}</h4>
        <p className='mb-0 text-sm text-tertiary-color overflow-hidden text-ellipses-multiline mt-1'>{sliderCard.overview}</p>
      </div>
      </Link>
        <div className='mt-3'>
          {
            isMovieFavourite ? 
            <Buttons applyClass='red-btn' name='Remove' onClick={() => removeMovieFromFavourites(sliderCard)} /> :
            <Buttons applyClass='red-btn' name='Add to Favourites' onClick={() => addMovieToFavourites(sliderCard)}/>
          }
        </div>
    </div>
  );
}

export default MovieSliderCard;