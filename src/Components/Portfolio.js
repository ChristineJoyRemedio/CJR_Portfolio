import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return <p>Please try reloading the page</p>;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="portfolio__container">
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
            <br />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={8000} distance="40px">
          <div className="">
            <div className="">
              <h1>
                Check Out Some of My Web/Mobile Frontend Dev and Design Works.
              </h1>

              <div id="portfolio-wrapper1">{projects}</div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
