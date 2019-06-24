import React, { Component } from 'react';
import './index.scss'

class Footer extends Component {


    render() {
        return (
            <div className="ele-footer">
                <div className="item">
                    <i className="iconfont">&#58883;</i>
                    <span>首页</span> 
                </div>
                <div className="item">
                    <i className="iconfont">&#59070;</i>
                    <span>发现</span>
                </div>
                <div className="item">
                    <i className="iconfont">&#58904;</i>
                    <span>订单</span>
                </div>
                <div className="item">
                    <i className="iconfont">&#58880;</i>
                    <span>我的</span>
                </div>
            </div>
        )
    }

}

export default Footer