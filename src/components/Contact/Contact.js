import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import ContactForm from './ContactForm';

const Contact = () => {
    
    return (
        <main className="row project-container">
            <div className="col-md-3">
                <Navbar />
            </div>
            <div className="col-md-9 project-container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Portfolio</h1>
                        <small>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</small>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
};

export default Contact;