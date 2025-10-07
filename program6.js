async function getWeather(city) {
  console.log("Loading weather data..."); 
try {
const geoResponse = await fetch(
`https://geocoding-api.open-meteo.com/v1/search?name=${city}`
);
const geoData = await geoResponse.json();
if (!geoData.results || geoData.results.length === 0) {
throw new Error("City not found!");
}
const { latitude, longitude } = geoData.results[0];
    const weatherResponse = await fetch(
     `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();

    console.log(`Current temperature in ${city}: ${weatherData.current_weather.temperature}°C`);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Weather fetch completed!");
  }
}
getWeather("Coimbatore");


