import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (!response.ok) throw new Error("Could not load posts");
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(() => setError("Sorry, posts could not be loaded."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>My Blog Posts</h2>
      <p>These posts are loaded from an API.</p>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {posts.map(post => (
        <div className="post-preview" key={post.id}>
          <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
          <p>{post.body.substring(0, 100)}...</p>
          <Link to={`/posts/${post.id}`}>Read more</Link>
        </div>
      ))}
    </section>
  );
}

export default BlogPostsPage;
