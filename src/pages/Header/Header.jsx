import React from "react";
import "./header.css";
import SearchBar from "../../components/SearchBar";
import Hamburger from "../../components/hamburger/Hamburger";
import { Link } from "react-router-dom";
// import Nav from "../../components/navigation/Nav";

function Header() {
    return(
        <header className="position: fixed z-50 w-full left-0 top-0 py-0 md:py-5 header-main">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link to={'/'}><h1 className="logo-name text-4xl text-white">Movie<span className="text-primary-color">flix</span></h1></Link>
                    <div className="flex items-center">
                        <SearchBar />
                        <Hamburger />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;