'use strict'
Object.defineProperty(exports, '__esModule',  { value: true });
exports.planet = exports.resourcetype = void 0;
var resourcetype;
(function (resourcetype){
    resourcetype[resourcetype['mineral'] = 0] = 'mineral';
    resourcetype[resourcetype['water'] = 1] = 'water';
    resourcetype[resourcetype['oxygen'] = 2] = 'oxygen';
    resourcetype[resourcetype['plant'] = 3] = 'plant';
})(resourcetype || (exports.resourcetype = resourcetype = {}));
var planet = /** @class */(function(){
    function planet(name, resources, danger ) {
    this.name = name;
    this.resources = resources;
    this.danger = danger;
    }
    return planet;
}());
exports.planet = planet;