var typeCalculator = angular.module('typeCalculator.controllers', ['ionic'])

typeCalculator.controller("TypeCtrl", function($scope) {
  $scope.typeList = [ "Bug", "Dark", "Dragon", "Electric",
                    "Fairy", "Fighting", "Fire", "Flying",
                    "Ghost", "Ground", "Ice", "Normal",
                    "Poison", "Psychic", "Rock", "Steel",
                    "Water"];
  $scope.typeListCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
});
