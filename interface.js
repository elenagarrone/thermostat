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
  });
};

$(document).ready(function() {
  new ThermostatView('h2.numbers');

});