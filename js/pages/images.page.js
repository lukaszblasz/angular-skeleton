import template from './images.template.html';

import './../services/services';

import './../components/results/results.component';
import './../components/searchbox/searchbox.component'

import * as searchActions from '../actions/search';

class imagesFeaturedController {

    constructor(dataService, $ngRedux, $scope, dictionaryService) {
        this.$scope = $scope;
        this.$ngRedux = $ngRedux;
        this.dataService = dataService;
        this.featuredImageHeader = dictionaryService.getValue('featuredImagesText');

        const unsubscribe = $ngRedux.connect(this.mapStateToThis, searchActions)(this);
        $scope.$on('$destroy', unsubscribe);

        this.getImages();
    }

    getImages(searchText){
        this.$ngRedux.dispatch(searchActions.rdRequestImages());
        this.dataService.getImagesList(searchText).then((responce) => {
            this.$ngRedux.dispatch(searchActions.rdReceiveImages(responce.data.items));
        });
    }

    mapStateToThis(state) {
        return {
            items: state.search.images,
            searchText: state.search.searchText
        }
    }
}

imagesFeaturedController.$inject = [
    'dataService',
    '$ngRedux',
    '$scope',
    'dictionaryService'
];

var imagesFeaturedPageComponent = {
    controller: imagesFeaturedController,
    template: template
};

angular.module('imagesPageComponentModule', [
    'servicesModule',
    'resultsComponentModule',
    'searchBoxComponentModule',
]).component('imagesPageComponent', imagesFeaturedPageComponent);