import { useEffect, useMemo, useState } from "react";

const Usememo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  //   const [value, setValue] = useState(0);
  //   useEffect(() => {
  //     setValue(slowFunction(number));
  //   }, [number]);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#FFF" : "#333",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [theme]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={theme}>{doubleNumber}</div>
      {/* <div style={theme}>{value}</div> */}
    </div>
  );
};

const slowFunction = (num) => {
  console.log("calling slow Function");
  for (let i = 0; i <= 10000000000000; i++) {
    return num * 2;
  }
};

export default Usememo;
