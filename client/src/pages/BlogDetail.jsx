import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    document.title = "Blog Post Details"
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="blog-detail">
      <button className="back-btn" onClick={() => navigate('/posts')}>← Back to Posts</button>
      
      <h2 className="blog-title">{post.title}</h2>
      <p className="blog-date">{new Date(post.createdAt).toLocaleDateString()}</p>
      <p className="blog-stack"><strong>Tech Stack:</strong> {post.techStack}</p>

      <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.body }} />

      {post.links && (
        <p className="blog-link">
          <strong>External Link:</strong>{' '}
          <a href={post.links} target="_blank" rel="noopener noreferrer">
            {post.links}
          </a>
        </p>
      )}
    </div>
  );
}

export default BlogDetail;
