import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // New way with axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.data)
      .then((response) => {
        // for setting data
        setPosts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreatePost = () => {
    const newPost = { title: "Lia lia lia lia" };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((resp) => resp.data)
      .then((response) => {
        // for adding new
        setPosts((prevPosts) => [...prevPosts, response]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.data)
      .then(() => {
        // for deleting
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdatePost = (updatingPost) => {
    const newPostData = { title: "Testeris" };
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${updatingPost.id}`,
        newPostData
      )
      .then((resp) => resp.data)
      .then((response) => {
        // for updating
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === response.id ? response : post))
        );
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Axios way</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}{" "}
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <button onClick={() => handleUpdatePost(post)}>Update name</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCreatePost}>Create new</button>
    </div>
  );
};

export default Axios;