import * as actionTypes from './actionTypes'
import {
    fromJS
} from 'immutable'

const defaultState = fromJS({
    hadAddrAuto: false,
    address:''
});

export default (state = defaultState, action) => {
    if (action.type === actionTypes.TOGGLE_ADDR_STATUS) {
        return state.set('hadAddrAuto', action.status)
    }
    if (action.type === actionTypes.CHANGE_ADDR) {
        return state.set('address', action.status)
    }

    return state;
}