import "./styles.css";
import { useState, useRef } from "react"; // useState to store data, useRef to keep timer ID safe

export default function App() {
  // This keeps track of how many seconds have passed
  const [seconds, setSeconds] = useState(0);

  // This keeps the timer ID safe so we can stop it later
  const timeRef = useRef(0);

  // Calculate minutes by dividing seconds by 60
  const minutes = Math.floor(seconds / 60);

  // Get the leftover seconds after removing full minutes
  const remainingSeconds = seconds % 60;

  // This function starts the timer
  const startTimer = () => {
    // Run this code every 1000 milliseconds (1 second)
    timeRef.current = setInterval(() => {
      // Add 1 to seconds every second
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // This function stops the timer
  const stopTimer = () => {
    // Stop the repeating interval using the stored ID
    clearInterval(timeRef.current);
  };

  // This function resets the timer back to 0
  const resetTimer = () => {
    setSeconds(0); // Make the timer show 0 again
  };

  return (
    <div className="container">
      <h1>Timer</h1>

      {/* Show how many minutes passed */}
      <span> {minutes} mins</span>

      {/* Show how many seconds passed (after minutes) */}
      <span> {remainingSeconds} seconds</span>

      {/* Buttons for controlling the timer */}
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
