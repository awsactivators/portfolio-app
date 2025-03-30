// src/components/BlogCard.jsx
import { Link, useNavigate } from 'react-router-dom';

function BlogCard({ _id, title, body, createdAt }) {
  // Remove HTML tags for preview
  const snippet = body.replace(/<[^>]+>/g, '');
  const navigate = useNavigate();

  return (
    <>
        <div className="blog-card">
          <div>
            <button className="back-btn" onClick={() => navigate('/#blog')}>← Back to Posts</button>
          </div>
          <h3>{title}</h3>
          <p className="blog-date">{new Date(createdAt).toLocaleDateString()}</p>
          <p>{snippet.length > 150 ? snippet.slice(0, 150) + '...' : snippet}</p>
          <Link to={`/blog/${_id}`} className="read-more-btn">Read More</Link>
        </div>
    </>
  );
}

export default BlogCard;
