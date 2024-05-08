import React, { useState } from "react";

const LocationSearch = ({ onLocationChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          searchTerm
        )}&apiKey=32b21ff296f040988f22627495d95ac0`
      );
      const data = await response.json();
      if (data.features.length > 0) {
        const { lat, lon } = data.features[0].properties;
        const city = data.features[0].properties.city;
        const country = data.features[0].properties.country;
        const locationName = `${city}, ${country}`;
        onLocationChange(lat, lon, locationName);
        setSearchTerm(""); // Clearing the input area
      } else {
        console.error("Location not found");
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default LocationSearch;
