import template from './app.template.html';
import config from './../../config/config';

import './../../services/services';

class appComponentController {

    constructor(dictionaryService, $rootElement, $ngRedux) {
        this.dictionaryService = dictionaryService;
        this.$ngRedux = $ngRedux;
        this.$rootElement = $rootElement;

        this.setupDictionary();
        if(!config.apiMockOn) {
            this.getEndpointsData();
        }
    }

    setupDictionary() {
        const dictionary = this.$rootElement[0].getAttribute('data-dictionary');

        if (dictionary) {
            this.dictionaryService.fillDictionary(JSON.parse(dictionary).items);
        }
    }

    $postLink() {
        this.$rootElement.addClass('loaded');
    }
}

appComponentController.$inject = [
    'dictionaryService',
    '$rootElement',
    '$ngRedux'
];

const appComponent = {
    template: template,
    controller: appComponentController
};

angular.module('appComponentModule', [
    'servicesModule'
]).component('appComponent', appComponent);
