import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isShow, setIsShow] = useState(false);

  const showContent = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="App">
      <button onClick={showContent}> Box</button>
      <div
        style={{
          display: isShow ? "block" : "none",
        }}
      >
        Hello World
      </div>
    </div>
  );
}
