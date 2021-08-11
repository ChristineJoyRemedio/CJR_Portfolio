import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio2 extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio2/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage src={projectImage} />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio2">
        <Fade left duration={800} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Graphic Design Works.</h1>

              <div
                id="portfolio-wrapper2"
                className="bgrid-quarters s-bgrid-thirds cf animate-pulse"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio2;
