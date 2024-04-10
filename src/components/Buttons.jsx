import React from "react";

function Buttons({ name, applyClass, ...restProps }) {
    return (
        // <button className= {`p-2 mr-2 rounded ${applyClass}`}  style={{background: bkgColor, color: color}} {...restProps}>{name}</button>
        <button className= {`p-2 mr-2 rounded ${applyClass}`} {...restProps}>{name}</button>
    );
}

export default Buttons;