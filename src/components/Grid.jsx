import "./Grid.css";

const Grid = () => {
  const grid = Array.from({ length: 3 }, (v, i) => i + 1);
  //   console.log(foo);
  return (
    <section className="grid gap-2 grid-cols basic-grid m-2">
      {grid.map((b) => (
        <div
          key={crypto.randomUUID()}
          className="inline-block p-2 bg-slate-500  text-center hover:mx-1 transition-all duration-75"
        >
          {b}
        </div>
      ))}
    </section>
  );
};

export default Grid;
