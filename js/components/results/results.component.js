import template from './results.template.html';
import config from './../../config/config';

import './../imageTile/imageTile.component'

import './../../services/services';

class resultsComponentController {

    constructor($ngRedux, $scope, dictionaryService) {
        this.resultsHeader = dictionaryService.getValue('resultsHeader'); 
    }

    lastItemRendered(){}
}

resultsComponentController.$inject = [
    '$ngRedux',
    '$scope',
    'dictionaryService'
];

const resultsComponent = {
    template: template,
    controller: resultsComponentController,
    bindings: {
        items: '<'
    }
};

angular.module('resultsComponentModule', [
    'imageTileComponentModule',
    'servicesModule'
]).component('resultsComponent', resultsComponent);

