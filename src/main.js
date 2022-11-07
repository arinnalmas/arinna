function buttonCliked(){
    var city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)//Output the API into console

        var info = data; //get data from Api
        var temp =  data.main.temp - 273.15; 
        var pressure = ("Preasure : " + data.main.pressure);
        var wind = ("Wind Speed: " + data.wind.speed);
        var humidity = ("Humidity : " + data.main.humidity)

        document.getElementById("displayc").innerHTML =city;
        document.getElementById("displayt").innerHTML =temp.toFixed(2);
        document.getElementById("displayp").innerHTML =pressure;
        document.getElementById("displayw").innerHTML =wind;
        document.getElementById("displayh").innerHTML =humidity;
    })
}