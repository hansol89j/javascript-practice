const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const apiKey = "ec7d3d4c650b6eaa5e57b2cb1efb3f94";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in " + lat + " " + lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  console.log("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);