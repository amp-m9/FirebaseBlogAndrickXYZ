import React, { Component } from "react";
import mePhotoshoot from "../assets/images/mePhotoshoot.jpg";
import c_logo from "../assets/icons/c_logo.svg"
import godot_logo from "../assets/icons/godot_logo.svg"
import java_logo from "../assets/icons/java_logo.svg"
import OpenGL_logo from "../assets/icons/OpenGL_logo.svg"
import react_logo from "../assets/icons/react_logo.svg"
import "react-sweet-progress/lib/style.css";
class About extends Component {
  render() {
    return (
        <div className="about">
          <div className="about-card">
            <div className="about-left">
              <div style={{ marginTop: "13px", marginBottom: "40px" }}>
                  <img src={mePhotoshoot} alt="cannot display" />
                <div className="box-bg" />
              </div>
              {/* <h3>LANGUAGES</h3>
              <h3>INTERESTS</h3>
              <h3>SOCIAL MEDIA</h3> */}
            </div>
            <div className="about-right">
              <h2>Hi, I'm Andrick.</h2>
              <p>
                I'm a final year computer science student at Loughborough
                university who loves to program and create experiences with my
                code. I enjoy taking on new projects and using them as
                opportunities to learn new frameworks and other technologies,
                which I speak about in my blog. Currently I am focused on games
                programming and have produced a few games which can be viewed on
                my itch.io page:
                <a href="https://invariant-ace.itch.io/">
                  invariant-ace.itch.io/
                </a>
              </p>
              <h3>PROGRAMMING LANGUAGES AND TECHNOLOGIES I USE:</h3>
              <div class="tech-logos">
                <img src={java_logo} alt=""/>
                {/* <img src={} alt="PYTHON"/> */}
                <img src={c_logo} alt=""/>
                <img src={godot_logo} alt=""/>
                <img src={OpenGL_logo} alt=""/>
                <img src={react_logo} alt=""/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default About;
