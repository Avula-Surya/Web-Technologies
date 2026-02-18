const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const loader = document.getElementById("loader");
const weatherResult = document.getElementById("weatherResult");

const API_KEY = "bbbda3a7cd8cad70ab09b3b7d658db9a";

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.innerHTML = "<p style='color:red;'>Please enter a city</p>";
        return;
    }

    loader.style.display = "block";
    weatherResult.innerHTML = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            console.log("Response Status:", response.status);
            if (!response.ok) {
                throw new Error("City not found or API issue");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            loader.style.display = "none";

            weatherResult.innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            loader.style.display = "none";
            weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
            console.error(error);
        });
});
