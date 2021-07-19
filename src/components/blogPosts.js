import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { getFirebase } from "../firebase";
import "./blogPosts.css";
const Post = ({ match }) => {
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  const [tags, setTags] = useState();
  const postDoesNotExist = !currentPost;

  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        // setTags(currentPost.coverImage)
        //
        setLoading(false);
      });
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${slug}/tags`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          setTags(snapshot.val());
          console.log(tags);
        }
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  return (
    <div style={{marginTop:"100px"}}>
      <div className="post">
        <h2 class="date">Posted {currentPost.datePretty}</h2>
        <h1>{currentPost.title}</h1>
        <h2 class="tagLine">{currentPost.title}</h2>
        <div class="tags">
          {tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </div>
      </div>
      <img
        class="mainPhoto"
        src={currentPost.coverImage}
        alt={currentPost.coverImageAlt}
      />
      <div className="post">
        <p
          class="body"
          dangerouslySetInnerHTML={{ __html: currentPost.content }}
        />
      </div>
    </div>
  );
};

export default Post;
