// https://home.openweathermap.org/api-keys
// API Key: 8245a9121b8feedd01026a650bf0f15b

class Weather {
    constructor(city, country) {
        this.apiKey = '8245a9121b8feedd01026a650bf0f15b';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
            this.country
            }&id=524901&APPID=${this.apiKey}&units=imperial`
            );

        const responseData = await response.json();

        return responseData;

        
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
    
}

// http://api.openweathermap.org/data/2.5/weather?q=oakland,us&id=524901&APPID=8245a9121b8feedd01026a650bf0f15b&units=imperial

/* Alternate openweathermap api
class Weather {
    constructor() {
    this.appId = "YOUR API KEY";
    this.city = "New York";
    this.country = "us";
    }
    
    async getWeather() {
    const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
    this.country
    }&id=524901&APPID=${this.appId}&units=metric`
    );
    
    const data = await response.json();
    
    return {
    data
    };
    }
    
    changeLocation(city, country) {
    this.city = city;
    this.country = country;
    }
    */
