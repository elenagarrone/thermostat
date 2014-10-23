function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
	this.maximumTemperature = 25;
};



Thermostat.prototype.increaseTemperature = function() {
	// this.temperature = this.temperature + 1;
	// this.temperature++
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if((this.temperature + degrees) > this.maximumTemperature) {
		return this.maximumTemperature;
	} else {
		return this.temperature += degrees;
	};
};

Thermostat.prototype.decreaseTemperature = function() {
	// this.temperature = this.temperature + 1;
	// this.temperature--;
	return this.decreaseTemperatureBy(1)
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	return this.temperature -= degrees;
};

Thermostat.prototype.tempPowerSaverOff = function() {
	this.tooglePowerSaving = false;
	return this.temperature = 32;
};

Thermostat.prototype.tooglePowerSaving = function() {
	if(this.isPowerSaverOn) {
		return this.isPowerSaverOn = false;
	} else {
		return this.isPowerSaverOn = true;
	};
};

Thermostat.prototype.resetTemp = function() {
	return this.temperature = 20;
};