import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import UnmountClosed from "react-collapse";
import { Route, Link } from "react-router-dom";
import amp from "../../assets/icons/amp2.png";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";

class NavBar extends Component {
  state = { clicked: false };

  static propTypes = {
    isOpened: Boolean,
  };

  static defaultProps = {
    isOpened: false,
  };

  constructor(props) {
    super(props);
    const { isOpened } = false;
    this.state = { isOpened };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { isOpened } = this.state;
    return (
      <div className="NavBar">
        <nav className="NavBarItems">
          <a href="/" style={{ height: "100%" }}>
            <img className="navbar-logo" src={amp} />
          </a>

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <div className="tabs">
              <a href="/projects">PROJECTS</a>
              <a href="/blog">BLOG</a>
              <a href="/about">ABOUT</a>

            </div>
            <div className='icons'>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
