const apiKey = "b06ae261d171615a8cdaf2c9b12daf3a";
let city = "";

// TODO : Create function to get weather data from API
function getWeatherData(city) {
  // Construct URL for API request
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  // Fetch weather data from API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Pass data to displayCurrentWeather function
      displayCurrentWeather(data);
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

// TODO : Create function to display current weather data
function displayCurrentWeather(data) {
  const cityNameEl = document.getElementById("city-name");
  const temperatureEl = document.getElementById("temperature");
  const humidityEl = document.getElementById("humidity");
  const windSpeedEl = document.getElementById("wind-speed");

  
  cityNameEl.textContent = data.name;
  temperatureEl.textContent = `${Math.round(data.main.temp)}°F`;
  humidityEl.textContent = `${data.main.humidity}%`;
  windSpeedEl.textContent = `${Math.round(data.wind.speed)} mph`;
}

// TODO: Create function to display forecast weather data
function displayForecast() {
  const forecastEl = document.getElementById("forecast");
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

     let forecastHtml = "";
     dailyData.forEach(day => {
      const date = new Date(day.dt * 1000);
      const icon = day.weather[0].icon;
      const temp = `${Math.round(day.main.temp)}°F`;
      const wind = `${Math.round(day.wind.speed)} mph`;
      const humidity = `${day.main.humidity}%`;
}

// TODO: Create function to handle form submission
function handleFormSubmit(event) {
  
}

// TODO: Add event listener to form submit button
document
  .getElementById("search-button")
  .addEventListener("click", handleFormSubmit);
