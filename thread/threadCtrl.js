(function() {
angular.module('rtfmApp')
       .controller('threadCtrl', function ($scope, threadRef, commentsRef, $firebaseObject, $firebaseArray) {

        var thread = $firebaseObject(threadRef);
        console.log('thread', thread);

        thread.$bindTo($scope, 'thread');
        $scope.comments = $firebaseArray(commentsRef);

        $scope.createComment = function (username, text) {
          $scope.comments.$add({
            username: username,
            text: text
          });
          $scope.username = '';
          $scope.newCommentText = '';
        };
      });
})();
