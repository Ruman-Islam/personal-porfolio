import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../../images/55556.jpg';
import js from '../../images/javascript-542e10ea6e.png';
import react from '../../images/1200px-React-icon.svg.png';
import node from '../../images/nodejs-45adbe594d.png';
import html from '../../images/1200px-HTML5_logo_and_wordmark.svg.png';
import css from '../../images/CSS3_logo_and_wordmark.svg.png';
import tool from '../../images/147-512.png';
import cv from '../../images/Ruman islam.pdf';

const Home = () => {
    return (
        <main className="row project-container">
            <div className="col-md-3">
                <Navbar />
            </div>
            <div className="col-md-9 project-container">
                <div className="row mt-5">
                    <div className="col-md-6 about">
                        <h1>Ruman Islam</h1>
                        <h5>Front-end Web Developer</h5>
                        <p style={{ color: 'silver' }}>A self-motivated, ambitious and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, and front-end web development with modern web tech like React.js. To work in Software industry with modern web technologies of different local and multinational Software/IT agency of Bangladesh and grow rapidly with increasing skills and responsibilities. Check out my project portfolio and online resume.</p>
                        <div className="resume">
                            <button className="btn btn-secondary"><FontAwesomeIcon icon={faFile} /> <a style={{ textDecoration: 'none', color: 'white' }} download href={cv}>Download Resume</a></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img width="300px" src={profilePic} alt="" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <h1>What I Do</h1>
                        <p>I’m a Web Developer and Programmer with highly interest in JavaScrips and Modern web tech like React.js. I have experience in web development using JavaScript. Also I’m familiar with MERN Stack Web Development. I’m passionate to make a clean, beautiful, professional, responsive Web site and maximum optimized way so that it performs well. As a programmer, I love taking challenges and love being part of the solution. My hobby is keeping myself updated with all latest technologies and tools. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 language">
                        <img width="100px" src={js} alt="" />
                        <h3>Vanilla JavaScripts</h3>
                        <p>- ES5</p>
                        <p>- ES6/ES6+</p>
                        <p>- DOM</p>
                        <p>- TypeScript</p>
                    </div>
                    <div className="col-md-3 language">
                        <img width="100px" src={react} alt="" />
                        <h3>React JS</h3>
                        <p>- Hooks</p>
                        <p>- Context API</p>
                        <p>- React Router</p>
                        <p>- Redux JS</p>
                    </div>
                    <div className="col-md-3 language">
                        <img width="100px" src={node} alt="" />
                        <h3>Back-end (Basic)</h3>
                        <p>- Node JS</p>
                        <p>- Express JS</p>
                        <p>- MongoDB</p>
                        <p>- REST API</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 language">
                        <div style={{ padding: '20px' }}>
                            <img width="50px" src={html} alt="" />
                        </div>
                        <h3>HTML</h3>
                        <p>- HTML5</p>
                        <p>- Semantic HTML</p>
                        <p>- JSX</p>
                    </div>
                    <div className="col-md-3 language">
                        <div style={{ padding: '20px' }}>
                            <img width="50px" src={css} alt="" />
                        </div>
                        <h3>CSS</h3>
                        <p>- CSS3</p>
                        <p>- Bootstrap</p>
                        <p>- SASS</p>
                        <p>- MaterialUI</p>
                    </div>
                    <div className="col-md-3 language">
                        <div style={{ padding: '20px' }}>
                            <img width="50px" src={tool} alt="" />
                        </div>
                        <h3>Others (Tools)</h3>
                        <p>- Git and Github</p>
                        <p>- VS Code</p>
                        <p>- NPM</p>
                        <p>- Yarn</p>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Home;