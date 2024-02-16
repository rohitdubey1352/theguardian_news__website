import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import gradient1 from '../assets/Image/Gradient1.png'
import gradient2 from '../assets/Image/Gradient6.png'

const WeatherGrid = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const apiKey = 'a6293e6b812017b8d9f070ca57709147';
        const cityIds = ['1270583', '7279746', '1270642', '1269515'];

        const fetchData = async () => {
            try {
                const promises = cityIds.map(async (cityId) => {
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`
                    );
                    return response.data;
                });

                const data = await Promise.all(promises);
                console.log(data);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
    };

    return (
        <Grid>
            <div className="weather-grid">
                {weatherData.map((data, index) => (
                    <div key={index} className="weather-card">
                        <h2>{data.name}</h2>
                        <img className="gradient" src={gradient1} alt="img1" />
                        <p>
                            <strong>Temperature:</strong><br /> <span className="celsius"> {kelvinToCelsius(data.main.temp).toFixed(2)}</span><strong>°C</strong>
                        </p>
                        <p><strong>Weather:</strong> {data.weather[0].description}</p>
                        <p><strong>Wind:</strong> {data.wind.speed}{` m/s`}</p>
                        <p><strong>Pressure:</strong> {data.main.pressure}{` hPa`}</p>
                        {/* Add more details based on your needs */}
                        <img className="gradient_1" src={gradient2} alt="img2" />
                    </div>
                ))}
            </div>
        </Grid>
    );
};

export default WeatherGrid;

const Grid = styled.main`
position: relative;

.weather-grid {
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.weather-card {
  border: 1px solid #fff;
  text-align: center;
  position: relative;
  width: 18.35rem;
  height: 32rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.05),
              8px 8px 15px rgba(0, 0, 0, 0.10);
  transition: all 0.3s;
  background: #ffffff;
  
    .gradient{
        position: absolute;
        bottom: 13%;
        right: 0;
        height: auto;
    }
    .gradient_1{
        position: absolute;
        left: 0;
        bottom: -12rem;
        height: 100%;
        opacity: 90%;
    }
}
.card_wave{
    transform: rotate(180deg);
    margin-top: -8.9rem;
    // z-index: -1;
}
h2{
    position: relative;
    font-size: 2.8rem;
    margin-top: 2.5rem;
    font-family: Playfair Display;
    letter-spacing: 0.065rem; 
    z-index: 1;
}
p{
    position: relative;
    font-family: 'Montserrat';
    margin: 1rem 0;
    z-index: 1;
}

.celsius{
    font-size: 5rem; 
    font-weight: 700;
    color: #232323;
    font-family: 'Montserrat';
    line-height: 210px;
}

@media screen and (max-width: 720px){
    .weather-grid {
        margin-bottom: 5rem;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        height: 84vh;
        overflow-y: hidden;
    }
}

`