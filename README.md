# 🌦️ Weather App

This is a simple Weather Application developed as part of my virtual internship with [Internee.pk](https://internee.pk/). The app provides real-time weather updates for a city entered by the user using the **OpenWeatherMap API**. It is built using **HTML**, **CSS**, and **JavaScript**, showcasing my front-end development and API integration skills.

## 🔗 Live Demo

👉 [Click here to view the live site](https://sampeterberg.github.io/Weather_App/)

---

## 📌 Features

- 🌍 Search for any city's current weather
- 🌡️ Displays:
  - Temperature
  - Weather description (e.g., cloudy, sunny)
- 🔄 Automatically updates based on the input
- 💡 Error handling for invalid city names

---

## 🛠️ Technologies Used

| Technology     | Purpose                    |
|----------------|----------------------------|
| HTML           | Markup & structure          |
| Tailwind CSS   | Basic styling               |
| JavaScript     | Fetch API, dynamic updates  |
| OpenWeatherMap | Weather data source         |

---

## 📁 File Structure

Weather_App/
├── index.html # Main HTML file
├── Tailwind Css # Styling file for UI (if available)
├── script.js # JavaScript for logic and API calls
└── .gitattributes # Git configuration

---

## ⚙️ How It Works

1. The user enters a city name in the input field.
2. On submit, JavaScript fetches data from the **OpenWeatherMap API**.
3. The app dynamically displays the temperature, weather description, wind speed, and humidity.
4. If an invalid city is entered, a relevant error message is shown.

---

## 🚀 Setup Instructions

To run the app locally:

```bash
1. Clone this repository:
   git clone https://github.com/SamPeterberg/Weather_App.git

2. Open the folder:
   cd Weather_App

3. Open index.html in your browser:
   double-click index.html
```
🔑 API Key Usage
This app uses the OpenWeatherMap API. You need your own API key to run it locally.

Sign up at OpenWeatherMap

Replace the API key in script.js:

javascript
Copy
Edit
const apiKey = "YOUR_API_KEY";

🙋‍♂️ Author
Sameer Ahmed
Virtual Intern at Internee.pk
GitHub: @SamPeterberg
Email: sameerahmedgorgaij@gmail.com

📄 License
This project is open-source and available under the MIT License.

💬 Feedback
If you have any suggestions or find a bug, feel free to open an issue or send a pull request. I’d love to improve it further!
