var typeCalculator = angular.module('typeCalculator.controllers', ['ionic', 'ngResource'])

typeCalculator.controller("TypeCtrl", function($scope, Types) {
  // all types are created as objects with a name and lists of weaknesses,
  // resistances, and immunities
  $scope.Types = Types.getTypes();

  //initialized as empty because default type is not assigned
  type1= $scope.Types.fair;
  $scope.type2="";


  var lookup = {};
  for (var prop in $scope.Types) {
      lookup[$scope.Types[prop].name] = prop;
  };

  $scope.weaknesses = type1.weakTo;
  $scope.resistances = type1.resists;
  $scope.immunities = type1.immuneTo;

  $scope.calculateAll = function(tName) {
    setType1(tName);
    calculateW(type1);
    calculateR(type1);
    calculateI(type1);
  }

  calculateW = function(typeObj) {$scope.weaknesses  = typeObj.weakTo;};
  calculateR = function(typeObj) {$scope.resistances = typeObj.resists;};
  calculateI = function(typeObj) {$scope.immunities  = typeObj.immuneTo;};

  setType1 = function(tName) {type1 = $scope.Types[lookup[tName]]};
  setType2 = function(tName) {$scope.type2= tName;};
  $scope.setTypes = function(t1,t2) {
    setType1(t1);
    setType2(t2);
  };

});
