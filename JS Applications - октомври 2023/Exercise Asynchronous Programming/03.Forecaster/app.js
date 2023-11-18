function attachEvents() {
  const baseURI = "http://localhost:3030/jsonstore/forecaster/";
  const locationsURI = "/locations";
  const currentConditionURI = "/today";
  const upcomingURI = "/upcoming";

  const inputFieldRef = document.getElementById("location");
  const getWeatherBtn = document.getElementById("submit");
  const forecastRef = document.querySelector("div#forecast");
  const currentWeatherRef = document.querySelector("div#current");
  const upcomingWeatherRef = document.querySelector("div#upcoming");

  const conditions = {
    "Sunny": "&#x2600",
    "Partly sunny": "&#x26C5",
    "Overcast": "&#x2601",
    "Rain": "&#x2614",
    "Degrees": "&#176",
  };

  getWeatherBtn.addEventListener("click", getWeather);

  function getWeather() {
    fetch(baseURI + locationsURI)
    .then(res => res.json())
    .then(data => {
        const cityIndex = data.findIndex(el => el.name === inputFieldRef.value)
        forecastRef.style.display = "block"
        if (cityIndex === -1) {
            throw new Error();
        }
        let cityCode = data[cityIndex].code;
       
        //current weather
        fetch(`baseURI + currentConditionURI + /${cityCode}`)
        .then(res => res.json())
        .then(data =>{
            //main div
            const forecasts = document.createElement("div");
            forecasts.className = "forecasts";

            //condition symbol span
            const conditionSymbol = document.createElement("span");
            conditionSymbol.className = "condition symbol";
            conditionSymbol.innerHTML = conditions[data.forecast.condition];
            forecasts.appendChild(conditionSymbol);

            //condition info spans
            let condition = document.createElement("span");
            condition.className = "condition"

            //span 1
            const span1 = document.createElement("span");
            span1.className = "forecast-data";
            span1.textContent = data.name;
            condition.appendChild(span1);

            //span 2
            const span2 = document.createElement("span");
            span2.className = "forecast-data";
            span2.textContent = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`;
            condition.appendChild(span2);

            //span 3
            const span3 = document.createElement("span");
            span3.className = "forecast-data";
            span3.textContent = data.forecast.condition;
            condition.appendChild(span3);

            forecasts.appendChild(condition);
            currentWeatherRef.appendChild(forecasts);
        })
    })
  }


  
}

attachEvents();
