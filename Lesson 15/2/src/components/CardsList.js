import Card from "./Card";
import React, { useState } from "react";

export default function CardsList(props) {
  const cardSymbols = [
    "🂡",
    "🂱",
    "🃁",
    "🃑",
    "🂢",
    "🂲",
    "🃂",
    "🃒",
    "🂣",
    "🂳",
    "🃃",
    "🃓",
    "🂤",
    "🂴",
    "🃄",
    "🃔",
    "🂥",
    "🂵",
    "🃅",
    "🃕",
    "🂦",
    "🂶",
    "🃆",
    "🃖",
    "🂧",
    "🂷",
    "🃇",
    "🃗",
    "🂨",
    "🂸",
    "🃈",
    "🃘",
    "🂩",
    "🂹",
    "🃉",
    "🃙",
    "🂪",
    "🂺",
    "🃊",
    "🃚",
    "🂫",
    "🂻",
    "🃋",
    "🃛",
    "🂬",
    "🂼",
    "🃌",
    "🃜",
    "🂭",
    "🂽",
    "🃍",
    "🃝",
    "🂮",
    "🂾",
    "🃎",
    "🃞"
  ];

  const [cards, setCards] = useState(props.cards);

  const addCard = () => {
    let rand = Math.floor(Math.random() * 56);
    setCards([...cards, { value: cardSymbols[rand] }]);
  };

  const clearList = () => {
    setCards([]);
  };

  return (
    <>
      <button onClick={addCard}>Add random card</button>
      <button onClick={clearList}>Clear list</button>
      <div className="cardList">
        {cards.map((card) => (
          <Card value={card.value}></Card>
        ))}
      </div>
    </>
  );
}
