import "./SingleCard.css";

const SingleCard = ({ card, handleClick, flipped }) => {
  return (
    <div className="SingleCard">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="front img of a card" className="front-card" />
        <img
          src="/img/cover.png"
          alt="back img of a card"
          className="back-card"
          onClick={() => {
            handleClick(card);
          }}
        />
      </div>
    </div>
  );
};

export default SingleCard;
