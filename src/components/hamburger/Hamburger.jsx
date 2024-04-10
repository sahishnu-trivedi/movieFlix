import React, { useContext, useState } from 'react'
import { GlobalContext, GlobalContextProvider } from '../context/GlobalContextProvider'

function Hamburger() {
    // const [menuDisplay, setMenuDisplay] = useState(false);
    // const [hamburgerMenu, setHamburgerMenu] = useState()
    const {clicked, setClicked, openMenu, setOpenMenu} = useContext(GlobalContext);

    const toggleHamurgerMenu = () => {
        setClicked(!clicked);
        setOpenMenu(!openMenu)
    }
  return (
    <div className={`hamburger ${clicked ? 'isActive' : ''}`} id="hamburger-6" onClick={toggleHamurgerMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>
  )
}

export default Hamburger