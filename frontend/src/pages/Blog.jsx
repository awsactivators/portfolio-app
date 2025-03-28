// src/pages/Blog.jsx
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/posts`)
      .then(res => res.json())
      .then(data => {
        console.log("Blog posts:", data); // Debug
        setPosts(data);
      })
      .catch(err => console.error("Failed to load posts:", err));
  }, []);

  return (
    <div className="blog-page">
      <h2 className="h2-header">Blog Posts</h2>
      <div className="blog-card-wrapper">
        {posts.map((post) => (
          <BlogCard key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
