class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.tempRange = document.getElementById('w-temp-range');
        this.longLat = document.getElementById('w-long-lat');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.innerHTML = `${weather.main.temp}&#176;F`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.innerHTML = `Relative Humidity: <strong>${weather.main.humidity}%</strong>`;
        this.tempRange.innerHTML = `Temperature Range: <strong>${weather.main.temp_min} - ${weather.main.temp_max}&#176;F</strong>`;
        this.longLat.innerHTML = `Coordinates: <strong>${weather.coord.lon}, ${weather.coord.lat}</strong>`;
        this.wind.innerHTML = `Wind Speed: <strong>${weather.wind.speed} m/s</strong>`;
    }
}