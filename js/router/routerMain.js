import 'angular-ui-router';
import config from './../config/config';

import './../components/app/app.component';
import './../pages/images.page';

angular.module('routerModule', [
    'ui.router',
    'appComponentModule',
    'imagesPageComponentModule'
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider.state('app', {
                component: 'appComponent'
            });

            $stateProvider.state('app.images', {
                url: '/',
                views: {
                    'content@app': 'imagesPageComponent'
                }
            });

            $urlRouterProvider.otherwise('/');
        }]);
