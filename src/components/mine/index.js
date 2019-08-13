import React, { Component } from 'react'
import './index.scss'
import elem from '../../static/image/logo.png'

class Mine extends Component {

    render() {
        return(
            <div className="mine-content">
                <div className="mine-header">
                    <img src={elem} alt=""/>
                    <div className="login-conten">
                        <div className="login">登录/注册</div>
                        <div className="info"><i className="iconfont">&#58898;</i>登陆后享受更多特权</div>
                    </div>
                    <div>
                        <i className="iconfont arrow-right">&#58888;</i>
                    </div>
                </div>
                <div className="middle-content">
                    <div>
                        <i className="iconfont">&#58897;</i><span>红包</span>
                    </div>
                    <div>
                        <i className="iconfont i-second">&#58884;</i><span>金币</span>
                    </div>
                </div>
                <div className="selecton">
                    <i className="iconfont" style={{color:'#4aa5f0'}}>&#58881;</i>
                    <span className="inner-text">我的地址</span>
                    <i className="iconfont">&#58888;</i>
                </div>
                <div className="selecton" >
                    <i className="iconfont" style={{color:'#94d94a'}}>&#58894;</i>
                    <span className="inner-text">金币商城</span>
                    <i className="iconfont">&#58888;</i>
                </div>
                <div className="selecton merge">
                    <i className="iconfont" style={{color:'#fc7b53'}}>&#58885;</i>
                    <span className="inner-text">分享拿20元现金</span>
                    <i className="iconfont">&#58888;</i>
                </div>
                <div className="selecton">
                    <i className="iconfont" style={{color:'#4aa5f0'}}>&#58911;</i>
                    <span className="inner-text">我的客服</span>
                    <i className="iconfont">&#58888;</i>
                </div>
                <div className="selecton merge">
                    <i className="iconfont" style={{color:'#4aa5f0'}}>&#58883;</i>
                    <span className="inner-text">下载饿了么APP</span>
                    <i className="iconfont">&#58888;</i>
                </div>
                <div className="selecton merge">
                    <i className="iconfont" style={{color:'#4aa5f0'}}>&#58925;</i>
                    <span className="inner-text">规则中心</span>
                    <i className="iconfont">&#58888;</i>
                </div>
            </div>
        )
    }

}

export default Mine;