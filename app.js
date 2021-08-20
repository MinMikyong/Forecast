let weather = {
    apiKey:"eb230b8cbe920431d35e08ac8f4a58f2",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apiKey
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = name; 
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = ("https://openweathermap.org/img/wn/" + icon + "@2x.png");
        document.querySelector(".icon-box").style.display = "flex";
        document.querySelector(".desc").innerText = description;
        document.querySelector(".humidity").innerText = "humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed : " + speed + "km/hr";
        document.querySelector(".desc").style.display = "block";
        document.querySelector(".humidity").style.display = "block";
        document.querySelector(".wind").style.display = "block";
        document.querySelector(".city").style.display = "block";
        document.querySelector(".temp").style.display = "block";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})

let tempo = document.querySelector(".temp");

tempo.addEventListener("click", function(){
    if (tempo.innerText.includes("°C")){
        let tem = parseFloat(tempo.innerText)
        tempo.innerText = (tem * (9 / 5) + 32).toFixed(2) + "°F";
    }
    else{
        let tem = parseFloat(tempo.innerText)
        tempo.innerText = ((tem-32)*(5/9)).toFixed(2) + "°C";

    }
})

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
        weather.search();
    }
})

