thermostat = new Thermostat();
$(document).ready(function(){
  getTempFromServer();

  $("#tempUp").click(function(){
    thermostat.tempUp();
    postTempToServer();
    updateDisplay();

  });
  $("#tempDown").click(function(){
    thermostat.tempDown();
    postTempToServer();
    updateDisplay();
  });
  $("#reset").click(function(){
    thermostat.reset();
    postTempToServer();
    updateDisplay();
  });
  $("#powerSave").click(function(){
    thermostat.togglePowerSave();
    updateDisplay();
  });

  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    postTempToServer();
    displayWeather(city);
  });
});

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=3f6c140e6471330359fda6d41c526a07';
 var units = '&units=metric';
  $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   });
updateDisplay();
}

var getTempFromServer = function(){
  $.get("http://localhost:9292/temperature",function(data){
    thermostat._degrees = data.temp;
    $('#current-city').val(data.city);
    updateDisplay();
  });
};

var postTempToServer = function(){
    $.post("http://localhost:9292/temperature",{temp: thermostat.temperature(), city: $('#current-city').val()});
}

var updateDisplay = function(){
  $("#temperatureDisplay").text(thermostat.temperature());
  $("#powerSaveDisplay").text("power save: "+thermostat.getPowerSave());
  $("#energyUsageDisplay").text("energy usage: "+thermostat.energy());
};
