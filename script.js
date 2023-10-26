function convert() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (isNaN(celsius)) {
        alert("Please enter a valid number");
        return;
    }
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    document.getElementById('result').innerHTML = celsius + " Celsius = " + fahrenheit + " Fahrenheit and " + kelvin + " Kelvin";
}