import React, { useState } from "react";

const LocationSearch = ({ onLocationChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          searchTerm
        )}&apiKey=32b21ff296f040988f22627495d95ac0`
      );
      const data = await response.json();
      if (data.features.length > 0) {
        const { lat, lon } = data.features[0].properties;
        const locationName = data.features[0].properties.formatted;
        onLocationChange(lat, lon, locationName); // Pass locationName to the handler
      } else {
        console.error("Location not found");
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationSearch;
