var api_key = '6e7ec8e33eb1b1b4216ed1b0f5404030'
var btn = document.getElementById('btn')
var input = document.getElementById('input_field')
var city = document.getElementById('city')
var temp = document.getElementById('temp')
var humidity = document.getElementById('humidity')
var wind = document.getElementById('Wind')
var maxtemp = document.getElementById('maxtemp')
var icon = document.getElementById('icon')

var myapi = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        city.innerHTML = data.name
        temp.innerHTML = `${ Math.trunc(data.main.temp)}°C`
        humidity.innerHTML = `${data.main.humidity}%rh`
        wind.innerHTML = `${Math.trunc(data.wind.speed)}km/h`
        maxtemp.innerHTML = `${Math.trunc(data.main.temp_max)}°C`
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icons">`
        input.value = ""
    }).catch((err)=>{
        console.log(err)
    })
}
btn.addEventListener('click',myapi)