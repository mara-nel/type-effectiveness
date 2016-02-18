'use strict';
angular.module('typeCalculator.services', ['ionic','ngResource'])

.factory('Types', function() {
  //creating symbolic constants for types
  var  BUG="Bug";var DARK="Dark";var DRAG="Dragon";var ELEC="Electric";var FAIR="Fairy";
  var FIGH="Fighting";var FIRE="Fire";var FLY="Flying";var GHOS="Ghost";var GRAS="Grass";
  var GROU="Ground";var ICE="Ice"; var NORM="Normal";var POIS="Poison";var PSYC="Psychic";
  var ROCK="Rock";var STEE="Steel";var WATE="Water";

  var types = {
    bug:  {name:BUG,  weakTo:[FIRE,FLY,ROCK],            resists:[FIGH,GRAS,GROU],      immuneTo:[] },
    dark: {name:DARK, weakTo:[BUG,FIGH,FAIR],            resists:[DARK,GHOS],           immuneTo:[PSYC] },
    drag: {name:DRAG, weakTo:[DRAG,ICE,FAIR],            resists:[ELEC,FIRE,GRAS,WATE], immuneTo:[] },
    elec: {name:ELEC, weakTo:[GROU],                     resists:[ELEC,FLY,STEE],       immuneTo:[] },
    fair: {name:FAIR, weakTo:[POIS,STEE],                resists:[BUG,DARK,FIGH],       immuneTo:[DRAG] },
    figh: {name:FIGH, weakTo:[FAIR,FLY,PSYC],            resists:[BUG,DARK,ROCK],       immuneTo:[] },
    fire: {name:FIRE, weakTo:[GROU,ROCK,WATE],           resists:[BUG,FAIR,FIRE,GRAS,ICE,STEE], immuneTo:[] },
    fly:  {name:FLY,  weakTo:[ELEC,ICE,ROCK],            resists:[BUG,FIGH,GRAS],       immuneTo:[GROU] },
    ghos: {name:GHOS, weakTo:[DARK,GHOS],                resists:[BUG,POIS],            immuneTo:[FIGH, NORM ] },
    gras: {name:GRAS, weakTo:[BUG,FIRE,FLY,ICE,POIS],    resists:[ELEC,GRAS,GROU,WATE], immuneTo:[] },
    grou: {name:GROU, weakTo:[GRAS,ICE,WATE],            resists:[POIS,ROCK],           immuneTo:[ELEC] },
    ice:  {name:ICE,  weakTo:[FIGH,FIRE,ROCK,STEE],      resists:[ICE],                 immuneTo:[] },
    norm: {name:NORM, weakTo:[FIGH],                     resists:[],                    immuneTo:[GHOS] },
    pois: {name:POIS, weakTo:[GROU,PSYC],                resists:[BUG,FAIR,FIGH,GRAS,POIS], immuneTo:[] },
    psyc: {name:PSYC, weakTo:[BUG,DARK,GHOS],            resists:[FIGH,PSYC],           immuneTo:[] },
    rock: {name:ROCK, weakTo:[FIGH,GRAS,GROU,STEE,WATE], resists:[FIRE,FLY,NORM,POIS],  immuneTo:[] },
    stee: {name:STEE, weakTo:[FIGH,FIRE,GROU],           resists:[BUG,DRAG,FAIR,FLY,GRAS,ICE,NORM,PSYC,ROCK,STEE], immuneTo:[POIS] },
    wate: {name:WATE, weakTo:[ELEC,GRAS],                resists:[FIRE,ICE,STEE,WATE],  immuneTo:[] },
  };

  return {
    getTypes: function() {
      return types;
    },
    getType: function(typeId) {
      return types.typeId;
    }
  }
})
