import React, { Component } from 'react'
import './index.scss'
import nonegif from '@/static/image/download.gif'
import { withRouter } from 'react-router-dom'
@withRouter
class NoAddr extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <i className="iconfont icon-location"></i>
                    &nbsp;
                    <span>未能获取地址</span>
                    &nbsp;
                    <div className="point-down"></div>
                </div>
                <div className="button">
                    <div className="inner-button">
                        <i className="iconfont icon-sousuo"></i>
                        &nbsp;
                        <span>搜索饿了么商家、商品名称</span>
                    </div>
                </div>
                <div className="select-location">
                    <img src={nonegif} alt="" />
                    <h3>
                        输入地址后才能订餐哦！
                    </h3>
                    <div onClick={() => {this.toGetAddr()}}>
                        手动选择地址
                    </div>
                </div>
            </div>
        )
    }

    toGetAddr() {
        this.props.history.push('/home/getAddr')
    }
}



export default NoAddr;

