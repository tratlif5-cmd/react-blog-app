import { useState, useId } from "react";

function CommentBox({ onSubmit }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const id = useId();

  function handleSubmit(event) {
    event.preventDefault();
    if (!text.trim()) return;
    onSubmit(name.trim() || "Anonymous", text.trim());
    setName("");
    setText("");
  }

  return (
    <form className="comment-box" onSubmit={handleSubmit}>
      <label htmlFor={`${id}-name`} className="visually-hidden">Your name</label>
      <input
        id={`${id}-name`}
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor={`${id}-text`} className="visually-hidden">Your comment</label>
      <textarea
        id={`${id}-text`}
        placeholder="Write a comment..."
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" disabled={!text.trim()}>Submit</button>
    </form>
  );
}

export default CommentBox;
