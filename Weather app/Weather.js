let searchValue = document.getElementById("searchValue");
let temperature = document.getElementById("p1");
let cityName = document.getElementById("p2");
let countryName = document.getElementById("p3");

let maxTemp = document.getElementById("p5")
let minTemp = document.getElementById("p7")
let pressure = document.getElementById("p8")
let humidity = document.getElementById("p9")

let content = document.getElementById('cont')

let search = async() =>{
    if (searchValue.value.length==0) {
        alert("please enter a city name before search")
    }

    else{

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`

        let response = await fetch(url);
        let data = await response.json();
        temperature.textContent = data.main.temp;
        cityName.textContent = data.name;
        countryName.textContent = data.sys.country;

        maxTemp.textContent = data.main.temp_max;
        minTemp.textContent = data.main.temp_min;
        pressure.textContent = data.main.pressure;
        humidity.textContent = data.main.humidity;

        if(data.main.temp > 30){
            content.style.backgroundImage = "url('hotday.webp')";
            // document.body.style.backgroundImage = "url(' ')"
        }
        else if(data.main.temp>10 && data.main.temp<30){
            content.style.backgroundImage = "url('clearsky.jpg')";
        }
        else{
            content.style.backgroundImage = "url('winter.jpg')";
        }
    }
}

// max temp , min temp, 
// pressure, humidity