
import { FETCH_COMICS_FAILURE, FETCH_COMICS_REQUEST, FETCH_COMICS_SUCCESS } from './ComicsAction';

const initialState = {
    comicsData: []

}

export const ComicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMICS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_COMICS_SUCCESS:
            console.log("success called");
           
            return {
                ...state,
                loading: false,
                comicsData: action.payload,
                error: ""
            }

        case FETCH_COMICS_FAILURE:
            return {
                ...state,
                loading: false,
                comicsData: [],
                error: action.payload
            }
        default:
            return state
    }
}
