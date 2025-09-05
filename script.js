const apiKey = "a4227f8a20e9e35a2c7a8f0e4cd70386"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kathmandu";

const async function checkWeather() {
    const response = await fetch(apiUrl + "&appid=${apiKey}");
    var data = await response.json();
    console.log(data);
  
}