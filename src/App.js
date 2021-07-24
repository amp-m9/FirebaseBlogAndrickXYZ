import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/home.js";
import Blog from "./pages/blog.js";
import Post from "./pages/post.js";
import About from "./pages/about.js";
import Error from "./pages/error404";
import InTheWorks from "./pages/inTheWorks";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Blog} path="/blog" exact />
            <Route component={About} path="/about" exact/>
            <Route component={Error} path = "/404"/>
            <Route component={Post} path="/blog/:slug" exact/>
            <Route component={InTheWorks} path="/gallery"/>
            <Route component={InTheWorks} path="/all"/>
            <Route component={()=>{return <Redirect to="/404" />;}}/>
          </Switch>
        </div>
        <NavBar />
      </BrowserRouter>
    );
  }
}

export default App;
