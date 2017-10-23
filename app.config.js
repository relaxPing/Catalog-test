/**
 * Created by X.P on 10/20/2017.
 */
angular.
    module('test').
    config(['$locationProvider','$routeProvider',
    function configure($locationProvider,$routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/home',{
                template:'<home></home>'
        }).when('/movie',{
            template:'<movie-search></movie-search>'
        }).when('/music',{
            template:'<music-search></music-search>'
        }).when('/phone',{
            template:'<phone-search></phone-search>'
        }).when('/music/:musicId',{
            template:'haha'
        }).otherwise('/home');
    }
]);