(function (ng) {

    var mod = ng.module("mainApp", [
        "ui.router",
        "citiesModule",
        "ngMessages"
    ]);

    mod.config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);

    mod.config(['$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider.otherwise('/citiesList');
        }]);

  
})(window.angular);