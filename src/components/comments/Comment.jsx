function Comment({ name, text }) {
  return (
    <li className="comment">
      <span className="comment__avatar" aria-hidden="true">
        {name.charAt(0).toUpperCase()}
      </span>
      <div>
        <p className="comment__name">{name}</p>
        <p className="comment__text">{text}</p>
      </div>
    </li>
  );
}

export default Comment;
