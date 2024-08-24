const apikey = "ea969ebb4a5aafbaa90f38e672f4ed9e";

const weatherData = document.getElementById("weather-data");

const cityInput = document.getElementById("city-input");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
  try {
    const res = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)

    if(!res.ok){
        throw new Error("Network response was not ok");
    }

    const data = await res.json();

    const temperature  = Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;
  
    const details = [
        `Feels like: ${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humidity}%`,
        `Wind speed: ${data.wind.speed} m/s`,
    ]

    weatherData.querySelector(".icon").innerHTML =`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherData.querySelector(".description").textContent = description;

    weatherData.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");

  } catch (error) {
    weatherData.querySelector(".icon").innerHTML = "";
    weatherData.querySelector(".temperature").textContent = "";
    weatherData.querySelector(".description").textContent =
      "An error happened, please try again later";
    weatherData.querySelector(".details").innerHTML = "";
  }
};
