import LikeButton from "./LikeButton";
import CommentSection from "../comments/CommentSection";
import "./BlogPost.css";

function formatDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPost({ post }) {
  const { title, author, date, content, comments, likes } = post;

  return (
    <article className="blog-post">
      <h2 className="blog-post__title">{title}</h2>
      <p className="blog-post__content">{content}</p>
      <div className="blog-post__meta">
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Date:</strong> <time dateTime={date}>{formatDate(date)}</time></p>
      </div>
      <div className="blog-post__actions">
        <LikeButton initialLikes={likes} />
      </div>
      <CommentSection initialComments={comments} />
    </article>
  );
}

export default BlogPost;
