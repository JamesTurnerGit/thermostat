$(document).ready(function() {
  console.log("test")
  var thermoStat= new ThermoStat
  $('#temp_display').text("current temp: " + thermoStat.temperature +" degrees")
  $('#power_save_display').text("power save on: " + thermoStat.isPowerSaving)
  $('#energy_usage_display').text("energy usage: " + thermoStat.usage())
  $('#tempUP').click(function(){
    thermostat.up()
    $('#temp_display').text("current temp: " + thermoStat.temperature +" degrees")
  })
})
