export const CLEAR = 'CLEAR';

export const actionData = () => ({
    type: CLEAR,
});

export const clear = () => (dispatch) => {
    dispatch(actionData());
};

export default clear;