import React from 'react';

function Projects(){
    return (
      <main>
        <svg className="halfHex rTwo left mobileHide" viewBox="0 0 100 43">
          <polyline points="0 0, 25 43, 75 43, 100 0" fill="#80beca"></polyline>
        </svg>

        <svg className="halfHex rTwo right mobileHide" viewBox="0 0 100 43">
          <polyline points="0 0, 25 43, 75 43, 100 0" fill="#80beca"></polyline>
        </svg>

        <svg className="fullHex center" viewBox="0 0 100 86">
          <g className="projHex">
            <polygon
              className="mobileHide titleHex"
              points="0,43 25,0 75,86 25,86"
              fill="#80beca"
            ></polygon>

            <polygon
              className="shape"
              points="25 0, 50 43, 75 0"
              strokeWidth="0"
              fill="#fbf8e5"
            ></polygon>
            <image
              width="20"
              x="40"
              y="6"
              href="assets/images/rings.svg"
            ></image>
            <text
              x="39"
              y="-6"
              transform="rotate(60)"
              className="projText"
              id="code"
            >
              RINGS
            </text>
            <text
              x="42"
              y="8"
              transform="rotate(60)"
              className="projText"
              id="quiz"
            >
              TRUE
            </text>

            <a
              className="triLink"
              href="https://github.com/WhoaNellie/ringsTrue"
            >
              <polygon
                className="shape"
                points="75 0, 50 43, 100 43"
                strokeWidth="0"
                fill="#4ba2b2"
              ></polygon>
              <text
                x="36.5"
                y="12"
                transform="rotate(60, 50, 43)"
                className="gitlink repo"
              >
                REPO
              </text>
            </a>

            <a className="triLink" href="http://ringstrue.nellienelson.com/">
              <polygon
                className="shape"
                points="50 43, 75 86, 100 43"
                strokeWidth="0"
                fill="#fbf8e5"
              ></polygon>
              <text
                x="60"
                y="40"
                transform="rotate(60, 50, 43)"
                className="gitlink page"
              >
                PAGE
              </text>
            </a>
          </g>
        </svg>

        <svg className="fullHex left" viewBox="0 0 100 86">
          <g className="projHex">
            <polygon
              className="mobileHide titleHex"
              points="0,43 25,0 75,86 25,86"
              fill="#80beca"
            ></polygon>
            <text
              x="41"
              y="-7"
              transform="rotate(60)"
              className="projText"
              id="password"
            >
              CUT-UP
            </text>
            <text
              x="37"
              y="7"
              transform="rotate(60)"
              className="projText"
              id="generator"
            >
              POEMS
            </text>
            <polygon
              className="shape"
              points="25 0, 50 43, 75 0"
              strokeWidth="0"
              fill="#fbf8e5"
            ></polygon>
            <image
              width="18"
              x="41"
              y="6"
              href="assets/images/scissors.svg"
            ></image>

            <a
              className="triLink"
              href="https://github.com/WhoaNellie/Cut-Up-Poems"
            >
              <polygon
                className="shape"
                points="75 0, 50 43, 100 43"
                strokeWidth="0"
                fill="#4ba2b2"
              ></polygon>
              <text
                x="36.5"
                y="12"
                transform="rotate(60, 50, 43)"
                className="gitlink repo"
              >
                REPO
              </text>
            </a>

            <a
              className="triLink"
              href="https://nellienelson.com/Cut-Up-Poems/"
            >
              <polygon
                className="shape"
                points="50 43, 75 86, 100 43"
                strokeWidth="0"
                fill="#fbf8e5"
              ></polygon>
              <text
                x="60"
                y="40"
                transform="rotate(60, 50, 43)"
                className="gitlink page"
              >
                PAGE
              </text>
            </a>
          </g>
        </svg>

        <svg className="fullHex right" viewBox="0 0 100 86">
          <g className="projHex">
            <polygon
              className="mobileHide titleHex"
              points="0,43 25,0 75,86 25,86"
              fill="#80beca"
            ></polygon>
            <text
              x="30"
              y="-3"
              transform="rotate(60)"
              className="projText"
              id="weather"
            >
              CALENDY
            </text>

            <polygon
              className="shape"
              points="25 0, 50 43, 75 0"
              strokeWidth="0"
              fill="#fbf8e5"
            ></polygon>
            <image
              width="20"
              x="40"
              y="6"
              href="assets/images/calendy.svg"
            ></image>

            <a className="triLink" href="https://github.com/WhoaNellie/calendy">
              <polygon
                className="shape"
                points="75 0, 50 43, 100 43"
                strokeWidth="0"
                fill="#4ba2b2"
              ></polygon>
              <text
                x="36.5"
                y="12"
                transform="rotate(60, 50, 43)"
                className="gitlink repo"
              >
                REPO
              </text>
            </a>

            <a className="triLink" href="https://calendy.nellienelson.com/">
              <polygon
                className="shape"
                points="50 43, 75 86, 100 43"
                strokeWidth="0"
                fill="#fbf8e5"
              ></polygon>
              <text
                x="60"
                y="40"
                transform="rotate(60, 50, 43)"
                className="gitlink page"
              >
                PAGE
              </text>
            </a>
          </g>
        </svg>
      </main>
    );
}

export default Projects;