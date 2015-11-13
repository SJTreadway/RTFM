(function() {
angular.module('rtfmApp')
       .service('userService', function($firebaseAuth, fb, $state) {

         var authRef = new Firebase(fb.url);
         var auth = $firebaseAuth(authRef);


         //returns $getAuth() result
         this.getUser = function() {
           return auth.$getAuth();
         }

         //returns $createUser(newUser) result
         this.register = function(newUser) {
           return auth.$createUser(newUser)
         };

         //returns the $authWithPassword(user) result
         this.login = function(user) {
           return auth.$authWithPassword(user);
         };

         this.logout = function() {
           auth.$unauth();
         }

         auth.$onAuth(function(authData) {
           if (authData) {
             console.log('authenticated');
           } else {
             console.log('not authenticated');
             if ($state) {
               $state.go('login');
             }
           }
         })

       });



})();
