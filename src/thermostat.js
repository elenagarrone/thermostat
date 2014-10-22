function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
};



Thermostat.prototype.increaseTemperature = function() {
	// this.temperature = this.temperature + 1;
	// this.temperature++
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	// this.temperature = this.temperature + 1;
	// this.temperature--;
	return this.decreaseTemperatureBy(1)
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	return this.temperature -= degrees;
};

Thermostat.prototype.maxTemp = function() {
	if(this.isPowerSaverOn) {
		this.increaseTemperatureBy(5);
		return this.temperature;
	} else {
		this.increaseTemperatureBy(12);
		return this.temperature;
	};
};

// Thermostat.prototype.maxTemp = function() {
// 	return 25;
// };

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