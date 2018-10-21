// Init weather object

const weather = new Weather('Boston', 'US');

const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


// Close modal
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    // Get and display getWeather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});





function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
