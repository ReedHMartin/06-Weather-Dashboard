const apiKey = "b06ae261d171615a8cdaf2c9b12daf3a";
let city = "";

// TODO: Create function to get weather data from API
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

// TODO: Create function to display current weather data
function displayCurrentWeather() {
  
}

// TODO: Create function to display forecast weather data
function displayForecast() {
  
}

// TODO: Create function to handle form submission
function handleFormSubmit(event) {
  
}

// TODO: Add event listener to form submit button
document
  .getElementById("search-button")
  .addEventListener("click", handleFormSubmit);
