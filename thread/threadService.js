(function() {
angular.module('rtfmApp')
       .service('threadService', function() {

         this.getComments = function(threadId) {
           return new Firebase(fb.url + '/threads/' + threadId + '/comments');
         }

       });



})();
