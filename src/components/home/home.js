import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import { homeItems } from "./homeItems";

class Home extends Component {
  render() {
    return (
      <div className="home" ref="home" id="home">
        <div className="typeWrite">
          <Typewriter
            options={{
              delay: 25,
              cursor: "<span class='headerHigh'>_</span>",
              skipAddStyles: false,
              wrapperClassName: "headerHigh",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("ANDRICK.<br/>")
                .pauseFor(200)
                // .deleteChars(4)
                .typeString('<span class="headerLow">MIRAGE</span>.')
                .pauseFor(100)
                .typeString('<span class="headerLow">POSO</span>.')
                .start();
              // .pauseFor(150)
              // .deleteChars(8)
              // .typeString('<span class="headerHigh" >AGE <br/> POSO</span>')
            }}
          />
          <div className="tagline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sodales lacinia ipsum id iaculis.
          </div>
        </div>

        <div>
          <ul className={"launch"}>
            {homeItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
