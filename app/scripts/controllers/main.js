'use strict';

/**
 * @ngdoc function
 * @name postApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the postApp
 */
angular.module('postApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('https://blog-post-heroku.herokuapp.com/api/posts')
      .then(function(posts){
        console.log(posts.data.posts);
        $scope.posts = posts.data.posts;
      });
    $scope.addPost = function(){
       console.log("adding");
       $http.post('https://blog-post-heroku.herokuapp.com/api/posts', {post: {title: $scope.title, body: $scope.body}})
        .then(function(post){
          $scope.posts.push(post.data.post);
          $scope.title = "";
          $scope.body = "";
        });
    };
    $scope.removePost = function(id){
      console.log("Removing index number: " + id);
      $http.delete('https://blog-post-heroku.herokuapp.com/api/posts/' + id)
        .then(function(){
          for (var i = $scope.posts.length - 1; i >= 0; i--) {
            if($scope.posts[i].id === id){
              $scope.posts.splice(i, 1);
            }
          }
        });
    };
  });
