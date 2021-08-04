import { getElementById } from "domutils";
import MersenneTwister from "mersenne-twister";
import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import { homeItems } from "./homeItems";

var tags = [
  [
    '"There are two ways to write error-free programs; only the third one works."',
    "Alan Perlis| 1st Recipient of the Turing Award",
  ],
  ['"What I cannot create, I do not understand"', "Richard Feynman"],
  [
    '"When you give up, thats when the game is over"',
    "Anzai Sensei| Slam Dunk (Anime), 1993",
  ],
  [
    '"Refresh enough and this message may change..."',
    "<span style='text-decoration: line-through;'>Robot Overlord.</span><br/>Mark.",
  ],
];

var last = null;
var m = new MersenneTwister();

function randomTag() {
  var _rand = m.random();
  var rand = Math.floor(tags.length * _rand);
  if (rand == last) {
    rand = (rand + 1) % tags.length;
  }
  last = rand;
  var quote = tags[rand][0];
  var author = tags[rand][1];
  author = author.replace("| ", ",<br/>");
  var prettyHtml =
    quote + '<br/><div class="quote-auth">- ' + author + "</div>";
  document.getElementById("tagAuthor").innerHTML = prettyHtml;
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 82) {
    randomTag();
  }
});

class Home extends Component {
  componentDidMount() {
    randomTag();
  }

  render() {
    return (
      <div className="home" ref="home" id="home">
        <script></script>
        <div className="typeWrite">
          <Typewriter
            options={{
              delay: 25,
              cursor: "<span class='headerHigh cursor'>_</span>",
              skipAddStyles: false,
              wrapperClassName: "headerHigh",
            }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .typeString("ANDRICK.<br/>")
                .pauseFor(200)
                // .deleteChars(4)
                .typeString(
                  '<span class="headerLow secLine">' +
                    'MIRAGE<span class="dot">.</span>' +
                    "</span>" +
                    '<br class="multiline"/>'
                )
                .pauseFor(100)
                .typeString('<span class="headerLow thirLine">POSO</span>.');

              setTimeout(() => {
                document.getElementById("tagline").style.color = "#f2e9e4";
              }, 100);
            }}
          />
          <div className="tagline" id="tagline">
            <div id="tagAuthor" />
          </div>
        </div>

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
    );
  }
}
export default Home;
