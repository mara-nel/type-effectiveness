var typeCalculator = angular.module('typeCalculator.controllers', ['ionic', 'ngResource'])

typeCalculator.controller("TypeCtrl", function($scope, Types) {
  // all types are created as objects with a name and lists of weaknesses,
  // resistances, and immunities
  $scope.Types = Types.getTypes();

  //initialized as empty because default type is not assigned
  type1= "";
  type2="";
  var currentDRC={};
  resetDRC = function() {
    for (var prop in $scope.Types) {
        currentDRC[$scope.Types[prop].name] = 1.0;
    };
  };

  var lookup = {};
  for (var prop in $scope.Types) {
      lookup[$scope.Types[prop].name] = prop;
  };

  $scope.weaknesses = type1.weakTo;
  $scope.resistances = type1.resists;
  $scope.immunities = type1.immuneTo;

  $scope.calculateAll = function(tName1,tName2) {
    setType1(tName1);
    setType2(tName2);
    resetDRC();
    calculateDRC(type1);
    calculateDRC(type2);
    calculateWRI();
  };

  //creates a working DamageRecievedCalculator
  calculateDRC = function(typeObj1) {
    if(typeof typeObj1 === 'undefined'){} else {
      for (var prop in $scope.Types) {
        if (inWeak(typeObj1,prop) != -1) {isWeak(prop);}
        else if (inRes(typeObj1,prop) != -1) {isRes(prop);}
        else if (inImm(typeObj1,prop) != -1) {isImm(prop);}
        else {isNeu(prop);};
      };
    };
  };

  //helper functions to see if t1 is in the w/r/i list of t2
  inWeak = function(t1,t2) {return t1.weakTo.indexOf($scope.Types[t2].name);};
  inRes  = function(t1,t2) {return t1.resists.indexOf($scope.Types[t2].name);};
  inImm  = function(t1,t2) {return t1.immuneTo.indexOf($scope.Types[t2].name);};
  //helper function to set DamageRecievedCalculator appropriately
  isWeak = function(t1) {currentDRC[$scope.Types[t1].name] *= 2.0;};
  isRes  = function(t1) {currentDRC[$scope.Types[t1].name] *= 0.5;};
  isImm  = function(t1) {currentDRC[$scope.Types[t1].name] *= 0;};
  isNeu  = function(t1) {currentDRC[$scope.Types[t1].name] *= 1.0;};

  calculateWRI = function() {
    $scope.weaknesses  = [];
    $scope.resistances = [];
    $scope.immunities  = [];
    $scope.veryWeak    = [];
    $scope.veryResist  = [];

    ;
    for (var prop in currentDRC) {
      if (currentDRC[prop] == 2) {$scope.weaknesses.push(prop);}
      else if (currentDRC[prop] == 0.5) {$scope.resistances.push(prop);}
      else if (currentDRC[prop] == 0) {$scope.immunities.push(prop);}
      else if (currentDRC[prop] == 4) {$scope.veryWeak.push(prop);}
      else if (currentDRC[prop] == 0.25) {$scope.veryResist.push(prop);};
    };
  };
  calculateR = function(typeObj) {$scope.resistances = typeObj.resists;};
  calculateI = function(typeObj) {$scope.immunities  = typeObj.immuneTo;};

  setType1 = function(tName) {type1 = $scope.Types[lookup[tName]]};
  setType2 = function(tName) {type2 = $scope.Types[lookup[tName]]};
  $scope.setTypes = function(t1,t2) {
    setType1(t1);
    setType2(t2);
  };

});
