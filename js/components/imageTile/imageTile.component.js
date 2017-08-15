import template from './imageTile.template.html';

class imageTileComponentController {
    constructor() {

    }
}

const imageTileComponent = {
    controller: imageTileComponentController,
    template: template,
    bindings: {
        details: '<',
    }
};

angular.module('imageTileComponentModule', [])
    .component('imageTileComponent', imageTileComponent);