import template from './searchbox.template.html';
import config from './../../config/config';

import * as searchActions from '../../actions/search';

import './../../services/services';

class searchBoxComponentController {
    constructor($ngRedux, $scope, dictionaryService) {
        this.$scope = $scope;
        this.$ngRedux = $ngRedux;
        this.searchPlaceholder = dictionaryService.getValue('searchBoxPlaceholderText');

        const unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state) {
        return {
            searchText: state.search.searchText
        }
    }

    updateTextFieldValue(){
        this.$ngRedux.dispatch(searchActions.rdUpdateTextField(this.searchText));
    }
}



searchBoxComponentController.$inject = [
    '$ngRedux',
    '$scope',
    'dictionaryService'
];

const searchBoxComponent = {
    template: template,
    controller: searchBoxComponentController
};

angular.module('searchBoxComponentModule', [
    'servicesModule'
]).component('searchBoxComponent', searchBoxComponent);

