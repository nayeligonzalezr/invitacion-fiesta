/** Cartas de baraja inglesa: esquina superior, palo central y esquina inferior girada. */
const cards = [
  { rank: "A", suit: "♥", color: "red" },
  { rank: "Q", suit: "♠", color: "black" },
  { rank: "8", suit: "♦", color: "red" },
  { rank: "K", suit: "♣", color: "black" },
];

export default function PokerCards({ small = false }) {
  return (
    <div className={`pokerFan ${small ? "pokerFan--small" : ""}`} aria-hidden="true">
      {cards.map(({ rank, suit, color }) => (
        <div className={`pokerCard pokerCard--${color}`} key={`${rank}${suit}`}>
          <div className="pokerCorner pokerCorner--top"><b>{rank}</b><span>{suit}</span></div>
          <div className="pokerCenter">{suit}</div>
          <div className="pokerCorner pokerCorner--bottom"><b>{rank}</b><span>{suit}</span></div>
        </div>
      ))}
    </div>
  );
}
