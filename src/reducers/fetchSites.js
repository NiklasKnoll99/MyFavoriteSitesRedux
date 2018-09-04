import { FETCH_SITES } from '../actions/fetchSites';
import { CLEAR } from '../actions/clear';

export const initialState = [];

const fetchSites = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SITES:
            if (action.skip > 0)
                return [...state, ...action.jsonObjects];
            else
                return action.jsonObjects;

        case CLEAR:
            return [];

        default:
            return state;
    }
};

export default fetchSites;