# Weather Widget

A responsive weather application built with React, TypeScript, and Vite that provides real-time weather information for any city worldwide.

![Weather Widget Screenshot](https://static.vinwonders.com/production/mountains-in-Vietnam-banner.jpg)

## Features

- **Real-time Weather Data**: Fetches current weather conditions from OpenWeatherMap API
- **City Search**: Search for weather information in any city around the world
- **Responsive Design**: Optimized for all device sizes from mobile phones to desktop computers
- **Visual Weather Information**: Displays temperature, feels-like temperature, humidity, wind speed, and weather conditions with icons
- **Error Handling**: Graceful error handling with user-friendly messages
- **Loading States**: Visual feedback during data fetching
- **Beautiful UI**: Clean interface with a scenic background image

## Tech Stack

- **React 19**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Vite**: For fast development and optimized builds
- **CSS3**: For styling with responsive design principles
- **OpenWeatherMap API**: For weather data
- **ESLint**: For code quality

## Getting Started

### Prerequisites

- Node.js (version 18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/miro789/Weather-Widget.git
   cd Weather-Widget
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Usage

1. The app initially loads with weather data for Hanoi, Vietnam
2. Enter a city name in the search box
3. Click "Get Weather" or press Enter
4. View the current weather conditions for the specified city

## API Key

This project uses the OpenWeatherMap API. The API key is included in the source code for demonstration purposes. For a production application, you should:

1. Create a `.env` file in the root directory
2. Add your API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
3. Update the code to use the environment variable:
   ```typescript
   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
   ```

## Future Enhancements

- Weather forecast for upcoming days
- Geolocation to automatically detect user's city
- Unit conversion (Celsius/Fahrenheit)
- Dark mode support
- Weather alerts and notifications
- Saving favorite locations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Background image from [VinWonders](https://vinwonders.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

