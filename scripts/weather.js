// https://home.openweathermap.org/api-keys
// API Key: 8245a9121b8feedd01026a650bf0f15b

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
