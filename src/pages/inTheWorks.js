import React, { Component } from "react";
import chemicalReaction from "../assets/icons/chemical-reaction.svg";
import { Link } from "react-router-dom";


class InTheWorks extends Component {
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
          <img src={chemicalReaction} style={{height:"140px"}}/>
          <body style={{ marginBottom: "20px" }}>
            Just a minute the formula isn't complete!
            <br />
            Come back to the lab when its ready you eager beaver!
          </body>
          <Link to={`/`}>
            <span className="button">Home</span>
          </Link>
        </div>
      </body>
    );
  }
}
export default InTheWorks;
