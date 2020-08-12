const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = "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" || process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

// const sendSubscriptionEmail = email => {
//     sgMail.send({
//         to:email,
//         from: 'movie.timeline.supp@gmail.com',
//         subject: 'Movie Timeline Subscription 🎉',
//         text: 'Thanks for subscribing to our newsletter!\n you will start recieving emails about the latest movies 🥳. '
//     })
//     .then(() => {
//         console.log('Email Sent!')
//         // window.location = "/Subscribtion";
//     })
//     .catch(error => { 
//         console.error(error.toString())
//     })
// }

// router.post("/",(req, res, next) => {
//     console.log("testing...")
//     sendSubscriptionEmail(req.body.email);
//     res.status(200).json({
//         message:"Subscribed successfully!",
//         emailAddress:req.body.email,
//     })
// })

const sendSubscriptionEmail = email => {
    
}


router.post("/",(req, res, next) => {
    const email = req.body.email;
    if(!email)
        res.redirect('/error');
        return
    
})

module.exports = router;