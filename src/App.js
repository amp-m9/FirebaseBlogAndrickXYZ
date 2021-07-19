import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/home/home.js";
import Blog from "./components/blog.js";
import Post from "./components/blogPosts.js";
import About from "./components/about.js";

class App extends Component {

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
