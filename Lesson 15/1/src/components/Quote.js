import { useState } from "react";

export default function Quote(props) {
  const [likes, setLikes] = useState(0);

  const Like = () => {
    setLikes(likes + 1);
  };
  const Dislike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="quote">
      <p className="text">{props.text}</p>
      <p className="author">- {props.author}</p>
      <p>Likes: {likes}</p>
      <button className="qtBtn" onClick={Like}>
        Like
      </button>
      <button className="qtBtn" onClick={Dislike}>
        Dislike
      </button>
    </div>
  );
}
