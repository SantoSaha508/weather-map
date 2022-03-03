const API_KEY = `e5b72f904adfd4057126a4ebcc1071a5
`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const display = (id, cityName) => {
    document.getElementById(id).innerText = cityName;
}

const displayTemperature = temperature => {
    console.log(temperature)
    display('city', temperature.name);
    display('temp', temperature.main.temp);
    display('comment', temperature.weather[0].main);
}