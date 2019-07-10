import React, { Component } from 'react'
import './index.scss'


class NoAddr extends Component {

    render() {
        return (
            <div className="get-addr">
                <div className="select-addr-header">
                    <i className="iconfont">&#58956;</i>
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

}

export default NoAddr;