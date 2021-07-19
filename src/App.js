import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/home/home.js";
import Blog from "./components/blog.js";
import Post from "./components/blogPosts.js";
import About from "./components/about.js";

import { Storage } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";

class App extends Component {
  state = { fileUrl: "", file: "", fileName: "" };
  componentDidMount(){
    Storage.get('Venus-1313.jpg')
    .then(data => {
      this.setState({
        fileUrl: data
      })
    })
    .catch(err => {
      console.log('Basically', err)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Blog} path="/blog" exact />
            <Route component={About} path="/about" />
            <Route component={Post} path="/:slug" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
