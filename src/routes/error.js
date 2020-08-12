import * as React from 'react';
import "../App.css"

export default function Error(){
    return(
        <div>
            <h1 className="fail-response">Something went wrong!</h1>
            <h1 className="fail-response">Please check your internet connection and try again later.</h1>
            <a href="/" className="entity-link"><span className="entity-icon">&laquo;</span>Back to homepage</a>
        </div>
    )
}