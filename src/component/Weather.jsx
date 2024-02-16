import React, { useState, useEffect } from 'react';

const apiKey = 'a6293e6b812017b8d9f070ca57709147';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(`${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        });
    }
  }, []); 

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const { main, name } = weatherData;
  const temperature = main.temp;

  return (
    <p className='getTemperature'>
      {`${temperature}°C: ${name}`}
    </p>
  );
}

export default WeatherComponent;