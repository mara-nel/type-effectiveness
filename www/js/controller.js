var typeCalculator = angular.module('typeCalculator.controllers', ['ionic', 'ngResource'])

typeCalculator.controller("Gen6Ctrl", function($scope, Types6, DamRecCalculator) {
  // all types are created as objects within an object and contain a
  // name, weaknesses, resistances, and immunities
  var Types = Types6.getTypes();
  $scope.TypeNames = Types6.getTypeNames();

  var currentDRC=DamRecCalculator.emptyDRC();

  //create an object to lookup types by string name
  var lookup = Types6.getLookUp();

  //function called when CALC button is pressed
  $scope.calculateAll = function(tName1,tName2) {
    DamRecCalculator.resetDRC(Types, currentDRC);
    DamRecCalculator.calculateDRC(Types[lookup[tName1]],Types, currentDRC);
    DamRecCalculator.calculateDRC(Types[lookup[tName2]],Types, currentDRC);
    results = DamRecCalculator.calculateWRI(currentDRC);
    $scope.weaknesses = results.weakTo;
    $scope.resistances = results.resistTo;
    $scope.immunities = results.immuneTo;
    $scope.veryWeak = results.veryWeakTo;
    $scope.veryResist = results.veryResistTo;
  };
})

typeCalculator.controller("Gen25Ctrl", function($scope, Types25, DamRecCalculator) {
  // all types are created as objects within an object and contain a
  // name, weaknesses, resistances, and immunities
  var Types = Types25.getTypes();
  $scope.TypeNames = Types25.getTypeNames();

  var currentDRC=DamRecCalculator.emptyDRC();

  //create an object to lookup types by string name
  var lookup = Types25.getLookUp();

  //function called when CALC button is pressed
  $scope.calculateAll = function(tName1,tName2) {
    DamRecCalculator.resetDRC(Types, currentDRC);
    DamRecCalculator.calculateDRC(Types[lookup[tName1]],Types, currentDRC);
    DamRecCalculator.calculateDRC(Types[lookup[tName2]],Types, currentDRC);
    results = DamRecCalculator.calculateWRI(currentDRC);
    $scope.weaknesses = results.weakTo;
    $scope.resistances = results.resistTo;
    $scope.immunities = results.immuneTo;
    $scope.veryWeak = results.veryWeakTo;
    $scope.veryResist = results.veryResistTo;
  };
})

typeCalculator.controller("Gen1Ctrl", function($scope, Types1, DamRecCalculator) {
  // all types are created as objects within an object and contain a
  // name, weaknesses, resistances, and immunities
  var Types = Types1.getTypes();
  $scope.TypeNames = Types1.getTypeNames();

  var currentDRC=DamRecCalculator.emptyDRC();

  //create an object to lookup types by string name
  var lookup = Types1.getLookUp();

  //function called when CALC button is pressed
  $scope.calculateAll = function(tName1,tName2) {
    DamRecCalculator.resetDRC(Types, currentDRC);
    DamRecCalculator.calculateDRC(Types[lookup[tName1]],Types, currentDRC);
    DamRecCalculator.calculateDRC(Types[lookup[tName2]],Types, currentDRC);
    var results = DamRecCalculator.calculateWRI(currentDRC);
    $scope.weaknesses = results.weakTo;
    $scope.resistances = results.resistTo;
    $scope.immunities = results.immuneTo;
    $scope.veryWeak = results.veryWeakTo;
    $scope.veryResist = results.veryResistTo;
  };
})


typeCalculator.controller("TypeCtrl", function($scope, $ionicSideMenuDelegate, $location) {
  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.go = function ( path ) {
  $location.path( path );
  };
});
