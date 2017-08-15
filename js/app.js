import './../styles/all.scss';

import 'angular';
import './../node_modules/angular-apimock/dist/angular-apimock';
import 'ng-redux';

import './router/routerMain';
import config from './config/config';
import rootReducer from './reducers/index'

angular.module('skeletonApp',
    [
        'apiMock',
        'ngRedux',
        'routerModule'
    ])
    .config([
        '$locationProvider',
        'apiMockProvider',
        '$ngReduxProvider',
        function ($locationProvider, apiMockProvider, $ngReduxProvider) {

            //html5 mode need to be activate later
            $locationProvider.html5Mode({
                enabled: false,
                requireBase: false
            });

            apiMockProvider.config({
                mockDataPath: config.mockDataPath,
                apiPath: config.apiPath,
                delay: 500 //simulate server delays
            });

            //This is required by redux chrome extension, should be removed later
            if(window.__REDUX_DEVTOOLS_EXTENSION__){
                $ngReduxProvider.createStoreWith(rootReducer, [], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
            }
            else {
                $ngReduxProvider.createStoreWith(rootReducer);
            }
        }
    ])
    .run(($ngRedux, $rootScope, $timeout) => {
        //This is required by redux chrome extension, should be removed later
        $ngRedux.subscribe(() => {
            //console.log($ngRedux.getState());
            $timeout(() => {$rootScope.$apply(() => {})}, 100);
        });
    });

angular.element(function() {
    var apps = document.querySelectorAll('.skeleton-app');

    angular.forEach(apps, function(node){
        //for all app instances
        angular.bootstrap(node, ['skeletonApp']);
    });
});
