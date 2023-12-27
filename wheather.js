function getWeather() {
    const locationInput = document.getElementById("locationInput").value;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherCondition = data.weather[0].description;
            const temperature = data.main.temp;
            const otherInfo = `Humidity: ${data.main.humidity}%, Wind Speed: ${data.wind.speed} m/s`;

            document.getElementById("weather-condition").innerText = `Weather: ${weatherCondition}`;
            document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
            document.getElementById("other-info").innerText = otherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById("weather-container").innerHTML = 'Error fetching weather data. Please try again.';
        });
}