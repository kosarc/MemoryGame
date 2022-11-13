import { useState, useEffect } from "react";

//styles
import "./App.css";
import SingleCard from "./SingleCard";

const imageSrc = [
  { src: "/img/helmet-1.png", match: false },
  { src: "/img/potion-1.png", match: false },
  { src: "/img/ring-1.png", match: false },
  { src: "/img/scroll-1.png", match: false },
  { src: "/img/shield-1.png", match: false },
  { src: "/img/sword-1.png", match: false },
];

function App() {
  const [cards, setCards] = useState(null);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [clickable, setClickable] = useState(true);

  const shuffleCards = () => {
    const shuffledCards = [...imageSrc, ...imageSrc]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleClick = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setClickable(false);
      if (firstCard.src === secondCard.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstCard.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });

        resetChoise();
      } else {
        setTimeout(() => {
          resetChoise();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  const resetChoise = () => {
    setTurns((prevNum) => prevNum + 1);
    setFirstCard(false);
    setSecondCard(false);
    setClickable(true);
  };

  console.log(cards);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      {cards && (
        <div className="card-desk">
          {cards.map((val) => {
            return (
              <SingleCard
                key={val.id}
                card={val}
                handleClick={handleClick}
                flipped={val === firstCard || val === secondCard || val.match}
                clickable={clickable}
              />
            );
          })}
        </div>
      )}
      {cards && (
        <div className="turns">
          Turns: <span className="turns-number">{turns}</span>
        </div>
      )}
    </div>
  );
}

export default App;
