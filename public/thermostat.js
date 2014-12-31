function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
	this.maximumTemperature = 25;
}

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if((this.temperature + degrees) >= this.maximumTemperature) {
		return this.maximumTemperature;
	} else {
		return this.temperature += degrees;
	}
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if((this.temperature - degrees) < this.minTemperature) {
		return this.minTemperature;
	} else {
		return this.temperature -= degrees;
	}
};

Thermostat.prototype.maxTempPowerSaverOff = function() {
	var max = this.maximumTemperature = 32;
	return max;
};

Thermostat.prototype.tooglePowerSaving = function() {
	if(this.isPowerSaverOn) {
		this.maxTempPowerSaverOff();
		var powerOff = this.isPowerSaverOn = false;
		return powerOff;
	} else {
		this.maximumTemperature = 25;
		var powerOn = this.isPowerSaverOn = true;
		return powerOn;
	}
};

Thermostat.prototype.resetTemp = function() {
	var temp = this.temperature = 20;
	return temp;
};
