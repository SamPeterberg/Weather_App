// Listen for Enter key to trigger search
document.getElementById('city-input').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        fetchData();
    }
});

async function fetchData() {
    const ApiKey = "d8ab5627583a592d3f7a7025aa69d9e5";
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    if (!city) return;  // Do nothing if input is empty

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    await processWeather(url);
    
    // Clear the search bar after search
    cityInput.value = '';
}
async function processWeather(url) {
    const weatherInfo = document.getElementById('weather-info');
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');
    
    // Hide weather info and error, show loading
    weatherInfo.classList.add('hidden');
    errorMessage.textContent = '';
    loading.classList.remove('hidden');
    
    

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        loading.classList.add('hidden');
        weatherInfo.classList.remove('hidden');

        // Update DOM elements with weather data
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('description').textContent = data.weather[0].description.toUpperCase();
        
        // Choose icon according to weather condition using a third party icon source
        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.src = getWeatherIconURL(data.weather[0].main);
        weatherIcon.alt = data.weather[0].description;
        
        // Add fade-in animation using Tailwind transitions
        weatherIcon.classList.add('transition', 'duration-500', 'ease-in-out', 'opacity-0');
        setTimeout(() => {
            weatherIcon.classList.remove('opacity-0');
        }, 50);
        
        // Show suggestion based on weather condition
        document.getElementById('suggestion').textContent = getSuggestion(data.weather[0].main);
    } catch (error) {
        loading.classList.add('hidden');
        errorMessage.textContent = error.message;
    } finally {
        // Hide loading spinner when done
        loading.classList.add('hidden');
    }
}

function getWeatherIconURL(condition) {
    condition = condition.toLowerCase();
    // Return icon URLs from different platforms (for example, Icons8)
    if (condition.includes("rain")) {
        // Rain icon
        return "https://img.icons8.com/fluency/96/rain.png";
    } else if (condition.includes("clear")) {
        // Sunny icon
        return "https://img.icons8.com/fluency/96/sun.png";
    } else if (condition.includes("cloud")) {
        // Cloud icon
        return "https://img.icons8.com/fluency/96/cloud.png";
    } else if (condition.includes("snow")) {
        // Snow icon
        return "https://img.icons8.com/fluency/96/snow.png";
    } else {
        // Default weather icon
        return `http://openweathermap.org/img/wn/01d@2x.png`;
    }
}

function getSuggestion(condition) {
    condition = condition.toLowerCase();
    if (condition.includes("rain")) {
        return "It looks rainy. Don't forget your umbrella!";
    } else if (condition.includes("clear")) {
        return "Clear skies! Enjoy the sunshine.";
    } else if (condition.includes("cloud")) {
        return "It's cloudy outside. A calm day ahead!";
    } else if (condition.includes("snow")) {
        return "Snow is falling. Bundle up and stay warm!";
    } else {
        return "Have a great day!";
    }
}

// Get default weather for user's current location on page load
function getCurrentLocationWeather() {
    const ApiKey = "d8ab5627583a592d3f7a7025aa69d9e5";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`;
            await processWeather(url);
        }, () => {
            document.getElementById("error-message").textContent = "Could not retrieve your location.";
        });
    } else {
        document.getElementById("error-message").textContent = "Geolocation is not supported by your browser.";
    }
}



// On page load, display weather for current location
window.addEventListener('load', getCurrentLocationWeather);