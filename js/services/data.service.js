import config from './../config/config';

const dataService = [
    '$http',
    function($http){
        return {
            getImagesList: function (searchText) {
                return $http({
                    method: 'GET',
                    data: { q: searchText },
                    url: config.endpoints.resultsUrl,
                    apiMock: config.apiMockOn
                });
            }
        }
    }
];

export default dataService;