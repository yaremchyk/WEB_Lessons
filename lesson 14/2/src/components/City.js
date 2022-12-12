export default function City(props) {
  return (
    <div className="city">
      <p>{props.name}</p>
      <img src={props.img} width="128px" height="128px" alt={props.name}></img>
    </div>
  );
}
