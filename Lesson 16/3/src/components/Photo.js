export default function Photo(props) {
  return (
    <div className="photo">
      <div>
        <img
          src={props.img}
          width="256px"
          height="256px"
          alt={props.name}
        ></img>
        <h3>{props.name}</h3>
      </div>
      <div>
        <p>{props.description}</p>
        <p>{props.genre}</p>
        <p>{props.author}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
}
