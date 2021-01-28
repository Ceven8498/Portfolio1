import React from 'react';
import "../../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import MERN from "../../assets/images/MERN-logo.png"

library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub); 

function About(props) {
    return (
        
        <div class="container-fluid about">


            <div class="row overflow-hidden">
            <img src={MERN} alt="Logo" class="MERN align-bottom"/>
                <div class="col-4">
                    <div class="off-white">
                        <div class="text-center justify-center">
                            <div class="name">
                                <h2>Christopher Even</h2>
                            </div>
                            <div class="skills container-fluid">
                                <h3>Full Stack Web Developer</h3>
                                <p>
                                HTML, CSS, Javascript, MongoDB, React,
                                SQL, Node, Express, Python
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div class="row">

                <div class="port">
                    <div class="inner-port">
                        <h2 class="portfolio">
                            Education
            </h2>
                        <p class="portfolio">
                     
                               ITT Tech in San Antonio -- 2006
                               Full Sail University in Orlando -- 2015
                               The University of Texas at Austin Coding Bootcamp -- 2020
              
                            <li>Associates of Science in Computer Aided Drafting and Design</li>
                            <li>Currently Enrolled in UT Austin Coding Bootcamp</li>
                            Skills and Intrests:
                            Building applications,
                            Design,
                            Production,
                            Animation, and
                            Art.
                        </p>
                    <div class="smi">
                        <a href='https://twitter.com/Christo86202181'>
                        <span class="twi">
                        <FontAwesomeIcon icon={['fab', 'twitter']} size='4x' color='white' />
                        </span>
                        </a>
                        <a href='https://www.facebook.com/chris.even.370'>
                        <span class="twi">
                        <FontAwesomeIcon icon={['fab', 'facebook']} size='4x' color='white' />
                        </span>
                        </a>
                        <a href='https://www.linkedin.com/in/christopher-even-90247897/'>
                        <span class="twi">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='4x' color='white' />
                        </span>
                        </a>
                        <a href='https://github.com/Ceven8498'>
                        <span class="twi">
                        <FontAwesomeIcon icon={['fab', 'github']} size='4x' color='white' />
                        </span>
                        </a>
                    </div>
                    </div>

                </div>
            
            </div>
        </div>

    )


}

export default About;