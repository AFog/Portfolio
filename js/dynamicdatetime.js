var app = angular.module('DateApp', [])
app.controller('dateController', function ($scope) {
    $scope.CurrentDate = new Date();
});

angular.bootstrap(document.getElementById("TODAY"), ['DateApp']);