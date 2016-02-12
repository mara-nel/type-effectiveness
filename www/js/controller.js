var typeCalculator = angular.module('typeCalculator.controllers', ['ionic'])

typeCalculator.controller("TypeCtrl", ['$scope', function($scope) {
  var type1=""
  $scope.typeList = [ "Bug", "Dark", "Dragon", "Electric",
                    "Fairy", "Fighting", "Fire", "Flying",
                    "Ghost", "Grass","Ground", "Ice", "Normal",
                    "Poison", "Psychic", "Rock", "Steel",
                    "Water"];
  $scope.typeListCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  $scope.weaknessDict = {"Bug":["Fire","Flying","Rock"],
                         "Dark":["Bug","Fighting", "Fairy"],
                         "Dragon":["Dragon","Ice","Fairy"],
                         "Electric":["Ground"],
                         "Fairy":["Poison", "Steel"],
                         "Fighting":["Fairy","Flying","Psychic"],
                         "Fire":["Ground","Rock","Water"],
                         "Flying":["Electric","Ice","Rock"],
                         "Ghost":["Dark","Ghost"],
                         "Grass":["Bug","Fire","Flying","Ice","Poison"],
                         "Ground":["Grass","Ice","Water"],
                         "Ice":["Fighting","Fire","Rock","Steel"],
                         "Normal":["Fighting"],
                         "Poison":["Ground","Psychic"],
                         "Psychic":["Bug","Dark","Ghost"],
                         "Rock":["Fighting","Grass","Ground","Steel","Water"],
                         "Steel":["Fighting","Fire","Ground"],
                         "Water":["Electric","Grass"]};
  //does not include immunities
  $scope.resistDict = {"Bug":["Fighting","Grass","Ground"],
                      "Dark":["Dark","Ghost"],
                      "Dragon":["Electric","Fire","Grass","Water"],
                      "Electric":["Electric","Flying","Steel"],
                      "Fairy":["Bug","Dark","Fighting"],
                      "Fighting":["Bug","Dark","Rock"],
                      "Fire":["Bug","Fairy","Fire","Grass","Ice","Steel"],
                      "Flying":["Bug","Fighting","Grass"],
                      "Ghost":["Bug","Poison"],
                      "Grass":["Electric","Grass","Ground","Water"],
                      "Ground":["Poison","Rock"],
                      "Ice":["Ice"],
                      "Normal":[],
                      "Poison":["Bug","Fairy","Fighting","Grass","Poison"],
                      "Psychic":["Fighting","Psychic"],
                      "Rock":["Fire","Flying","Normal","Poison"],
                      "Steel":["Bug","Dragon","Fairy","Flying","Grass","Ice","Normal",
                    "Psychic","Rock","Steel"],
                      "Water":["Fire","Ice","Steel","Water"]};


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
