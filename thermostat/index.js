var thermoStat= new ThermoStat()

$(document).ready(function() {
  refreshDisplay()
  getWeather()
  $('#thermoStat_temp_up').click(function(){
    thermoStat.up()
    refreshDisplay()

  })
  $('#thermoStat_temp_down').click(function(){
    thermoStat.down()
    refreshDisplay()
  })
  $('#thermoStat_power_save_on').click(function(){
    thermoStat.isPowerSaving = true
    refreshDisplay()
  })
  $('#thermoStat_power_save_off').click(function(){
    thermoStat.isPowerSaving = false
    refreshDisplay()
  })
  $('#thermoStat_reset').click(function(){
    thermoStat.reset()
    refreshDisplay()
  })
  $(document).on('input','#weather_station_input',function () {
    getWeather($('#weather_station_input').val())
  })
})

function getWeather(city = "London"){
  url    = "http://api.openweathermap.org/data/2.5/weather?q="
  apiKey = "&appid=3f6c140e6471330359fda6d41c526a07"
  units  = "&units=metric"
  fullUrl= url+city+apiKey+units
  jQuery.get(fullUrl,function(data){
    $('#weather_station_display').text(city + " is: " + data.main.temp +" degrees °c")
  })
}


function refreshDisplay(){
  $('#temp_display').text("current temp: " + thermoStat.temperature +" degrees")
  $('#power_save_display').text("power save on: " + thermoStat.isPowerSaving)
  $('#energy_usage_display').text("energy usage: " + thermoStat.usage())
  var color
  if(thermoStat.usage() === 'low-usage'){color = "green"}
  if(thermoStat.usage() === 'medium-usage'){color = "black"}
  if(thermoStat.usage() === 'high-usage'){color = "red"}
  $('#energy_usage_display').css('color',color)
}
