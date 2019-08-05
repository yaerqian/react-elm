import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux';
import { actionCreator } from '../../store' 
import { withRouter } from 'react-router-dom'
@withRouter
class GetAddr extends Component {
    constructor() {
        super();
        this.state = {
            addrList: [
                { name: '杭州市', id: '1' },
                { name: '苏州市', id: '2' },
            ],
            address:'',
        }
    }

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
                        <input 
                        type="text"
                        value={this.state.address} 
                        onChange={this.inputChange.bind(this)} 
                        placeholder="请输入地址" />
                    </div>

                </div>
                {
                    this.addressList()
                }
            </div>
        )
    }

    // 获取地址列表
    addressList() {
        if(this.state.address) {
            return (
                <div className="addr-list">
                    {
                        this.state.addrList.map(item => {
                            return (
                                <div onClick={() => { this.selectAddress(item.name) }} key={item.id}>{item.name}</div>
                            )
                        })
                    }
                </div>
            )
        }
    }


    // 处理输入框change事件
    inputChange(e) {
        let value = e.target.value;
        // console.log(e.target.value)
        this.setState({
            address: value
        })
    }

    // 选择地址
    selectAddress(addr) {
        this.props.handleSelectAddress(addr);
        this.props.handleAddrStatus(true);
        console.log(addr)
        this.props.history.push({
            pathname:'/home/noaddr'
        })
    }

    // 后退
    goback() {
        if (!this.props.hadAddrAuto) {
            this.props.history.push({
                pathname: '/home/noaddr',
                params: {
                    fromPosition: true
                },
                // query: {
                //     user: 'wh'
                // }
            })
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
        // 更改 store 中的获取定位的状态
        handleAddrStatus(status) {
            dispatch(actionCreator.toggleAddrStatus(status))
        },

        // 选中并保存地址到 redux
        handleSelectAddress(addr) {
            dispatch(actionCreator.changeAddr(addr))
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(GetAddr);
// export default ;