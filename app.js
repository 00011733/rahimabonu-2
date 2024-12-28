const APY_key="d85df34f7e1d3fa6801722fc18f785a2";
const lat=41;
const lon=60;
const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APY_key}`;
const cityName=document.querySelector(".city-name");
const degree=document.querySelector(".degree");
const weatherInfo=document.querySelector(".weather-info");
const coordinates=document.querySelector(".coordinates");

fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
        
        let{name,coord,main,weather}=data;


        cityName.innerHTML=name;
        degree.innerHTML=Math.floor(main.temp - 273)+"°C";
        weatherInfo.innerHTML =weather[0].description;
        coordinates.innerHTML =`Koordinatalar: ${coord.lat}:${coord.lon}`;
        
    })
