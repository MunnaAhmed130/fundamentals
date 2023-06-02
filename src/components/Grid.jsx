const Grid = () => {
  const grid = Array.from({ length: 5 }, (v, i) => i + 1);
  //   console.log(foo);
  return (
    <section>
      {grid.map((b) => (
        <div key={crypto.randomUUID()} className="">
          {b}
        </div>
      ))}
    </section>
  );
};

export default Grid;
