import { useState } from "react";
import { getFirebase } from "../firebase";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import paper from "../assets/icons/paper.svg";
import { Component } from "react";

class Blog extends Component {
  state = {
    blogPosts: [],
    latestPost: {},
    loading: true,
    blogLoading: true,
  };

  static propTypes = {
    blogPosts: Array,
    latestPost: Object,
    blogLoading: Boolean,
    pageLoading: Boolean,
  };

  static defaultProps = {
    blogPosts: [],
    latestPost: {},
    blogLoading: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.state.blogLoading && !this.state.blogPosts.length) {
      getFirebase()
        .database()
        .ref("/posts")
        .orderByChild("value")
        .once("value")
        .then((snapshot) => {
          let posts = [];
          const snapshotVal = snapshot.val();
          for (let slug in snapshotVal) {
            posts.push(snapshotVal[slug]);
          }
          setTimeout(() => {
            this.setState({
              latestPost: posts.pop(),
              blogPosts: posts,
              blogLoading: false,
            });
          }, 1000);
        });
    }
    console.log(this.state.blogLoading);
  }

  render() {
    return (
      <div>
        <div
          style={{
            paddingTop: "45px",
            minWidth: "100vw",
            minHeight: "100vh",
            justifyItems: "center",
            alignItems: "center",
            backgroundColor: "#22223B",
            position:"absolute",
            transition:"all ease .5s",
            marginLeft: (this.state.blogLoading ? ("0"):("-100vw"))
          }}
        >
          <div><ReactLoading type="bars" height="100px" width="100px" /></div>
          
        </div>
        {this.state.blogLoading ? (
          <div></div>
        ) : (
          <div class="posts">
            <div class="hero" />
            <div class="pageContainer">
              <div class="title">
                Blog
                <img class="blog-icon" src={paper} />
              </div>
              <div
                class="post-container"
                style={{
                  margin: "-15px 1vw",
                  justifyItems: "center",
                  justifyContent: "center",
                }}
              >
                <div class="card latest">
                  <img
                    src={this.state.latestPost.coverImage}
                    class="cover latest"
                    alt="cover"
                  />
                  <div class="cardText">
                    <h1 class="postTitle">{this.state.latestPost.title}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${this.state.latestPost.content
                          .replace(/<img[^>]*>/g, "")
                          .trim()
                          .substring(0, 550)}...`,
                      }}
                      class="sample-text"
                    />
                    <h2 class="read-more">
                      <a href={`/blog/${this.state.latestPost.slug}`}>
                        [READ MORE...]
                      </a>
                    </h2>
                  </div>
                </div>
                <div class="grid-container">
                  {this.state.blogPosts.map((blogPost) => (
                    <Link to={`/blog/${blogPost.slug}`}>
                      <div class="card">
                        <img
                          src={blogPost.coverImage}
                          class="cover"
                          alt={blogPost.coverImageAlt}
                        />
                        <h1 class="postTitle">{blogPost.title}</h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Blog;
