export const FETCH_SITES = 'FETCH_SITES';

export const actionData = (jsonObjects, skip) => ({
    type: FETCH_SITES,
    skip,
    jsonObjects
});

export const fetchSites = (searchStr, take, skip) => (dispatch) => {
    chayns.showWaitCursor();
    fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + searchStr + '&Skip=' + skip + '&Take=' + take)
    .then(response => response.json())
    .then(json => {
        chayns.hideWaitCursor();
        dispatch(actionData(json.Data, skip));
    });
};

export default fetchSites;