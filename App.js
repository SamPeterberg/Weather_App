// let searchButton = document.getElementById("search-button");

// // searchButton.addEventListener("click", fetchData);

// async function fetchData() {
//   let city = document.getElementById('city-input').value;
//   const APIkey = "d8ab5627583a592d3f7a7025aa69d9e5";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`; // Added units=metric for Celsius

//   const cityName = document.getElementById('city-name');
//   const temperature = document.getElementById('temperature');
//   const description = document.getElementById('description');
//   const errorMessage = document.getElementById('error-message');
//   const weatherContainer = document.getElementById('weather-container');
//   const weatherIcon = document.getElementById('weather-icon');

//   // Clear previous error message
//   errorMessage.textContent = '';
//   // clear search input
//   document.getElementById('city-input').value = '';

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error('City not found');
//     }

//     const data = await response.json();

//     // Update the DOM with the fetched data
//     cityName.textContent = data.name;
//     temperature.textContent = `${data.main.temp}°C`;
//     description.textContent = data.weather[0].description;
//     weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//     weatherIcon.alt = data.weather[0].description;

//   } catch (error) {
//     // Display error message
//     errorMessage.textContent = error.message;
//   }
// }

  function getPostsFromAPI() {
      return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            if (!response.ok) {
              reject("API returned an error!");
            }
            return response.json();
          })
          .then(data => {
            resolve(data); // success
          })
          .catch(error => {
            reject("Fetch failed: " + error);
          });
      });
    }


getPostsFromAPI().then((data) => {
  console.log('done', data);
}).catch(() => {
  console.log('error');
});


 async function getUser() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        // const user = await response.json();
        console.warn("user==>>>>> ", user);
        
      } catch (error) {
        console.log("Error:", error);
      }
    }

    getUser();