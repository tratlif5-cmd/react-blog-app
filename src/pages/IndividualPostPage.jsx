import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function IndividualPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setPost(null);
    setAuthor(null);
    setComments([]);
    setLoading(true);
    setError("");
    setCommentError("");

    // First get the post, then get its author and comments.
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        if (!response.ok) throw new Error("Post not found");
        return response.json();
      })
      .then(data => {
        if (!data.id) throw new Error("Post not found");
        setPost(data);
        return Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        ]);
      })
      .then(responses => {
        if (!responses[0].ok || !responses[1].ok) throw new Error("Could not load post details");
        return Promise.all(responses.map(response => response.json()));
      })
      .then(([userData, commentData]) => {
        setAuthor(userData);
        setComments(commentData);
      })
      .catch(() => setError("Sorry, this post could not be loaded."))
      .finally(() => setLoading(false));
  }, [id]);

  function handleComment(e) {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) {
      setCommentError("Please fill out both fields.");
      return;
    }

    setSending(true);
    setCommentError("");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), body: commentText.trim(), postId: Number(id) })
    })
      .then(response => {
        if (!response.ok) throw new Error("Could not post comment");
        return response.json();
      })
      .then(newComment => {
        setComments(oldComments => [...oldComments, newComment]);
        setName("");
        setCommentText("");
      })
      .catch(() => setCommentError("Comment could not be posted. Try again."))
      .finally(() => setSending(false));
  }

  return (
    <section>
      <p><Link to="/">Back to all posts</Link></p>
      {loading && <p>Loading post...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && post && (
        <>
          <div className="post-preview">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {author && <p><b>Author:</b> {author.name} ({author.email})</p>}
          </div>

          <h3>Comments</h3>
          {comments.length === 0 && <p>No comments yet. Be the first to comment!</p>}
          {comments.map((comment, index) => (
            <div className="simple-comment" key={`${comment.id}-${index}`}>
              <b>{comment.name}</b>
              <p>{comment.body}</p>
            </div>
          ))}

          <h3>Add a Comment</h3>
          <form className="contact-form" onSubmit={handleComment}>
            <label htmlFor="comment-name">Name</label>
            <input id="comment-name" value={name} onChange={e => setName(e.target.value)} required />
            <label htmlFor="comment-text">Comment</label>
            <textarea id="comment-text" value={commentText} onChange={e => setCommentText(e.target.value)} rows="4" required />
            <button type="submit" disabled={sending}>{sending ? "Posting..." : "Submit"}</button>
            {commentError && <p>{commentError}</p>}
          </form>
          <p className="small-note">This is a practice API. New comments show here, but are not permanently saved.</p>
        </>
      )}
    </section>
  );
}

export default IndividualPostPage;
