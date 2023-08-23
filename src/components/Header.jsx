import React, { useState } from 'react';

function Header(){
    const [screenSize, setScreenSize] = useState((window.innerWidth<=550 ? "small":"big"));

    let route;
    if(window.location.hash === "#/"){
        route = "projects"
    }else if(window.location.hash === "#/about"){
        route = "about";
    }else if(window.location.hash === "#/contact"){
        route = "contact";
    }

    const [page, setPage] = useState(route);

    window.addEventListener('resize', () => {
        if((screenSize === "small" && window.innerWidth > 550)||(screenSize === "big" && window.innerWidth <= 550)){
            setScreenSize((window.innerWidth <= 550 ? "small":"big"));
        }
    });

    return (
      <header>
        <svg className="top" viewBox="0 0 100 43">
          <a href="#/" onClick={() => setPage("projects")}>
            <polygon
              points="0 43, 25 0, 75 0, 100 43"
              strokeWidth="0"
              fill="#fbf8e5"
            ></polygon>
            <text x="29" y="19" className="first name">
              NELLIE
            </text>
            <text x="25" y="32" className="last name">
              NELSON
            </text>
          </a>
        </svg>
        {screenSize === "small" ? (
          <nav className="desktopHide">
            <svg viewBox="0 0 100 43">
              <a href="#/about" onClick={() => setPage("about")}>
                <polygon
                  points="0 0, 25 43, 50 0"
                  className={`navShape ${page === "about" ? "current" : ""}`}
                  fill="#fbf8e5"
                ></polygon>
                <text
                  x="14"
                  y="12"
                  className={`navText ${page === "about" ? "current" : ""}`}
                >
                  ABOUT
                </text>
              </a>

              <a href="#/" onClick={() => setPage("projects")}>
                <polygon
                  points="25 43, 50 0, 75 43"
                  className={`navShape ${page === "projects" ? "current" : ""}`}
                  fill="#3C818E"
                ></polygon>

                <text
                  x="34"
                  y="38"
                  className={`navText ${page === "projects" ? "current" : ""}`}
                >
                  PROJECTS
                </text>
              </a>

              <a href="#/contact" onClick={() => setPage("contact")}>
                <polygon
                  className={`navShape ${page === "contact" ? "current" : ""}`}
                  points="50 0, 75 43, 100 0"
                  fill="#fbf8e5"
                ></polygon>
                <text
                  x="61"
                  y="12"
                  className={`navText ${page === "contact" ? "current" : ""}`}
                >
                  CONTACT
                </text>
              </a>
            </svg>
          </nav>
        ) : (
          <nav className="mobileHide">
            <svg viewBox="0 0 100 43">
              <a href="#/about" onClick={() => setPage("about")}>
                <polygon
                  points="0,43 25,0 50,43"
                  strokeWidth="0"
                  className={`navShape ${page === "about" ? "current" : ""}`}
                ></polygon>
                <text
                  x="13.5"
                  y="35"
                  className={`navText ${page === "about" ? "current" : ""}`}
                >
                  ABOUT
                </text>
              </a>

              <a href="#/" onClick={() => setPage("projects")}>
                <polygon
                  points="25,0 50,43 75,0"
                  strokeWidth="0"
                  className={`navShape ${page === "projects" ? "current" : ""}`}
                ></polygon>
                <text
                  x="39"
                  y="12"
                  className={`navText ${page === "projects" ? "current" : ""}`}
                >
                  STUFF
                </text>
              </a>

              <a href="#/contact" onClick={() => setPage("contact")}>
                <polygon
                  points="50,43 75,0 100,43"
                  strokeWidth="0"
                  className={`navShape ${page === "contact" ? "current" : ""}`}
                ></polygon>
                <text
                  x="59"
                  y="35"
                  className={`navText ${page === "contact" ? "current" : ""}`}
                >
                  CONTACT
                </text>
              </a>
            </svg>
          </nav>
        )}
      </header>
    );
}

export default Header;