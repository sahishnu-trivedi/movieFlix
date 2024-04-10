import React from "react";
import "./navlistItem.css"
import { NAV_LINKS } from "../../constants/constants";
import NavItem from "./NavItem";

function Nav() {
    return(
        <div>
            <ul className="nav">
                {NAV_LINKS.map(link => (
                    <NavItem key={link.id} label={link.label} path={link.path}/>
                ))}
            </ul>
        </div>
    )
}

export default Nav;