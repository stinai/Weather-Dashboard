    // JavaScript code to handle API calls, localStorage, and DOM manipulation
    const apiKey = '7239d3db4b86e35334b46508a131a099';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=7239d3db4b86e35334b46508a131a099';

    // Function to get the weather data from the API
    async function getWeatherData(city) {
      const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      return data;
    }

    // Function to display current weather
    function displayCurrentWeather(weatherData) {
      // Implement this function to display current weather
    }

    // Function to display 5-day forecast
    function displayForecast(weatherData) {
      // Implement this function to display 5-day forecast
    }

    // Function to save the searched city to localStorage
    function saveToLocalStorage(city) {
      // Implement this function to save to localStorage
    }

    // Function to get the search history from localStorage
    function getSearchHistory() {
      // Implement this function to get search history from localStorage
    }

    // Function to display search history
    function displaySearchHistory(history) {
      // Implement this function to display search history
    }

    // Event listener for the search form
    document.getElementById('searchForm').addEventListener('submit', async function (e) {
      e.preventDefault();

      const cityInput = document.getElementById('cityInput');
      const cityName = cityInput.value.trim();

      if (cityName !== '') {
        // Get weather data
        const weatherData = await getWeatherData(cityName);

        // Display current weather
        displayCurrentWeather(weatherData);

        // Display 5-day forecast
        displayForecast(weatherData);

        // Save city to search history
        saveToLocalStorage(cityName);

        // Display search history
        const searchHistory = getSearchHistory();
        displaySearchHistory(searchHistory);
      }
    });