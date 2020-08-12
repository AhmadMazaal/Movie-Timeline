import * as React from 'react';
import "../App.css"
import axios from 'axios';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";




// import sendSubscriptionEmail from '../emails/subscribe';



export default function Footer(props){
    
    const [emailAdress, setEmailAdress] = React.useState('');

    const subscribe = e =>{
    e.preventDefault();
    const email = emailAdress
    console.log("from client...")
    axios.post('/subscription',{email})
    .then(res => {
        console.log(res.data)

    })
    .catch(err => {
        console.error(err)
    });
}

    return(
        <div className="footer-container" >
            <div className="footer-links">
                <a className="footer-link" href="/">Contact Us</a>
                <a className="footer-link" href="/Feedback">Give Us Your Feedback</a>
                <small>Copyright © 2020 Ahmad Mazaal. All Rights Reserved</small>
            </div>

            <div className="footer-icons">
                <a href="/" ><FaInstagram color="white" size="4rem"/></a>
                <a href="/" ><FaFacebookF color="white" size="4rem"/></a>
                <a href="/" ><FaGoogle    color="white" size="4rem"/></a>
            </div>
            {/* onSubmit={subscribe} */}
            <form onSubmit={subscribe}  >
                <div className="footer-form">
                    <label htmlFor="email" >Sign Up For Our Newsletter</label>
                    <input type="text" name="email" id="email"  placeholder="Your email address..." onChange = {(e)=> setEmailAdress(e.target.value)} />
                </div>
                <button type="submit" className="button">Subscribe</button>
            </form>
        </div>
    )
}