/**
 * Created by Ben on 18/12/2015.
 */
angular.module('gaApp').config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/pages/index.html'
        })
        .when('/home', {
        templateUrl: 'templates/pages/index.html'
        })
        .when('/other', {
        templateUrl: 'templates/pages/other.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});