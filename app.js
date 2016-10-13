
angular.module('News', ['ui.router', 'ngMaterial'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('food', {
      url: '/food',
      templateUrl: '/food.html',
      controller: 'FoodCtrl'
    })
    .state('moreFood', {
      url: '/moreFood',
      templateUrl: '/moreFood.html',
      controller: 'MoreFoodCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]) 
.factory('foodFactory', [function(){
  var o = {
    food: []
  };
  return o;
}])
.factory('moreFoodFactory', [function(){
  var o = {
    moreFood: []
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}])
.controller('FoodCtrl', [
'$scope',
'$stateParams',
'foodFactory',
function($scope, $stateParams, foodFactory){
  $scope.food = foodFactory.food;
  console.log("i'm here")
  console.log("The food scope: " + $scope.food)
  console.log(foodFactory.food)

  $scope.addFood = function(){
    if($scope.formContent === '') { return; }
    $scope.food.push({
      title: $scope.formContent,
      image: $scope.image,
      upvotes: 0,
      comments: [
      ]
    });
    $scope.formContent = '';
  };

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.food.comments.push({
      body: $scope.body,
      upvotes: 0
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    comment.upvotes += 1;
  };
}])
.controller('MoreFoodCtrl', [
'$scope',
'$stateParams',
'moreFoodFactory',
function($scope, $stateParams, moreFoodFactory){
  $scope.moreFood = moreFoodFactory.moreFood;

  $scope.addMoreFood = function(){
    if($scope.formContent === '') { return; }
    $scope.moreFood.push({
      title: $scope.formContent,
      image: $scope.image,
      upvotes: 0,
      comments: [
      ]
    });
    $scope.formContent = '';
  };

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.moreFood.comments.push({
      body: $scope.body,
      upvotes: 0
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    comment.upvotes += 1;
  };
}]);
