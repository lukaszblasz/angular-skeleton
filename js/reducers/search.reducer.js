import * as actionTypes from './../actions/actiontypes'

const initialState = {};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
    case actionTypes.REQUEST_IMAGES:
        return Object.assign({}, state, {
            loadingInProgress: action.loadingInProgress
        });
    case actionTypes.RECEIVE_IMAGES:
        return Object.assign({}, state, {
            loadingInProgress: action.loadingInProgress,
            images: action.images
        });
    case actionTypes.UPDATE_TEXT_FIELD:
        return Object.assign({}, state, {
            searchText: action.searchText
        });
    default:
        return state;
    }
}
