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
      {/* <div className="card">a</div>
      <div className="card">b</div>
      <div className="card">c</div>
      <div className="card">d</div>
      <div className="card">e</div>
      <div className="card">f</div>
      <div className="card">g</div>
      <div className="card">h</div>
      <div className="card">i</div>
      <div className="card">j</div>
      <div className="card">k</div>
      <div className="card">l</div>
      <div className="card">main</div> */}
    </section>
  );
};

export default AnimatedGrid;
