    const info = {
        'url': 'https://api.openweathermap.org/data/2.5/',
        'appid': '9105b6e719f42cc11be9ea9aa38d119d'
    };

    function getWeather() {
        const cityId = document.querySelector('#city').value;
        fetch(`${info.url}weather?id=${cityId}&units=metric&APPID=${info.appid}`).then(wather => {
            return wather.json();
        }).then(showWether);
    }

    function showWether(data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.degris').innerHTML = Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.kelv').innerHTML = data.main.temp + '&deg';
        document.querySelector('.fich').textContent = data.weather[0]['description'];
        document.querySelector('.img-weather').innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    }

    getWeather();
    document.querySelector('.buton').onclick = getWeather;
    // document.querySelector('#city').onchange = getWeather;