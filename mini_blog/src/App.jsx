import  { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const API_URL = 'http://localhost:5000/api/postRoutes';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPosts(data);
  };

  const addPost = async (form) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    fetchPosts();
  };

  const deletePost = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  const editPost = async (id, title, content) => {
    const updatedTitle = prompt('Edit title', title);
    const updatedContent = prompt('Edit content', content);

    if (updatedTitle && updatedContent) {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: updatedTitle, content: updatedContent }),
      });
      fetchPosts();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Mini Blog</h1>
      <PostForm onAdd={addPost} />
      <PostList posts={posts} onDelete={deletePost} onEdit={editPost} />
    </div>
  );
};

export default App;
