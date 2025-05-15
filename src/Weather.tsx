import { useState, useEffect } from 'react';
import './Weather.css';

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState('hanoi');
  
  // Fixed background image URL - using the provided Vietnam mountains image
  const backgroundImage = "https://static.vinwonders.com/production/mountains-in-Vietnam-banner.jpg";

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      try {
        // Using OpenWeatherMap API
        const API_KEY = '7e9d09d21e34f7c6762d526c4105c6a4';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Weather data not available');
        }
        
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(`Failed to fetch weather data: ${err instanceof Error ? err.message : 'Unknown error'}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  // Handle city input change
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will trigger the useEffect to fetch new data
  };

  return (
    <div 
      className="weather-widget"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="weather-overlay"></div>
      
      <div className="weather-content">
        <h2>Weather Widget</h2>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={city} 
            onChange={handleCityChange} 
            placeholder="Enter city name"
          />
          <button type="submit">Get Weather</button>
        </form>
        
        {loading ? (
          <div className="loading-placeholder">
            <p>Loading weather data...</p>
          </div>
        ) : error ? (
          <div className="loading-placeholder">
            <p className="error">{error}</p>
          </div>
        ) : weatherData && (
          <div className="weather-info">
            <h3>{weatherData.name}, {weatherData.sys.country}</h3>
            <div className="temperature">
              <span className="temp">{Math.round(weatherData.main.temp)}°C</span>
              <span className="feels-like">
                Feels like: {Math.round(weatherData.main.feels_like)}°C
              </span>
            </div>
            <div className="conditions">
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt={weatherData.weather[0].description} 
              />
              <span>{weatherData.weather[0].description}</span>
            </div>
            <div className="details">
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind: {weatherData.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
