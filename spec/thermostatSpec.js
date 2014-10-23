"use strict";
describe('Thermostat', function(){

	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	describe('by default', function(){

		it('is set to 20 degrees', function(){
			expect(thermostat.temperature).toEqual(20);
		});

		it('it has a minimum temperature', function(){
			expect(thermostat.minTemperature).toEqual(10)
		});

		it('power saving mode(TM) will be on', function(){
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('power save on has a max temperature of 25', function(){
			expect(thermostat.maximumTemperature).toEqual(25);
		});

		it('power save off has a max temperature of 32', function(){
			expect(thermostat.tempPowerSaverOff()).toEqual(32);
		});

		it('can increase the temperature by one degree', function(){
			expect(thermostat.increaseTemperature()).toEqual(21);
		});

		it('can decrease the temperature by one degree', function(){
			expect(thermostat.decreaseTemperature()).toEqual(19);
		});

	});

	describe('custom options', function(){

		it('can increase the temperature by 10', function(){
			expect(thermostat.increaseTemperatureBy(3)).toEqual(23);
		});

		it('can decrease the temperature by 12', function(){
			expect(thermostat.decreaseTemperatureBy(8)).toEqual(12);
		});

		it('power saving can be switched off', function() {
			thermostat.tooglePowerSaving();
			expect(thermostat.isPowerSaverOn).toBe(false);
		});

		it('power saving can be switched on', function() {
			thermostat.tooglePowerSaving();
			thermostat.tooglePowerSaving();
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can reset the temperature to 20 degrees', function(){
			thermostat.increaseTemperatureBy(3);
			thermostat.resetTemp();
			expect(thermostat.temperature).toEqual(20)
		});

	});
});