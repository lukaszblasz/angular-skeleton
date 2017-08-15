var dictionaryService = function(){
    var values = {};

    return {
        fillDictionary: function(items) {
            items.forEach(function(obj){
                values[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]];
            })
        },
        getValue: function(key){
            return values[key];
        }
    }
};

export default dictionaryService;
