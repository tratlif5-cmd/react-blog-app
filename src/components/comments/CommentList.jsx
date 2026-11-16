import Comment from "./Comment";

function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p className="comment-list__empty">No comments yet. Be the first!</p>;
  }

  return (
    <>
    <h4 className="comment-list__heading">Existing Comments:</h4>
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} name={comment.name} text={comment.text} />
      ))}
    </ul>
    </>
  );
}

export default CommentList;
