import { useState } from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import "./Comments.css";

// Holds comment state so the box and the list can share it.
function CommentSection({ initialComments }) {
  const [comments, setComments] = useState(initialComments);

  function addComment(name, text) {
    const newComment = { id: Date.now(), name, text };
    setComments([newComment, ...comments]);
  }

  return (
    <div className="comments">
      <h3 className="comments__heading">Comments ({comments.length})</h3>
      <CommentBox onSubmit={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default CommentSection;
