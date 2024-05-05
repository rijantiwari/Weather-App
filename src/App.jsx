import React, { useState, useEffect } from "react";
import WeatherApp from "./WeatherApp";
import LocationSearch from "./LocationSearch";
import "./style.css";

const App = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    // Fetch user's current location
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCoordinates({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });

            // Call reverse geocoding function
            fetchLocationName(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchUserLocation();
  }, []);

  // Function to fetch location name using reverse geocoding
  const fetchLocationName = async (latitude, longitude) => {
    try {
      const apiKey = "32b21ff296f040988f22627495d95ac0"; // Your API key
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
      );
      const data = await response.json();
      if (data && data.features && data.features.length > 0) {
        const locationName = data.features[0].properties.formatted;
        setLocationName(locationName);
      } else {
        console.error("Location name not found");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  return (
    <div className="app-container">
      <LocationSearch
        onLocationChange={(lat, lon, name) => {
          setCoordinates({ latitude: lat, longitude: lon });
          setLocationName(name);
        }}
      />
      <main>
        {coordinates.latitude && coordinates.longitude && (
          <WeatherApp
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
            locationName={locationName} // Pass locationName as prop
          />
        )}
      </main>
    </div>
  );
};

export default App;
