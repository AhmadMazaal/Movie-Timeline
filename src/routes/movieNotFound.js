import * as React from 'react';
import "../App.css"
import { FaRegSadCry } from "react-icons/fa";
export default function MovieNotFound(){
    return(
        <div>
            <h1 className="fail-response">Movie not found! <FaRegSadCry size="2.5rem"  style={{marginLeft:"1rem"}}  /></h1>
            <h1 className="fail-response">Please enter another movie name.</h1>
            <a href="/" className="entity-link"><span className="entity-icon">&laquo;</span>Back to homepage</a>
        </div>
    )
}