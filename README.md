[![Code Climate](https://codeclimate.com/github/elenagarrone/thermostat/badges/gpa.svg)](https://codeclimate.com/github/elenagarrone/thermostat)

Thermostat
==========
During the sixth week of Makers Academy we had to build a thermostat using JavaScript and JQuery.

<img src='http://i57.tinypic.com/14mc0pj.jpg'>


Specification:
--------------

- [X] Thermostat starts at 20 degrees
- [X] You can increase the temp with the up button
- [X] You can decrease the temp with the down button
- [X] The minimum temperature is 10 degrees
- [X] There is a power saving mode
- [X] Power saving mode is on by default
- [X] If power saving mode is on, the maximum temperature is 25 degrees
- [X] If power saving mode is off, the maximum temperature is 32 degrees
- [X] You can reset the temperature to 20 by hitting the reset button
- [X] The thermostat should color the display based on energy usage
- [X] < 18 is green,
- [X] < 25 is yellow,
- [X] otherwise red

Technologies:
-------------
- Javascript
- Sinatra
- JQuery
- HTML/CSS
- Jasmine

On Heroku:
----------
https://your-thermostat.herokuapp.com/

To do:
------
- try to refactor duplicate code in thermostat.js:12…16 and thermostat.js:24…28

How to use:
-----------
Clone the repo:
```shell
$ git clone https://github.com/elenagarrone/thermostat.git
```
Change into the directory:
```shell
$ cd thermostat
```
Install the gems:
```shell
$ bundle install
```
Try it on localhost:
```shell
$ rackup
#then on the browser go to:
localhost:4567
```

How to test it:
--------------
Run:
```shell
$ open SpecRunner.html
```
