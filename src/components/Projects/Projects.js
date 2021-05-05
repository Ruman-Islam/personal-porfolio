import React from 'react';
import './Project.css';
import Navbar from '../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import cv from '../../images/Ruman islam.pdf';
import cover1 from '../../images/Screenshot_2.png';
import cover2 from '../../images/Screenshot_1.png';
import cover3 from '../../images/Screenshot_3.png';

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
                            <button className="btn btn-secondary"><FontAwesomeIcon icon={faFile} /> <a style={{color: 'white', textDecoration: 'none'}} download href={cv}>Download Resume</a></button>
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
                            <small>It's a single page web application where users can book car repair services with payment. An admin can update order status, add and remove services, and make another person admin.</small>
                        </div>
                    </div>
                    <div className="col-md-3 project">
                        <div style={{ width: '100%' }}>
                            <img className="img-fluid" src={cover2} alt="" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <h5>BoiBoiBoi</h5>
                            <small>It's a single page web application where users can book car repair services with payment. An admin can update order status, add and remove services, and make another person admin.</small>
                        </div>
                    </div>
                    <div className="col-md-3 project">
                        <div style={{ width: '100%' }}>
                            <img className="img-fluid" src={cover3} alt="" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <h5>Rider Mama</h5>
                            <small>It's a single page web application where users can book car repair services with payment. An admin can update order status, add and remove services, and make another person admin.</small>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col-md-12">
                        <small>Design & Build by © Ruman Islam</small>
                        <br/><br/><br/><br/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;