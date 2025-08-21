import React from "react";
import projects from "../data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";


function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="projects" className="projects">
      <h2 className="heading">My Projects</h2>
      <div className="projects-container">
        <Slider {...settings}>
          {projects.map((project, index) => {
            return (
              <div key={index} className="project">
                <div className="content">
                  <h3 className="name">{project.name}</h3>
                  <p className="description">{project.description}</p>
                  <div>
                    <a
                      className="project-button"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
