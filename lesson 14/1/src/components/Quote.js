export default function Quote(props) {
  return (
    <div className="quote">
      <p className="text">{props.text}</p>
      <p className="author">- {props.author}</p>
    </div>
  );
}
