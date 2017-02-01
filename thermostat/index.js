var thermoStat= new ThermoStat()

$(document).ready(function() {
  refreshDisplay()
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

function refreshDisplay(){
  $('#temp_display').text("current temp: " + thermoStat.temperature +" degrees")
  $('#power_save_display').text("power save on: " + thermoStat.isPowerSaving)
  $('#energy_usage_display').text("energy usage: " + thermoStat.usage())
}
