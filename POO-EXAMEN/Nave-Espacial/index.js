'use strict'
Object.defineProperty(exports, '__esMOdule', {value: true});
var planet_1 = requires('./planet.js');
var funcionality = requires('./funcionality.js');
// logica del simulador
var ship = {health: 200, loadcapacity:100, speed:50};
var planet1 = new planet_1.planet('planet1', planet_1.resourcetype.mineral, false);
var event1 = {name: 'acid rain', affecthealth: true, affectload: false};

funcionality.explore('north');
funcionality.gatherResources(planet1, 10);
funcionality.handleevent(event1);