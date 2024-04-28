import { spacecraft } from './spacecraft';
import { planet, resourcetype } from './planet';
import { event } from './event';
import * as funcionality from './funcionality';

//Se crea la logica del simulador
const ship: spacecraft = {health: 200, loadcapacity: 100, speed: 50};
const planet1 = new planet('planet1',  resourcetype.mineral, false);
const event1: event = {name: 'acid raid', affectshealth: true, affectscharger: false};


funcionality.explore('north');
funcionality.gatherResources<number>(planet1, 10);
funcionality.handleevent(event1);

console.log(planet1);
console.log(event1);
console.log(ship);