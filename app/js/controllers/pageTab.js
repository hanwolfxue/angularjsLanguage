/**
 * Created by user on 2016/7/18.
 */
controllers.controller('pageTabController', ['$scope', '$rootScope', '$location','$translate',
    function ($scope, $rootScope, $location,$translate) {
    $scope.changeCN = function () {
        $translate.use('cn');
    };
    $scope.changeUS = function () {
        $translate.use('us');
    };
}])
