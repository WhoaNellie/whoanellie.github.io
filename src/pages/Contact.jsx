import React from 'react';

function Contact(){
    return(
        <main>
            <svg className="mobileHide top right" viewBox="0 0 100 43">
                <polygon points="0,0 100,0 75,43 25,43" strokeWidth="0" fill="#80beca"></polygon>
            </svg>
            <svg className="mobileHide rTwo left" viewBox="0 0 100 43">
                <polygon points="0,0 50,0 25,43" strokeWidth="0" fill="#80beca"></polygon>
            </svg>
            <svg className="mobileHide crTwo right" viewBox="0 0 100 43">
                <polygon points="0,0 50,0 25,43" strokeWidth="0" fill="#80beca"></polygon>
            </svg>
            <svg className="mobileHide rThree left" viewBox="0 0 100 43">
                <polygon points="0,43 25,0 50,43" strokeWidth="0" fill="#80beca"></polygon>
            </svg>
            <svg className="mobileHide crThree right" viewBox="0 0 100 43">
                <polygon points="0,43 25,0 50,43" strokeWidth="0" fill="#80beca"></polygon>
            </svg>
            <svg className="mobileHide bottom left" viewBox="0 0 100 43">
                <polygon points="0,0 100,0 75,43 25,43" strokeWidth="0" fill="#80beca"></polygon>
            </svg>
            <svg className="mobileHide bottom right" viewBox="0 0 100 43">
                <polygon points="0,0 100,0 75,43 25,43" strokeWidth="0" fill="#80beca"></polygon>
            </svg>
            <svg className="content email" viewBox="0 0 100 43">

                <polygon className="shape eHover" points="25,0 75,0 50,43 0,43" strokeWidth="0" fill="#fbf8e5"></polygon>

                <a href="mailto:NaN@nellienelson.com">
                    <text x="71" y="34.5" className="footText eHover">@</text>
                </a>
                <text x="27" y="18" className="info email">email</text>
                <a href="mailto:NaN@nellienelson.com">
                    <text x="12" y="29" className="info address">NaN@nellienelson.com</text>
                </a>
            </svg>

            <svg className="content resume" viewBox="0 0 100 43">
                <polygon className="shape" points="25,43 50,0 100,0 75,43" strokeWidth="0" fill="#fbf8e5"></polygon>

                <text x="48" y="17" className="info resume">resume</text>
                <a href="./assets/files/resume.pdf" download="NelsonResume">
                    <image width="18" x="10" y="9" href="assets/images/download.svg"></image>
                    <text x="39" y="30" className="info download">download</text>
                </a>

            </svg>

            <svg className="content github" viewBox="0 0 100 43">
                <polygon className="shape" points="25,0 75,0 100,43 50,43" strokeWidth="0" fill="#fbf8e5"></polygon>

                <a href="https://github.com/WhoaNellie">
                    <image width="24" x="9" y="16" href="assets/images/githubLight.svg"></image>
                </a>
                <text x="40" y="18" className="info github">github</text>
                <a href="https://github.com/WhoaNellie">
                    <text x="48" y="29" className="info username">WhoaNellie</text>
                </a>

            </svg>

            <svg className="content linkedin" viewBox="0 0 100 43">
                <polygon className="shape" points="0,0 50,0 75,43 25,43" strokeWidth="0" fill="#fbf8e5"></polygon>

                <a href="https://www.linkedin.com/in/nellie-nelson/">
                    <image width="18" x="73" y="9" href="assets/images/linkedinLight.svg"></image>
                </a>
                <a href="https://www.linkedin.com/in/nellie-nelson/">
                    <text x="16.5" y="24" className="info linkedin">linkedin</text>
                </a>

            </svg>
        </main>
    )
}

export default Contact;
