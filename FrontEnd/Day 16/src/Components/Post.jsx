import { useState } from 'react';
import '../css/Post.css'; 
import axios from "axios";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editPostId, setEditPostId] = useState(null);

  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    productImage: '',
    productPrice: '',
  });

  const addPost = async() => {
    if (newPost.trim() === '') return;
    console.log(formData);
    try{
      const response= await axios.put("http://localhost:8080/update",formData);
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
    const newPostObject = {
      id: Date.now(),
      content: newPost,
      application: { ...formData },
    };

    if (editPostId !== null) {
      const updatedPosts = posts.map((post) =>
        post.id === editPostId ? { ...post, ...newPostObject } : post
      );
      setPosts(updatedPosts);
      setEditPostId(null);
    } else {
      setPosts([...posts, newPostObject]);
    }

    setNewPost('');
    setFormData({
      productId: '',
      productName: '',
      productImage: '',
      productPrice: '',
    });
  };

  const deletePost = async (postId,productId) => {
    try{
      const response = await axios.delete(`http://localhost:8080/delete/${productId}`);
      console.log(response);
    }
    catch(error){
      console.log(error)
    }
    console.log(productId);
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const editPost = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setNewPost(postToEdit.content);
    setFormData({ ...postToEdit.application });
    setEditPostId(postId);
  };

  return (
    <div className="post-container">
      <div className="box-container">
        <div className="form-container">
          <h2>Gifts</h2>
          <div className="post-form">
            <input
            type="number"
            name="productId"
              // placeholder="Add a new post..."
              value={newPost}
              onChange={(e) => {setNewPost(e.target.value);setFormData({ ...formData, productId: e.target.value });}}
            />
            <form>
              {/* <label htmlFor="productId">Gift Id:</label>
              <input
                type="number"
                id="productId"
                value={formData.productId}
                onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
              /> */}
              <label htmlFor="productName">Gift Name:</label>
              <input
                type="text"
                id="productName"
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              />
              <label htmlFor="productImage">Gift Image:</label>
              <input
                type="text"
                id="productImage"
                value={formData.productImage}
                onChange={(e) => setFormData({ ...formData, productImage: e.target.value })}
              />
              <label htmlFor="productPrice">Gift Price:</label>
              <input
                type="number"
                id="productPrice"
                value={formData.productPrice}
                onChange={(e) => setFormData({ ...formData, productPrice: e.target.value })}
              />
            </form>
            <button onClick={addPost}>{editPostId !== null ? 'Update Post' : 'Add Post'}</button>
          </div>
        </div>
        <div className="details-container">
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.application.productId}>
                {post.content}
                <div>
                  <strong>Gift Details:</strong>
                  <p>Gift Name: {post.application.productId}</p>
                  <p>Category: {post.application.productName}</p>
                  <p>Gift color: {post.application.productImage}</p>
                  <p>Gift Price: {post.application.productPrice}</p>
                </div>
                <button onClick={() => editPost(post.id)}>Edit</button>
                <button onClick={() => deletePost(post.id,post.application.productId)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;