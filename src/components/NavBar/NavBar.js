import React, { Component } from "react";
import UnmountClosed from "react-collapse";
import { Route } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";

class NavBar extends Component {

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

  render() {
    const { isOpened } = this.state;
    return (
      <div className="NavBar">
        <nav className="NavBarItems">
          <div style={{ marginLeft: "30px", justifySelf: "flex-start", justifyContent: "flex-start"}}>
            <a href="/about">ABOUT</a>
          </div>
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
