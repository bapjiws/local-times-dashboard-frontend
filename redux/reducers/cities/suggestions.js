import {
    REQUEST_CITY_SUGGESTIONS,
    RECEIVE_CITY_SUGGESTIONS
} from '../../actions/actionTypes';

let citySuggestions = (citySuggestions = [], action) => {
    switch (action.type) {
        // case REQUEST_CITY_SUGGESTIONS:
        //     return [
        //         ...citySuggestions,
        //         {
        //
        //         }
        //     ];

        case RECEIVE_CITY_SUGGESTIONS:
            return [...action.citySuggestions.map(({ id, text }) => ({id, text}))];


        default:
            return citySuggestions;
    }
};

export default citySuggestions;