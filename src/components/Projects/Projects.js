import React from 'react';
import './Project.css';
import Navbar from '../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import cv from '../../images/Ruman islam.pdf';
import cover1 from '../../images/Screenshot_2.png';
import cover2 from '../../images/Screenshot_1.png';
import cover3 from '../../images/Screenshot_3.png';
import {
    faGithub,
    faExter
} from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
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
                        <div className="resume">
                            <button className="btn btn-secondary"><FontAwesomeIcon icon={faFile} /> <a style={{ color: 'white', textDecoration: 'none' }} download href={cv}>Download Resume</a></button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3 project">
                        <div style={{ width: '100%' }}>
                            <img className="img-fluid" src={cover1} alt="" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <h5>Medicine Corner</h5>
                            <small>
                                It is a online medicine & treatment store This is a react application with used React Router, firebase based hosting site and Node.js This is a ride share and searching website build by react js including
                            </small>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <a style={{ marginRight: '20px' }} target="_blank" title="go to repository" href="https://github.com/Ruman-Islam/medicine-corner-client"><FontAwesomeIcon icon={faGithub} /> </a>

                            <a target="_blank" title="go to live website" href="https://medicine-corner-824c6.web.app/"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /> </a>
                        </div>
                    </div>
                    <div className="col-md-3 project">
                        <div style={{ width: '100%' }}>
                            <img className="img-fluid" src={cover2} alt="" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <h5>BoiBoiBoi</h5>
                            <small>It is a book shop This is a react application with used React Router, firebase based hosting site and Node.js This is a ride share and searching website build by react js including.</small>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <a style={{ marginRight: '20px' }} target="_blank" title="go to repository" href="https://github.com/Porgramming-Hero-web-course/full-stack-client-Ruman-Islam"><FontAwesomeIcon icon={faGithub} /> </a>

                            <a target="_blank" title="go to live website" href="https://boiboiboi.web.app/"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /> </a>
                        </div>
                    </div>
                    <div className="col-md-3 project">
                        <div style={{ width: '100%' }}>
                            <img className="img-fluid" src={cover3} alt="" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <h5>Rider Mama</h5>
                            <small>This is a single page application with used React Router, firebase based hosting site. This is a ride share and searching website build by react js including.</small>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <a style={{ marginRight: '20px' }} target="_blank" title="go to repository" href="https://github.com/Porgramming-Hero-web-course/react-auth-Ruman-Islam"><FontAwesomeIcon icon={faGithub} /> </a>

                            <a target="_blank" title="go to live website" href="https://rider-mama.web.app/"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /> </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col-md-12">
                        <small>Design & Build by © Ruman Islam</small>
                        <br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;