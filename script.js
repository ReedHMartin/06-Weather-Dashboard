const apiKey = "b06ae261d171615a8cdaf2c9b12daf3a";
let city = "";


function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayCurrentWeather(data);
    })
    .catch(error => {
      console.log("Error:", error);
    });

  const forecastEl = document.getElementById("forecast");
  const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

  fetch(forecastApiUrl)
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

        forecastHtml += `
          <div class="forecast-day">
            <p class="forecast-date">${date.toLocaleDateString()}</p>
            <img src="https://openweathermap.org/img/w/${icon}.png" alt="${day.weather[0].description}" />
            <p class="forecast-temp">${temp}</p>
            <p class="forecast-wind">${wind}</p>
            <p class="forecast-humidity">${humidity}</p>
          </div>
        `;
      });

      forecastEl.innerHTML = forecastHtml;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

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


// TODO: Create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const searchInputEl = document.getElementById("search-input");
  const searchHistoryEl = document.getElementById("search-history");
  const searchValue = searchInputEl.value.trim();

  if (searchValue) {
    city = searchValue;
    getWeatherData(city);
  }};



// TODO: Add event listener to form submit button
document
  .getElementById("search-button")
  .addEventListener("click", handleFormSubmit);
