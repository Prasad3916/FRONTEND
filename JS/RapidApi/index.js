var input=document.getElementById("city")
async function weatherData(value){
    var data=window.prompt("Enter City Name")
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${data}&format=json&u=c`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a37537a357msh4c295f99262249ap1c6847jsne803815414c4',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        displayData(result)
    } catch (error) {
        console.error(error);
    }
}
window.addEventListener('DOMContentLoaded',weatherData)
function displayData(data){
    var location=document.createElement("p")
    var forecasts=document.createElement("p")
    location.innerHTML=data.location.city
    forecasts.innerHTML=data.current_observation.condition.temperature
    document.body.appendChild(location)
    document.body.appendChild(forecasts)
    // console.log(data.location.city)
    // console.log(data.current_observation.condition.temperature)
}