(function() {
angular.module('rtfmApp')
       .controller('loginCtrl', function($scope, userService, $state) {

         $scope.login = function() {
           userService.login($scope.user).then(function() {
             console.log('login successful');
             $scope.user.email = '';
             $scope.user.password = '';
             $state.go('threads');
           }).catch(function(err) {
             $scope.error = err;
           });
         };

         $scope.toSignup = function() {
           $state.go('signup');
         };



       });



})();
