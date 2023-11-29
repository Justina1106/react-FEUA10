import { useEffect, useState } from "react";

const FetchAPI = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Old way with fetch
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCreatePost = () => {
    const newPost = { title: "Test Rokas" };

    const options = {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("https://jsonplaceholder.typicode.com/posts", options)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setPosts((prevPosts) => [...prevPosts, response]); // same as

        // same as ^
        // const updatedUsers = [...users, response];
        // setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Old way</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleCreatePost}>Create new</button>
    </div>
  );
};

export default FetchAPI;