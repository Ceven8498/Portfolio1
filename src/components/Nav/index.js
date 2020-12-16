import React from 'react';
import "../../index.css";

function Nav(props) {
    return (
        <div class="col align-bottom">

            <div class="grey">
                <nav class="navbar justify-content-end">
                    <a class="navbar-text" href="#portfolio">
                        Portfolio
            </a>
                    <a class="navbar-text" href="https://mail.google.com/mail/?view=cm&fs=1&to=ceven8498@gmail.com">
                        About
            </a>
                    <a class="navbar-text" href="./assets/pdf/resume.pdf" target="_blank">
                        Resume
            </a>
                    <a class="navbar-text" href="https://mail.google.com/mail/?view=cm&fs=1&to=ceven8498@gmail.com">
                        Contact
            </a>
                </nav>

            </div>
        </div>

    );
}

export default Nav;