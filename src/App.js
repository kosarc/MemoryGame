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
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...imageSrc, ...imageSrc]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };

  const handleClick = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.src === secondCard.src) {
        console.log("match");
        resetChoise();
      } else {
        console.log("do not match");
        resetChoise();
      }
    }
  }, [firstCard, secondCard]);

  const resetChoise = () => {
    setTurns((prevNum) => prevNum + 1);
    setFirstCard(false);
    setSecondCard(false);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-desk">
        {cards.map((val) => {
          return (
            <SingleCard key={val.id} card={val} handleClick={handleClick} />
          );
        })}
      </div>
      {turns}
    </div>
  );
}

export default App;
