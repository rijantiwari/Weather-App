import React, { useState } from "react";

const Footer = ({ onUnitChange }) => {
  const [selectedUnit, setSelectedUnit] = useState("C");

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    onUnitChange(unit);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button
          onClick={() => handleUnitChange("C")}
          style={{
            color: selectedUnit === "C" ? "black" : "gray",
            border: "none",
            background: "none",
            marginRight: "5px",
            cursor: "pointer",
            fontWeight: selectedUnit === "C" ? "bold" : "normal",
            fontSize: selectedUnit === "C" ? "1.2rem" : "1rem",
          }}
        >
          C
        </button>
        <span>|</span>
        <button
          onClick={() => handleUnitChange("F")}
          style={{
            color: selectedUnit === "F" ? "black" : "gray",
            border: "none",
            background: "none",
            marginLeft: "5px",
            cursor: "pointer",
            fontWeight: selectedUnit === "F" ? "bold" : "normal",
            fontSize: selectedUnit === "F" ? "1.2rem" : "1rem",
          }}
        >
          F
        </button>
      </div>
    </div>
  );
};

export default Footer;
