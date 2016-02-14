var typeCalculator = angular.module('typeCalculator.controllers', ['ionic'])

typeCalculator.controller("TypeCtrl", ['$scope', function($scope) {
  //initialized as empty because default type is not assigned
  var type1="Bug"
  var type2=""
  //adding some symbolic constants
  var bug="Bug"; var dark="Dark"; var dragon="Dragon"; var elec="Electric";
  var fairy="Fairy"; var fight = "Fighting"; var fire="Fire"; var fly="Flying";
  var ghost="Ghost"; var grass="Grass"; var ground="Ground"; var ice="Ice";
  var norm="Normal"; var pois="Poison"; var psych="Psychic"; var rock="Rock";
  var steel="Steel"; var water="Water";

  var bug ={name:"Bug",       weakTo:[fire,fly,rock], resists:[figh,gras,grou], immuneTo:[] };
var dark={name:"Dark",      weakTo:[bug,figh,fair], resists:[dark,ghos], immuneTo:[psyc] };
var drag={name:"Dragon",    weakTo:[drag,ice,fair], resists:[elec,fire,gras,wate], immuneTo:[] };
var elec={name:"Electric",  weakTo:[grou],  resists:[elec,fly,stee], immuneTo:[] };
var fair={name:"Fairy",     weakTo:[pois,stee], resists:[bug,dark,figh], immuneTo:[drag] };
var figh={name:"Fighting",  weakTo:[fair,fly,psyc], resists:[bug,dark,rock], immuneTo:[] };
var fire={name:"Fire",      weakTo:[grou,rock,wate], resists:[bug,fair,fire,gras,ice,stee], immuneTo:[] };
var fly ={name:"Flying",    weakTo:[elec,ice,rock], resists:[bug,figh,gras], immuneTo:[grou] };
var ghos={name:"Ghost",     weakTo:[dark,ghost],  resists:[bug,pois], immuneTo:[figh,norm] };
var gras={name:"Grass",     weakTo:[bug,fire,fly,ice,pois], resists:[elec,gras,grou,wate], immuneTo:[] };
var grou={name:"Ground",    weakTo:[gras,ice,wate], resists:[pois,rock], immuneTo:[elec] };
var ice ={name:"Ice",       weakTo:[figh,fire,rock,stee], resists:[ice], immuneTo:[] };
var norm={name:"Normal",    weakTo:[figh], resists:[], immuneTo:[ghos] };
var pois={name:"Poison",    weakTo:[grou,psyc], resists:[bug,fair,figh,gras,pois], immuneTo:[] };
var psyc={name:"Psychic",   weakTo:[bug,dark,ghos], resists:[figh,psyc], immuneTo:[] };
var rock={name:"Rock",      weakTo:[figh,gras,grou,stee,wate], resists:[fire,fly,norm,pois], immuneTo:[] };
var stee={name:"Steel",     weakTo:[figh,fire,grou], resists:[bug,drag,fair,fly,gras,ice,norm,psyc,rock,stee], immuneTo:[pois] };
var wate={name:"Water",     weakTo:[elec,gras], resists:[fire,ice,stee,wate], immuneTo:[] };

  $scope.typeList = [ bug, dark, dragon, elec, fairy, fight, fire,
                      fly, ghost, grass, ground, ice, norm, pois,
                      psych, rock, steel, water ];
  var typeListB= [ bug, dark, dragon, elec, fairy, fight, fire,
                      fly, ghost, grass, ground, ice, norm, pois,
                      psych, rock, steel, water ];

  $scope.typeListCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  weaknessDict = {"Bug":[fire,fly,rock],
                         "Dark":[bug,fight, fairy],
                         "Dragon":[dragon,ice,fairy],
                         "Electric":[ground],
                         "Fairy":[pois, steel],
                         "Fighting":[fairy,fly,psych],
                         "Fire":[ground,rock,water],
                         "Flying":[elec,ice,rock],
                         "Ghost":[dark,ghost],
                         "Grass":[bug,fire,fly,ice,pois],
                         "Ground":[grass,ice,water],
                         "Ice":[fight,fire,rock,steel],
                         "Normal":[fight],
                         "Poison":[ground,psych],
                         "Psychic":[bug,dark,ghost],
                         "Rock":[fight,grass,ground,steel,water],
                         "Steel":[fight,fire,ground],
                         "Water":[elec,grass]};
  //does not include immunities
  resistDict = {"Bug":[fight,grass,ground],
                      "Dark":[dark,ghost],
                      "Dragon":[elec,fire,grass,water],
                      "Electric":[elec,fly,steel],
                      "Fairy":[bug,dark,fight],
                      "Fighting":[bug,dark,rock],
                      "Fire":[bug,fairy,fire,grass,ice,steel],
                      "Flying":[bug,fight,grass],
                      "Ghost":[bug,pois],
                      "Grass":[elec,grass,ground,water],
                      "Ground":[pois,rock],
                      "Ice":[ice],
                      "Normal":[],
                      "Poison":[bug,fairy,fight,grass,pois],
                      "Psychic":[fight,psych],
                      "Rock":[fire,fly,norm,pois],
                      "Steel":[bug,dragon,fairy,fly,grass,ice,norm,
                    psych,rock,steel],
                      "Water":[fire,ice,steel,water]};
  //immunity dictionary
  immuneDict = {"Dark":[psych],
                       "Fairy":[dragon],
                       "Flying":[ground],
                       "Ghost":[fight,norm],
                       "Ground":[elec],
                       "Normal":[ghost],
                       "Steel":[pois]
                       }
  //DRM refers to damage recieved multiplier
  neutralDRM = {"Bug":1.,"Dark":1.,"Dragon":1.,
                "Electric":1.,"Fairy":1.,"Fighting":1.,
                "Fire":1.,"Flying":1.,"Ghost":1.,
                "Grass":1.,"Ground":1.,"Ice":1.,
                "Normal":1., "Poison":1.,"Psychic":1.,
                "Rock":1., "Steel":1., "Water":1.};

  setType1 = function(type) {type1= type;};
  setType2 = function(type) {type2= type;};
  $scope.setTypes = function(t1,t2) {
    setType1(t1);
    setType2(t2);
  }
  $scope.getType1 = function() {return type1;};
  $scope.getType2 = function() {return type2;};

  //DRM refers to damage recieved multiplier
  updateDRM = function(test,existingDRM, weakTo, resists, immuneTo)
  {
    var updatedDRM = {};
//    var lisst=["Dark","Fighting","Flying"];
//    for (x in lisst) {
//      updatedDRM.push({
//        key: x,
//        value: 4})//existingDRM[type]*2.;
//    };
//    for (type in resists) {
//      updatedDRM[type]=existingDRM[type]*0.5;
//    };
//    for (type in immuneTo) {
//      updatedDRM[type]=existingDRM[type]*0;
//    };
//    updatedDRM[bug]=test;
//    updatedDRM[fairy]=existingDRM[fairy]*5;
    for (type in typeListB) {
      if (type in weakTo) {
        updatedDRM[type]=2.0;
//      } else if (type in resists) {
//        updatedDRM[type]=existingDRM[type]*0.5;
//      } else if (type in immuneTo) {
//        updatedDRM[type]=0;
      } else {
        updatedDRM[type]=1.0;
      };
    };
    return updatedDRM;
  };

  //calculate resistances and weakness for inputted types
  // 1x for neutral, 2x for a se, 1/2x for nve, and 0x for immune
  $scope.calculateDRM = function(typeA, typeB) {
      firstDRM = updateDRM(typeA,neutralDRM, weaknessDict[typeA],
        resistDict[typeA], immuneDict[typeA]);
      //secondDRM = updateDRM(firstDRM, weaknessDict[typeB],
      //  resistDict[typeB], immuneDict[typeB]);

      return firstDRM;
    };


}]);
