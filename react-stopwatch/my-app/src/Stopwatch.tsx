import "./Stopwatch.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [intervalID, setIntervalID] = useState(0);

  function handlePlay() {
    setPlaying(!isPlaying);
    if (isPlaying) {
      clearInterval(intervalID);
      setIntervalID(0);
    } else {
      setIntervalID(setInterval(() => setTime((t) => t + 1), 1000));
    }
  }
  return (
    <>
      <div className="circle">
        <div>{time}</div>
      </div>
      <div onClick={handlePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</div>
    </>
  );
}
