import { useState } from "react";
import { getFirebase } from "../firebase";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import paper from "../assets/icons/paper.svg";
const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [latestPost, setLatestPost] = useState({});
  const [pageLoaded, setPageLoaded] = useState(false);
  if (loading && !blogPosts.length) { 
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("date")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }

        setLatestPost(posts.pop());
        setBlogPosts(posts);
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <div>
      {/*Replace with !pageLoaded*/}
      {pageLoaded ? (
        <div style={{minWidth:"100vw",minHeight:"100vh", backgroundColor:"black", justifyItems:"center", alignItems:"center"}}><ReactLoading type={"bars"} color={"White"} /></div>

      ) : (
        <div class="posts">
          <div class="hero" />
          <div class="pageContainer">
            <div class="title">
              Blog
              <img
                class="blog-icon"
                src={paper}

              />
            </div>
            <div class="post-container"
              style={{
                margin: "-15px 1vw",
                justifyItems: "center",
                justifyContent: "center",
              }}
            >


              <div class="card latest">
                <img src={latestPost.coverImage} class="cover latest" alt="cover" />
                <div class="cardText">
                  <h1 class="postTitle">{latestPost.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${latestPost.content
                        .replace(/<img[^>]*>/g, "")
                        .trim()
                        .substring(0, 550)}...`,
                    }}
                    class="sample-text"
                  />
                  <h2 class="read-more">
                    <a href={`/blog/${latestPost.slug}`}>[READ MORE...]</a>
                  </h2>
                </div>
              </div>
              <div class="grid-container">
                {blogPosts.map((blogPost) => (
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
};

export default Blog;
