(function (ng) {
    var mod = ng.module("citiesModule", ["ngMessages"]);
    mod.constant("citiesContext", "api/cities");
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            var basePath = 'src/modules/cities/';
            $urlRouterProvider.otherwise("/citiesList");
     
            $stateProvider.state('citiesList', {
                url: '/cities',
                views: {
                    'mainView': {
                        controller: 'citiesCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + 'cities.list.html'
                    }
                }
            }).state('cityCreate', {
                url: '/cities/create',
                views: {
                    'mainView': {
                        controller: 'citiesCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + 'cities.create.html'
                    }
                }

            }).state('cityEdit', {
                url: '/cities/:cityId',
                param: {
                    cityId: null
                },
                views: {
                    'mainView': {
                        controller: 'citiesCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + 'cities.create.html'
                    }
                }
            });
        }]);
})(window.angular);