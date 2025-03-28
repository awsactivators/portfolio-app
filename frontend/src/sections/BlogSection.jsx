import { Link } from 'react-router-dom';

function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <h2 className="h2-header">BLOG POSTS</h2>
      <p className="blog-desc">
        Explore insightful articles, tutorials, and stories around DevOps, Cloud Engineering, and Software Development. Whether you're just getting started or you're already experienced, there's something here for you.
      </p>
      <div className="view-posts-btn">
        <Link to="/posts">
          <button>View Posts</button>
        </Link>
      </div>
    </section>
  );
}

export default BlogSection;
