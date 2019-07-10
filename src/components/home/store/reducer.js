// import * as actionTypes from './actionType'
import {
    fromJS
} from 'immutable'

const defaultState = fromJS({
    hadAddrAuto: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}