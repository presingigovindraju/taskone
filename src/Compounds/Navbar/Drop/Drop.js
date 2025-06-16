import React from "react";
import "./Drop.css"


const Drop=({hide})=>{


    return (
        <div className={`dropMe ${hide?"":"dropshoweme"}`}>
            <p className="matter">US EN</p>
            <p className="matter">Canada - English</p>
            <p className="matter">Canada - French</p>
            <p className="matter">UK - English</p>
            <p className="matter">Germany - Deutsch</p>
            <p className="matter">France - French</p>
            <p className="matter">Drive DeVilbiss International</p>
            <p className="matter">Specialised Orthotic Services - UK</p>
        </div>
    )
}

export default Drop