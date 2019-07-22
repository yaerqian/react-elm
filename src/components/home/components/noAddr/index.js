import React, { Component } from 'react'
import './index.scss'
import nonegif from '@/static/image/download.gif'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actionCreator } from '@/store' 
@withRouter
class NoAddr extends Component {

    constructor() {
        super();
        this.state = {
            loadingPosition: true,
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <i className="iconfont icon-location"></i>
                    &nbsp;
                    <span>{this.state.loadingPosition ? '正在定位...' : 
                        this.props.hadAddrAuto ? '水银城':'未能获取地址'}</span>
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
                {this.getPosition()}
            </div>
        )
    }

    // 自动获取定位失败，需要手动选择地址
    getPosition() {
        return(
            <div className="select-location">
                <img src={nonegif} alt="" />
                <h3>
                    输入地址后才能订餐哦！
                    </h3>
                <div onClick={() => { this.toGetAddr() }}>
                    手动选择地址
                    </div>
            </div>
        )
    }

    componentDidMount() {
        if (this.props.hadAddrAuto) {
            // dosomething such as get data
        }else {
            this.setState({
                loadingPosition: true
            })
            if (this.props.location.params && this.props.location.params.fromPosition) {
                this.setState({
                    loadingPosition: false
                })
                return;
            }
            setTimeout(() => {
                this.toGetAddr();
            }, 2000);
        }
        console.log(this.props)
    }

    toGetAddr() {
        this.props.history.push('/home/getAddr')
    }
}

const mapStateToProps = (state) => {
    return {
        hadAddrAuto: state.getIn(['home', 'hadAddrAuto'])
    }
}

export default connect(
    mapStateToProps, null
)(NoAddr);

