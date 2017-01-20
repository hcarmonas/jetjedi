 (function() {
    'use strict';

    function menuDirective() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'src/app/directives/menu/menu.html'
        };
    }

    angular.module('app')
        .directive('menuDirective', [menuDirective]);
})();