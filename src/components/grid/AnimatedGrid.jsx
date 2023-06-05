import "./AnimatedGrid.css";

const AnimatedGrid = () => {
  const cards = Array.from({ length: 13 }, (v, i) => i + 1);
  return (
    <section className="animated-grid grid gap-4 m-4 h-[85vh]">
      {cards.map((card) => (
        <div key={crypto.randomUUID()} className="card">
          {card}
        </div>
      ))}
    </section>
  );
};

export default AnimatedGrid;
