import React from 'react'
import Emoji from './Emoji'

export default function About() {

    return <div className = "about-container">
                <h1>About This Website</h1>
                <p>This is a simple website that provides you with a small description about movies.</p>
                <p>You can search for your favorite movie and save it to your own playlist <Emoji symbol="😍" label ="heart eyes" /></p>
                <p>If you want to stay updated and get the latest news of the most popular and top rated movies, then sign up to our newsletter <Emoji symbol="🥳🥳" label="partying face" /></p>
            </div>
    
}
