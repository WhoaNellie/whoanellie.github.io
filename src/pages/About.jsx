import React, { useState } from 'react';

function About(){
    const [catState, setCatState] = useState("human");

    const [screenSize, setScreenSize] = useState((window.innerWidth<=550 ? "small":"big"));

    window.addEventListener('resize', () => {
        if((screenSize === "small" && window.innerWidth > 550)||(screenSize === "big" && window.innerWidth <= 550)){
            setScreenSize((window.innerWidth <= 550 ? "small":"big"));
        }
    });

    function catSwitch(){
        if(catState === "human"){
            setCatState("cat");
        }else if(catState === "cat"){
            setCatState("human")
        }
    }

    return (
      <main>
        <svg className="rTwo middle" viewBox="0 0 100 86">
          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image
                href="assets/images/drawingcleaned.png"
                x="0"
                y="-5"
                height="100"
              />
            </pattern>
            <pattern
              id="img2"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image href="assets/images/cats.png" x="0" y="-5" height="100" />
            </pattern>
          </defs>
          <polygon
            className="fullHex drawing"
            id="imgHex"
            points="25 0, 75 0, 100 43, 75 86, 25 86, 0 43"
            strokeWidth="0"
            fill={catState === "human" ? "url(#img1)" : "url(#img2)"}
          ></polygon>
        </svg>
        <svg className="halfHex rTwo left" viewBox="0 0 100 43">
          <polygon
            id="catsTrap"
            points={
              screenSize === "big"
                ? "0,0 50,0 75,43 25,43"
                : "25,0 75,0 100,43 50,43"
            }
            fill="#4ba2b2"
          ></polygon>
          <polygon
            id="catsTri"
            points={
              screenSize === "big" ? "50,0 100,0 75,43" : "0,43 25,0 50,43"
            }
            fill="#80beca"
          ></polygon>
          <image
            id="catIcon"
            width="20"
            x={screenSize === "big" ? "65" : "15"}
            y={screenSize === "big" ? "6" : "19"}
            href="assets/images/cat.svg"
          ></image>
          <a onClick={() => catSwitch()} id="catsLink">
            <text
              x={screenSize === "big" ? "22" : "43"}
              y="18"
              className="myCats my"
              fill={catState === "cat" ? "#6eb5c2" : "#fbf8e5"}
            >
              my
            </text>
            <text
              x={screenSize === "big" ? "29" : "51"}
              y="33"
              className="myCats cats"
              fill={catState === "cat" ? "#6eb5c2" : "#fbf8e5"}
            >
              cats
            </text>
          </a>
        </svg>

        <svg className="halfHex rTwo right" viewBox="0 0 100 43">
          <polygon points="50,0 100,0 75,43 25,43" fill="#4ba2b2"></polygon>
          <polygon points="0,0 50,0 25,43" fill="#80beca"></polygon>
          <image width="20" x="15" y="6" href="assets/images/heart.svg"></image>
          <a href="https://lowkey.fun/vigil-files/">
            <text x="46" y="18" className="faves">
              Vigil Files
            </text>
          </a>
          <a href="https://www.htmhell.dev/">
            <text x="38" y="33" className="faves">
              HTML Hell
            </text>
          </a>
        </svg>

        <svg className="fullHex rThree left" viewBox="0 0 100 86">
          <polygon
            className="shape"
            points="25 0, 75 0, 100 43, 75 86, 25 86, 0 43"
            strokeWidth="0"
            fill="#fbf8e5"
          ></polygon>
        </svg>

        <div className="ptext">
          <div className="shape shapeLeft"></div>
          <div className="shape shapeRight"></div>
          <p>
            <br></br>
            Nellie graduated from the University of Arizona with a B.A. in
            Psychology and a Minor in Mathematics and Technology. Nellie can
            make wailing, music-like sounds on a musical saw.
          </p>
        </div>

        <svg className="fullHex rThree right" viewBox="0 0 100 86">
          <polygon
            points="25 0, 75 0, 100 43, 75 86, 25 86, 0 43"
            strokeWidth="0"
            fill="#fbf8e5"
          ></polygon>
          <text
            x="-31"
            y="34"
            transform="rotate(300)"
            className="
                skills"
          >
            SKILLS
          </text>
          <text x="38" y="20" className="skill">
            React
          </text>
          <text x="39" y="33" className="skill">
            Node
          </text>
          <text x="29" y="46" className="skill">
            TypeScript
          </text>
          <text x="43" y="59" className="skill">
            Git
          </text>
          <text x="40" y="72" className="skill">
            Sass
          </text>
        </svg>
      </main>
    );
}

export default About;