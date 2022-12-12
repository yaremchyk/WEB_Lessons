import Card from "./Card";

export default function CardsList(props) {
  return (
    <div className="cardList">
      {props.cards.map((card) => (
        <Card value={card.value}></Card>
      ))}
    </div>
  );
}
