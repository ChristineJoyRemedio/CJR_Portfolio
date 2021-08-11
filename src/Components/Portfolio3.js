import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio3 extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio3/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage src={projectImage} />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio3">
        <Fade left duration={600} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Digital Artworks.</h1>

              <div
                id="portfolio-wrapper3"
                className="bgrid-quarters s-bgrid-thirds cf"
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

export default Portfolio3;
