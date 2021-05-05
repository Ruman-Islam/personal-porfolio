import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faAddressBook, faBlog, faFile } from '@fortawesome/free-solid-svg-icons';
import img2 from '../../../images/55556.jpg';
import cv from '../../../images/Ruman islam.pdf';
import {
    faFacebookF,
    faTwitter,
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    return (
        <div class="main-container">
            <div class="about-container">
                <div class="profile-img">
                    <img class="img about-container" src={img2} alt="" />
                </div>
                <div class="about">
                    <h2>Ruman Islam</h2>
                    <p>Hi, my name is Ruman Islam and I'm a front end web developer. Welcome to my personal website!</p>
                    <hr />
                </div>
            </div>
            <div class="icons">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/zayedkhan.ruman"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a target="_blank" rel="noreferrer" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ruman-islam-6a567016a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Ruman-Islam"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light container">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0 d-block">
                                <li class="nav-item">
                                    <Link className="ms-3 nav-link" aria-current="page" to="/">
                                        <FontAwesomeIcon icon={faHome} /> Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="ms-3 nav-link" to="/project">
                                        <FontAwesomeIcon icon={faCode} /> Projects
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="ms-3 nav-link" to="/contact">
                                        <FontAwesomeIcon icon={faAddressBook} /> Contact
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="ms-3 nav-link" to="/blog">
                                        <FontAwesomeIcon icon={faBlog} /> Blog
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="text-center">
                <small>+8801536160661</small><br/>
                <small>+8801998563637</small>
            </div>
        </div>
    );
};

export default Navbar;