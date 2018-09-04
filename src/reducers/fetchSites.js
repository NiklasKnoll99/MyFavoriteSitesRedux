import { FETCH_SITES } from '../actions/fetchSites';

export const initialState = [];

const fetchSites = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SITES:
            if (action.skip > 0)
                return [...state, ...action.jsonObjects];
            else
                return [...action.jsonObjects];

        default:
            return state;
    }
};

export default fetchSites;