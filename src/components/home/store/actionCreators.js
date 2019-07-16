import * as actionTypes from './actionTypes';


export const toggleAddrStatus = (status) => ({
    type: actionTypes.TOGGLE_ADDR_STATUS,
    status
})