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
           resole: {
             threadsRef: function(threadService) {
               return threadService.getThreads();
             }
           }
         })
         .state('thread', {
           url: '/threads/:threadId',
           templateUrl: '/threads/thread.html',
           controller: 'threadCtrl',
           resolve: {
             threadRef: function(threadService, $stateParams) {
               return threadService.getThreads($stateParams.threadId);
             }
             commentsRef: function(threadService, $stateParams) {
               return threadService.getComments($stateParams.threadId);
             }
           }
         })

       });
})();
