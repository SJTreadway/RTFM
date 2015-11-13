(function() {
angular.module('rtfmApp')
       .controller('threadsCtrl', function($scope, threadsRef, $firebaseArray, userService) {

         $scope.threads = $firebaseArray(threadsRef);

         $scope.createThread = function(username, title) {
           $scope.threads.$add({
             username: username,
             title: title
           });
           $scope.username = '';
           $scope.newThreadTitle = '';
         };

         $scope.logout = function() {
           userService.logout();
         }

       });



})();
