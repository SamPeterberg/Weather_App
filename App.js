let searchButton = document.getElementById("search-button");

// searchButton.addEventListener("click", fetchData);

async function fetchData() {
  let city = document.getElementById('city-input').value;
  let APIkey = "d8ab5627583a592d3f7a7025aa69d9e5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`; // Added units=metric for Celsius

  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const errorMessage = document.getElementById('error-message');

  // Clear previous error message
  errorMessage.textContent = '';
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('City not found');
    }
    
    const data = await response.json();
    
    // Update the DOM with the fetched data
    cityName.textContent = data.name;
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
  } catch (error) {
    // Display error message
    errorMessage.textContent = error.message;
  }
}
