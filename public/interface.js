function ThermostatView(element) {
  this.element = $(element);
  this.thermostat = new Thermostat;
  this.element.text(this.thermostat.temperature);
  this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemperature);
  this.bindTo('.decrease_temperature', this.thermostat, this.thermostat.decreaseTemperature);
  this.bindTo('.reset', this.thermostat, this.thermostat.resetTemp);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
  $(selector).on('click', function() {
    $('h2.numbers').text(func.call(obj));
        if(parseInt($('h2.numbers').text()) > 25)
          $('.den').css('background-color', 'red');
        else if(parseInt($('h2.numbers').text()) > 18)
          $('.den').css('background-color', 'yellow');
        else
          $('.den').css('background-color', '#3ADF00');
  });
};

$(document).ready(function() {
  new ThermostatView('h2.numbers');

  $('.checkbox').prop('checked', function(){
    this.thermostat.tooglePowerSaving;
  });

});