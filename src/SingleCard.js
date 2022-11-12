const SingleCard = ({ card, handleClick }) => {
  console.log(card.src);
  return (
    <div
      className="single-car"
      onClick={() => {
        handleClick(card.src);
      }}
    >
      <img src={card.src} alt="front img of a card" className="front-card" />
      <img
        src="/img/cover.png"
        alt="back img of a card"
        className="back-card"
      />
    </div>
  );
};

export default SingleCard;
