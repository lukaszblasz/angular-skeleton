import dictionaryService from './dictionary.service';
import dataService from './data.service';

angular.module('servicesModule', [])
    .service('dataService', dataService)
    .service('dictionaryService', dictionaryService);