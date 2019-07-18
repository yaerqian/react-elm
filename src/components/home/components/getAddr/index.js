import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux';
import { actionCreator } from '../../store' 
import { withRouter } from 'react-router-dom'
@withRouter
class GetAddr extends Component {

    render() {
        return (
            <div className="get-addr">
                <div className="select-addr-header">
                    <i className="iconfont" onClick={() => this.goback()}>&#58956;</i>
                    &nbsp;
                    <span>选择收货地址</span>
                </div>
                <div className="select-addr">
                    <div className="select-addr-select">
                        <span>选择...</span>
                        <span className="select-point-down"></span>
                    </div>
                    <div className="select-addr-input">
                        <i className="iconfont icon-sousuo"></i>
                        &nbsp;
                        <input type="text" placeholder="请输入地址" />
                    </div>
                </div>
            </div>
        )
    }

    goback() {
        if (!this.props.hadAddrAuto) {
            this.props.history.push('/home/noaddr')
        }
    }

}

const mapStateToProps = (state) => {
    return {
        hadAddrAuto: state.getIn(['home', 'hadAddrAuto'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddrStatus(status) {
            dispatch(actionCreator.toggleAddrStatus(status))
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(GetAddr);
// export default ;