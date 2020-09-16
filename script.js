function buttonPress() {
    //this needs to trigger the whole Toronto script
    console.log("you clicked it!");
    var inputbox = document.getElementById("tex").value;
    console.log(inputbox);
    cityName = inputbox;
    key = "a7f69847d0c189e31e0d5701cd667422"
    link = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&apikey=" + key;
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);

        console.log(obj);
        var temperature = obj.main.temp;
        var temphigh = obj.main.temp_high;
        var templow = obj.main.temp_low;
        var cityNa = obj.name;
        let weatherArray = obj.weather;
        //console.log(weatherArray);

        //pick data out of array inside JSON object
        //console.log(weatherArray[0].description);


        //console.log(cityNa);

        //this is how you put JSON into HTML
        document.getElementById("demo").innerHTML = "The current temp in " + obj.name + " is " + temperature + "C, the wind speed is " + obj.wind.speed + ".";
        //https://www.w3schools.com/js/js_json_parse.asp

        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
        } else {
            console.log("The city doesn't exist! Kindly check");
        }
    }
    request.send();






}
cityName = "Toronto, CA";
key = "a7f69847d0c189e31e0d5701cd667422"
link = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&apikey=" + key;
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function() {
    var obj = JSON.parse(this.response);

    console.log(obj);
    var temperature = obj.main.temp;
    var temphigh = obj.main.temp_high;
    var templow = obj.main.temp_low;
    var cityNa = obj.name;
    let weatherArray = obj.weather;
    //console.log(weatherArray);

    //pick data out of array inside JSON object
    //console.log(weatherArray[0].description);


    //console.log(cityNa);

    //this is how you put JSON into HTML
    document.getElementById("demo").innerHTML = "The current temp in " + obj.name + " is " + temperature + "C, the wind speed is " + obj.wind.speed + ".";
    //https://www.w3schools.com/js/js_json_parse.asp

    if (request.status >= 200 && request.status < 400) {
        var temp = obj.main.temp;
    } else {
        console.log("City not found.");
    }
}
request.send();