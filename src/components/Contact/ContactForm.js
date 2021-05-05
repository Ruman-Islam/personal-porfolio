import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    // function sendEmail(e) {
    //     e.preventDefault();

    //     emailjs.sendForm('gmail', 'service_w1x8b1e', e.target, 'user_JppvaIi3EpQrAuh0s0EIM')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset()
    // }
    return (
        <div className="container">
            <div className="form-container">
                <h4 className="text-center">Connect With Me</h4>
                <form action="https://formspree.io/f/mdoyaywr" method="POST">
                    <label>Name</label>
                    <input className="form-control" placeholder="Name" type="text" name="name" /><br />
                    <label>Email</label>
                    <input className="form-control" placeholder="Email" type="email" name="email" /><br />
                    <label>Message</label>
                    <textarea className="form-control" placeholder="Your message" name="message" /><br />
                    <div className="d-flex justify-content-around">
                        <small>Send Email <a href="">rumanislam48@gmail.com</a></small>
                        <input className="btn btn-primary" type="submit" value="Send" />
                    </div>
                </form>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-md-12">
                    <small>Design & Build by © Ruman Islam</small>
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;