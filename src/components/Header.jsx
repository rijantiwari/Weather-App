import React, { useEffect, useState } from "react";
import "../style.css";

const Header = ({ location, weather }) => {
  const [displayedLocation, setDisplayedLocation] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Simulate typewriter effect
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedLocation(location.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > location.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed of typing here (milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, [location]);

  // Blinking cursor animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Adjust blinking speed here (milliseconds)

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="header">
      <p>
        Right Now in <span>{displayedLocation}</span>
        <span className={showCursor ? "cursor" : ""}></span>, {weather}
      </p>
    </div>
  );
};

export default Header;
