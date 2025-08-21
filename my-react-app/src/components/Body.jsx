import React from "react";
import selfImage  from "../assets/selfImage.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Body() {
  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <div>
            <img className="body-img" alt="profile" src={selfImage} />
          </div>
          <div className="body-content">
            <div className="body-headline">Chaitra Puttabudhi</div>
            <div className="body-text">Senior Software Engineer</div>
          </div>
          <div className="body-icons">
            <a
              href="https://www.linkedin.com/in/chai-puttabudhi/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <i>
                <FaLinkedin />
              </i>
            </a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;