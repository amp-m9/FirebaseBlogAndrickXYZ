import { useState } from "react";
import { getFirebase } from "../firebase";
import { Link } from "react-router-dom";
import paper from "../assets/icons/paper.svg";
const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [latestPost, setLatestPost] = useState({});

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

        const newestFirst = posts.reverse();
        setLatestPost(newestFirst.pop());
        setBlogPosts(newestFirst);
        setLoading(false);
        console.log(newestFirst);
        console.log(latestPost);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
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
  );
};

export default Blog;

// class Projects extends Component {
//   render() {
//     return (
//       <div class="projects">
//         <div class="hero" />
//         <div class="pageContainer">
//           <div class="title" style={{ margin: "3vh auto" }}>
//             [PROJECTS]
//           </div>
//           <div style={{ margin: "0 1vw" }}>
//             <div
//               class="title"
//               style={{ fontSize: "50px", paddingLeft: "50px" }}
//             >
//               [LATEST]
//             </div>
//             <div class="card latest">
//               <img
//                 src="https://images.unsplash.com/photo-1623851807421-02b352e60381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
//                 class="cover latest"
//                 alt="cover"
//               />
//               <div class="cardText">
//                 <div>
//                   <h1 class="postTitle">
//                     The best phone case you've never had.
//                   </h1>
//                   <p style={{ overflow: "hidden" }}>
//                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//                     diam nonumy eirmod tempor invidunt ut labore et dolore magna
//                     aliquyam erat, sed diam voluptua. At vero eos et accusam et
//                     justo duo dolores et ea rebum. Stet clita kasd gubergren, no
//                     sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
//                     ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//                     nonumy eirmod tempor invidunt ut labore et dolore magna
//                     aliquyam erat
//                   </p>
//                   <h2
//                     style={{
//                       fontFamily: "Source Code Pro",
//                       fontSize: "30px",
//                       color: "#5E2BFF",
//                       justifySelf: "end",
//                       bottom: 0,
//                       right: 0,
//                     }}
//                   >
//                     [READ MORE...]
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div class="grid-container">
//               <div class="card">
//                 <img
//                   src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
//                   class="cover"
//                   alt="cover"
//                 />
//                 <h1 class="postTitle">My solution to prototyping.</h1>
//               </div>

//               <div class="card">
//                 <img
//                   src="https://images.unsplash.com/photo-1601952899827-3db57e7943f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80"
//                   class="cover"
//                   alt="cover"
//                 />
//                 <h1 class="postTitle">My solution to prototyping.</h1>
//               </div>

//               <div class="card">
//                 <img
//                   src="https://images.unsplash.com/photo-1623949615379-315cdcdcf1e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1962&q=80"
//                   class="cover"
//                   alt="cover"
//                 />
//                 <h1 class="postTitle">My solution to prototyping.</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
