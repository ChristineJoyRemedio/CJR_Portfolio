import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project1 = this.props.data.project1;
    const project2 = this.props.data.project2;
    const project3 = this.props.data.project3;
    const github = this.props.data.github;
    const linkedin = this.props.data.linkedin;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <Fade clear>
          <div className="row banner">
            <div className="banner-text">
              <Fade bottom>
                <h1 className="responsive-headline">{name}</h1>
              </Fade>
              <Fade bottom duration={1200}>
                <h3>{description}.</h3>
              </Fade>
              <hr />
              <Fade bottom duration={2000}>
                <ul className="header__button">
                  <a
                    href={project1}
                    target="_blank"
                    rel="noreferrer"
                    className="button btn project-btn"
                  >
                    <i></i>Project #1
                  </a>
                  <a
                    href={project2}
                    target="_blank"
                    rel="noreferrer"
                    className="button btn project-btn"
                  >
                    <i></i>Project #2
                  </a>
                  <a
                    href={project3}
                    target="_blank"
                    rel="noreferrer"
                    className="button btn project-btn"
                  >
                    <i></i>Project #3
                  </a>
                </ul>
                <div className="header__button-social">
                  <a href={github} target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i> Github
                  </a>
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
