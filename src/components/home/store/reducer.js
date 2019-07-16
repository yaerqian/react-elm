import * as actionTypes from './actionTypes'
import {
    fromJS
} from 'immutable'

const defaultState = fromJS({
    hadAddrAuto: false
});

export default (state = defaultState, action) => {
    if (action.type === actionTypes.TOGGLE_ADDR_STATUS) {
        return state.set('hadAddrAuto', action.status)
    }

    return state;
}