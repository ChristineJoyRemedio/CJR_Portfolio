import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="portfolio__container">
          <div className="project__container">
            <div className="project__img">
              <Zmage alt={projects.title} src={projectImage} />
            </div>
            <div className="project__title">
              <p
                style={{
                  textAlign: "center",
                  color: "White",
                }}
              >
                {projects.title}
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "gray",
                }}
              >
                {projects.category}
              </p>
              <div className="project__view">
                <a href={projects.url} target="_blank" rel="noreferrer">
                  <button>View</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="">
          <div className="project__header">
            <h1>
              Check Out Some of My Web/Mobile Frontend Dev and Design Works.
            </h1>
            <div>{projects}</div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
