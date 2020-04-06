import React, { useState } from 'react';

function About(){
    const [catState, setCatState] = useState("human");

    function catSwitch(){
        if(catState === "human"){
            setCatState("cat");
        }else if(catState === "cat"){
            setCatState("human")
        }
    }

    return(
        <main>
            <svg className="rTwo middle" viewBox="0 0 100 86">
                <defs>
                    <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image href="assets/images/drawingcleaned.png" x="0" y="-5" height="100" />
                    </pattern>
                    <pattern id="img2" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image href="assets/images/cats.png" x="0" y="-5" height="100" />
                    </pattern>
                </defs>
                <polygon className="fullHex drawing" id="imgHex" points="25 0, 75 0, 100 43, 75 86, 25 86, 0 43" strokeWidth="0"
                    fill={(catState === "human"? "url(#img1)": "url(#img2)")}></polygon>
            </svg>
            <svg className="halfHex rTwo left" viewBox="0 0 100 43">
                <polygon id="catsTrap" points="0,0 50,0 75,43 25,43" fill="#4ba2b2"></polygon>
                <polygon id="catsTri" points="50,0 100,0 75,43" fill="#80beca"></polygon>
                <image id="catIcon" width="20" x="65" y="6" href="assets/images/cat.svg"></image>
                <a onClick={() => catSwitch()} id="catsLink"><text x="22" y="18" className="myCats my" fill={(catState === "cat" ? "#6eb5c2":"#fbf8e5")}>my</text>
                    <text x="29" y="33" className="myCats cats" fill={(catState === "cat" ? "#6eb5c2":"#fbf8e5")}>cats</text></a>
                
            </svg>

            <svg className="halfHex rTwo right" viewBox="0 0 100 43">
                <polygon points="50,0 100,0 75,43 25,43" fill="#4ba2b2"></polygon>
                <polygon points="0,0 50,0 25,43" fill="#80beca"></polygon>
                <image width="20" x="15" y="6" href="assets/images/heart.svg"></image>
                <a href="https://lowkey.fun/vigil-files/"><text x="46" y="18" className="faves">Vigil Files</text></a>
                <a href="https://www.htmhell.dev/"><text x="38" y="33" className="faves">HTML Hell</text></a>
            </svg>

            <svg className="fullHex rThree left" viewBox="0 0 100 86">
                <polygon className="shape" points="25 0, 75 0, 100 43, 75 86, 25 86, 0 43" strokeWidth="0" fill="#fbf8e5">
                </polygon>

            </svg>

            <div className="ptext">
                <div className="shape shapeLeft"></div>
                <div className="shape shapeRight"></div>
                <p>
                    Nellie graduated from the University of Arizona with a B.A. in Psychology and a Minor in Mathematics
                    and Technology. She advises the UA Mock Trial team on expert witness testimony, funny accents, and
                    crying.
                </p>
            </div>

            <svg className="fullHex rThree right" viewBox="0 0 100 86">
                <polygon points="25 0, 75 0, 100 43, 75 86, 25 86, 0 43" strokeWidth="0" fill="#fbf8e5"></polygon>
                <text x="-31" y="34" transform="rotate(300)" className="
                skills">SKILLS</text>
                <text x="38" y="20" className="skill">React</text>
                <text x="35" y="33" className="skill">NodeJS</text>
                <text x="33" y="46" className="skill">Express</text>
                <text x="30" y="59" className="skill">MongoDB</text>
                <text x="40" y="72" className="skill">Sass</text>
            </svg>

            <footer>
                <svg viewBox="0 0 100 43">
                    <a href="https://www.linkedin.com/in/nellie-nelson/">
                        <polygon points="0 43, 25 0, 50 43" strokeWidth="0" fill="#4ba2b2">
                        </polygon>
                        <image width="18" x="16.5" y="19" href="assets/images/linkedinLight.svg"></image>
                    </a>

                    <a href="https://github.com/fabybacenelson">
                        <polygon points="25 0, 50 43, 75 0" strokeWidth="0" fill="#fbf8e5"></polygon>
                        <image width="25" x="38.5" y="3" href="assets/images/githubBlue.svg"></image>
                    </a>

                    <a href="mailto:NaN@nellienelson.com">
                        <polygon points="50 43, 75 0, 100 43" strokeWidth="0" fill="#4ba2b2"></polygon>
                        <text x="64" y="34.5" className="footText">@</text>
                    </a>
                </svg>
            </footer>
        </main>
    )
}

export default About;