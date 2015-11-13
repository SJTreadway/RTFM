(function() {
angular.module('rtfmApp', ['ui.router', 'firebase'])
       .constant('fb', {
            url: "https://st-angular-firebase.firebaseio.com/",
          })
       .config(function($stateProvider, $urlRouterProvider) {

         $urlRouterProvider.otherwise('/threads');

         $stateProvider
         .state('threads', {
           url: '/threads',
           templateUrl: '/threads/threads.html',
           controller: 'threadsCtrl',
           resolve: {
             threadsRef: function(threadsService) {
               return threadsService.getThread();
             }
           }
         })
         .state('thread', {
           url: '/threads/:threadId',
           templateUrl: '/thread/thread.html',
           controller: 'threadCtrl',
           resolve: {
             threadRef: function(threadsService, $stateParams) {
               return threadsService.getThread($stateParams.threadId);
             },
             commentsRef: function(threadService, $stateParams) {
               return threadService.getComments($stateParams.threadId);
             }
           }
         })
         .state('login', {
           url: '/login',
           templateUrl: '/login/login.html',
           controller: 'loginCtrl'
         })
         .state('logout', {
           url: '/logout',
           controller: function(userService) {
             userService.logout();
             console.log('you have successfully logged out')
           }
         })
         .state('signup', {
           url: '/signup',
           templateUrl: '/signup/signup.html',
           controller: 'signupCtrl'
         })

       });
})();
