const temperature = document.getElementById("input");
const element = document.getElementById("submit");

element.addEventListener("click", convert1);

function convert1() {
  let temp = Number(temperature.value);
  
  if (isNaN(temp)) {
    alert("Please enter a number");
    return;
  }
  document.getElementById("output").innerHTML = " <h2>Results</h2>";
  let option = document.getElementById("select").value;
  if (option == "celcius") {
    let fahrenheit = (temp * 9 / 5) + 32;
    let kelvin = temp + 273.15;
    document.getElementById("output").innerHTML += "<p>" + fahrenheit + " Fahrenheit" + "</p>" + "<p>" + kelvin + " Kelvin</p>";
    
  }
  else if (option == "fahrenheit") {
    let celsius = (temp - 32) * 5 / 9;
    let kelvin = (temp - 32) * 5 / 9 + 273.15;
    document.getElementById("output").innerHTML += celsius + " Celsius" + "<p>" + kelvin + " Kelvin</p>";
  }
  else if (option == "kelvin") {
    let celsius = temp - 273.15;
    let fahrenheit = (temp - 273.15) * 9 / 5 + 32;
    document.getElementById("output").innerHTML += celsius + " Celsius" + "<p>" + fahrenheit + " Fahrenheit</p>";
  }
}