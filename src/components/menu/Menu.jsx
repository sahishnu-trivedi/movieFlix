import React, { useContext } from 'react'
import Nav from '../navigation/Nav'
import { GlobalContext } from '../context/GlobalContextProvider'

function Menu() {
    const {openMenu} = useContext(GlobalContext);

  return (
    <div className= {`menu-block flex justify-center items-center text-center ${openMenu ? `active` : ''}`}>
        {/* <a href="#" className="hamburger-menu absolute top-10 right-10 text-4xl font-semibold" onClick={toggleHamurgerMenu}>x</a> */}
        <Nav />
    </div>
  )
}

export default Menu