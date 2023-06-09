import { useCallback, useState } from "react";
import List from "./List";

const Callback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#FFF" : "#333",
  };

  // console.log(getItems());
  return (
    <div style={theme} className="w-full h-screen text-center pt-6">
      {/* <div className=""> */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className="border"
        style={theme}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)} className="">
        Toggle theme
      </button>
      {/* <div>
          {getItems().map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div> */}
      <List getItems={getItems} />
      {/* </div> */}
    </div>
  );
};
export default Callback;
