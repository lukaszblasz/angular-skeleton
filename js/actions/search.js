import * as actionTypes from './actiontypes';

function rdRequestImages(){
    return {
        type: actionTypes.REQUEST_IMAGES,
        loadingInProgress: true
    }
}

function rdReceiveImages(images){
    return {
        type: actionTypes.RECEIVE_IMAGES,
        images: images,
        loadingInProgress: false
    }
}

function rdUpdateTextField(text){
    return {
        type: actionTypes.UPDATE_TEXT_FIELD,
        searchText: text
    }
}

export {rdRequestImages, rdReceiveImages, rdUpdateTextField};