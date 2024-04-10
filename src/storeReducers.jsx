import React, { useContext } from 'react'
import { GlobalContext } from './components/context/GlobalContextProvider';

export const ADDMOVIES = 'addmovies';
export const REMOVEMOVIES = 'removemovies';

export default function storeReducers() {
    const {movies} = useContext(GlobalContext)

    const initialState = {
        favourites: []
    }

    const reducer = (state, action) => {
        switch(action.type){
            case ADDMOVIES: 
                return{
                    ...state,
                    AddTofavourites: {}
                };
            case REMOVEMOVIES: 
                return{
                    ...state,

                };

            default:
                break;
        }
    }
    
  return (
    <div>storeReducers</div>
  )
}