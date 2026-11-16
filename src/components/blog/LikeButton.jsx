import { useState } from "react";
import "./LikeButton.css";

// Extra credit: like button with a heart icon that toggles on and off.
function LikeButton({ initialLikes = 0 }) {
  const [liked, setLiked] = useState(false);
  const likes = liked ? initialLikes + 1 : initialLikes;

  return (
    <button
      type="button"
      className={`like-button ${liked ? "like-button--active" : ""}`}
      onClick={() => setLiked(!liked)}
      aria-pressed={liked}
      aria-label={liked ? "Unlike this post" : "Like this post"}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21s-7.5-4.6-9.5-9.2C1 8.4 3.2 5 6.6 5c2 0 3.6 1.1 4.4 2.6h2C13.8 6.1 15.4 5 17.4 5 20.8 5 23 8.4 21.5 11.8 19.5 16.4 12 21 12 21z"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <span>{likes}</span>
    </button>
  );
}

export default LikeButton;
