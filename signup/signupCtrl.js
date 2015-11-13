(function() {
angular.module('rtfmApp')
       .controller('signupCtrl', function($scope, userService, $state) {

         $scope.register = function(newUser) {
           return userService.register(newUser).then(function() {
             newUser.email = '';
             newUser.password = '';
             console.log('signup successful');
             $state.go('threads');
           });
         };

         $scope.toLogin = function() {
           $state.go('login');
         };



       });



})();
