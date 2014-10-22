"use strict";
describe('Thermostat', function(){

	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	})

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

		xit('power save on has a max temperature of 25', function(){
			expect(thermostat.maxTemp()).toEqual(25);
		});

		xit('power save off has a max temperature of 32', function(){
			thermostat.tooglePowerSaving();
			expect(thermostat.maxTemp()).toEqual(32);
		});

		it('can increase the temperature by one degree', function(){
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease the temperature by one degree', function(){
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});

	});

	describe('custom options', function(){

		it('can increase the temperature by 12', function(){
			thermostat.increaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(32);
		});

		it('can decrease the temperature by 12', function(){
			thermostat.decreaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(8);
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

	});
});