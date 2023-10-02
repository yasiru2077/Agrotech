import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../../api/fetchWeather';

function CropManagementPage() {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        calculateScore();
    }, [weatherData]);

    const calculateScore = () => {
        let count = 0;

        weatherData.forEach((weather) => {
            const maxTemp = Math.round(weather.main.temp_max);
            const maxTemp1 = Math.round(weather.main.temp_min);
            const humidity = weather.main.humidity;
            const windSpeed = weather.wind.speed;
            const visibility = weather.visibility;
            const sunriseTime = new Date(weather.sys.sunrise * 1000);
            const sunsetTime = new Date(weather.sys.sunset * 1000);
            const timeDifference = sunsetTime - sunriseTime;
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));

            if (maxTemp < 35 && maxTemp1 > 10) {
                count++;
            }

            if (humidity > 60) {
                count++;
            }

            if (windSpeed < 10) {
                count++;
            }

            if (visibility > 400) {
                count++;
            }

            if (hours > 9) {
                count++;
            }
        });

        setScore(count);
    };

    const fetchWeatherData = async () => {
        try {
            const data = await fetchWeather(query);
            setWeatherData([data]);
            setQuery('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div>
            <div className="main-container p-4 flex flex-col">
                <h1 className='padd text-2xl text-center p-5'>Crop Management Page</h1>
                <input
                    type="text"
                    className="search p-2 text-center rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Search Your Desired Area For cultivation...."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            fetchWeatherData();
                        }
                    }}
                />
                {weatherData.map((weather, index) => (
                    <div key={index} className="city mt-4 rounded-lg shadow-md p-4 bg-white">
                        <div>

                        </div>
                        <h2 className="city-name text-2xl font-semibold text-gray-800">
                            <span>{weather.name}</span>
                            <sup className="text-gray-600 ml-1">{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp mt-2 text-4xl font-bold text-gray-900">
                            {Math.round(weather.main.temp)}
                            <sup className="text-2xl">&deg;C</sup>
                        </div>
                        <div className="info mt-4 flex items-center">
                            <img
                                className="city-icon w-12 h-12"
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                alt={weather.weather[0].description}
                            />
                            <p className="ml-2 text-lg text-gray-800">{weather.weather[0].description}</p>
                        </div>
                        {/* Additional Weather Details */}
                        <div className="additional-details mt-4 text-gray-600">

                            <p>Min Temp: {Math.round(weather.main.temp_min)}&deg;C</p>
                            <p>Max Temp: {Math.round(weather.main.temp_max)}&deg;C</p>
                            <p>Feels Like: {Math.round(weather.main.feels_like)}&deg;C</p>
                            <p>Humidity: {weather.main.humidity}%</p>
                            <p>Wind Speed: {weather.wind.speed} m/s</p>
                            <p>Wind Direction: {weather.wind.deg}&deg;</p>
                            <p>Cloudiness: {weather.clouds.all}%</p>
                            <p>Visibility: {weather.visibility} meters</p>
                            <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
                            <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
                            <p>Data Calculation Time: {new Date(weather.dt * 1000).toLocaleTimeString()}</p>
                            <p>Pressure: {weather.main.pressure}</p>
                        </div>
                        <div>
                    <h1 className='font-bold text-2xl'>Score: {((score / 5) * 100).toFixed(2)}%</h1>
                    {score === 0 ? (
                        <h1 className='font-bold text-2xl'>Please pick a suitable location</h1>
                    ) : score / 5 > 0.6 ? (
                        <h1 className='font-bold text-2xl'>This is a good location for a paddy field</h1>
                    ) : (
                        <h1 className='font-bold text-2xl'>This location is not good for rice</h1>
                    )}
                </div>
                    </div>
                ))}
                

            </div>
        </div>
    );
}

export default CropManagementPage;
