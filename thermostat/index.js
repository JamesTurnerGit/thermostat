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

})

function getWeather(){
  url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3f6c140e6471330359fda6d41c526a07"
  jQuery.get(url,function(data){
   console.log(data.main.temp)
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
