function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var fahrenheit = (inputTemperature * 9/5) + 32;
    var kelvin = inputTemperature + 273.15;

    document.getElementById("result").innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>Kelvin: " + kelvin.toFixed(2) + "K";
}