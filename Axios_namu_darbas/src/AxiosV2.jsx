// import { useEffect, useState } from "react";
// import { fetchPosts, createPost, deletePost, updatePost } from "./api/post";

// const AxiosV2 = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts()
//       .then((response) => {
//         setPosts(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleCreatePost = () => {
//     const newPost = { title: "Test Rokas" };

//     createPost(newPost)
//       .then((response) => {
//         setPosts((prevPosts) => [...prevPosts, response]);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleDeletePost = (id) => {
//     deletePost(id)
//       .then(() => {
//         setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleUpdatePost = (updatingPost) => {
//     const newPostData = { ...updatingPost, title: "Testeris" };
//     updatePost(newPostData)
//       .then((response) => {
//         setPosts((prevPosts) =>
//           prevPosts.map((post) => (post.id === response.id ? response : post))
//         );
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h2>Axios v2 way</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             {post.title}{" "}
//             <button onClick={() => handleDeletePost(post.id)}>Delete</button>
//             <button onClick={() => handleUpdatePost(post)}>Update name</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleCreatePost}>Create new</button>
//     </div>
//   );
// };

// export default AxiosV2;