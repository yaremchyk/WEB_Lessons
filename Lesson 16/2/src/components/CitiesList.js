import City from "./City";

export default function CitiesList(props) {
  return (
    <div className="citiesList">
      {props.cities.map((city, i) => (
        <City key={i} name={city.name} img={city.img}></City>
      ))}
    </div>
  );
}
