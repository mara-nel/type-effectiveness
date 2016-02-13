var typeCalculator = angular.module('typeCalculator.controllers', ['ionic'])

typeCalculator.controller("TypeCtrl", ['$scope', function($scope) {
  var type1=""
  //adding some symbolic constants
  var bug="Bug"; var dark="Dark"; var dragon="Dragon"; var elec="Electric";
  var fairy="Fairy"; var fight = "Fighting"; var fire="Fire"; var fly="Flying";
  var ghost="Ghost"; var grass="Grass"; var ground="Ground"; var ice="Ice";
  var norm="Normal"; var pois="Poison"; var psych="Psychic"; var rock="Rock";
  var steel="Steel"; var water="Water";

  $scope.typeList = [ bug, dark, dragon, elec, fairy, fight,
                      fire, fly, ghost, grass,ground, ice,
                      norm, pois, psych, rock, steel, water];
  $scope.typeListCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  $scope.weaknessDict = {"Bug":[fire,fly,rock],
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
  $scope.resistDict = {"Bug":[fight,grass,ground],
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
  $scope.immuneDict = {"Dark":[psych],
                       "Fairy":[dragon],
                       "Flying":[ground],
                       "Ghost":[fight,norm],
                       "Ground":[elec],
                       "Normal":[ghost],
                       "Steel":[pois]
                       }

  $scope.setType1 = function(type) {
    type1= type;
  };
  $scope.getType1 = function() {
    return type1;
  }

  $scope.showWeaknesses = function(type) {
    return $scope.weaknessDict[type];
  };

}]);
