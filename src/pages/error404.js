import React, { Component } from "react";
import fourOhFour from "../assets/icons/404-error.svg";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <body className="error">
        <div
          style={{
            justifyItems: "center",
            textAlign: "center",
            top: "50%",
            position: "absolute",
          }}
        >
          <img src={fourOhFour} />
          <body style={{ marginBottom: "20px" }}>
            Oops! You really shouldn't be here!
            <br />
            click here to go home!
          </body>
          <Link to={`/`}>
            <span className="button">Home</span>
          </Link>
        </div>
      </body>
    );
  }
}
export default Error;
