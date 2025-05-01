async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "f43d4436aacfe615683254c8cd5f2402"; // Replace with your correct OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        document.getElementById("result").innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
