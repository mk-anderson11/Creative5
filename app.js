
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
.factory('postFactory', [function(){
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'postFactory',
function($scope, postFactory){
  $scope.test = 'Hello world!';

  $scope.posts = postFactory.posts;

  $scope.addPost = function(){
    if($scope.formContent === '') { return; }
    $scope.posts.push({
      title: $scope.formContent,
      upvotes: 0,
      comments: [
      ]
    });
    $scope.formContent = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}])
.controller('MoreFoodCtrl', [
'$scope',
'$stateParams',
'postFactory',
function($scope, $stateParams, postFactory){
  $scope.post = postFactory.posts[$stateParams.id];
  
  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      upvotes: 0
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    comment.upvotes += 1;
  };
}])
.controller('FoodCtrl', [
  function foodCtrl($scope) {
   // $scope.currentNavItem = 'page1';
  }
]);
