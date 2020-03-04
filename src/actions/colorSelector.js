import { SET_COLOR, CLEAR_COLOR } from '../constants/colorConstants';

export const setColor = (data) => ({
    type: SET_COLOR,
    data
})

export const clearColor = () => ({
    type: CLEAR_COLOR
})