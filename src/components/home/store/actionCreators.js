import * as actionTypes from './actionTypes';

// 切换是否获取到位置的状态
export const toggleAddrStatus = (status) => ({
    type: actionTypes.TOGGLE_ADDR_STATUS,
    status
})

export const changeAddr = (status) => ({
    type: actionTypes.CHANGE_ADDR,
    status
})

