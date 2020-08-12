const express = require("express");
const app = express();

const sendGridAPIKey = "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" || process.env.SENDGRID_API_KEY;

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendGridAPIKey);


const sendSubscriptionEmail = email => {
    sgMail.send({
        to:email,
        from: 'movie.timeline.supp@gmail.com',
        subject: 'Movie Timeline Subscription 🎉',
        text: 'Thanks for subscribing to our newsletter!\n you will start recieving emails about latest the movies. '
    })
    .then(() => console.log('Email Sent!'))
    .catch(error => { 
        console.log(error.toString())
    })
}
module.exports =  sendSubscriptionEmail
