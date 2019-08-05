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
            // 定位中的状态 只有页面第一次加载的时候显示
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
                        this.props.hadAddrAuto ? this.props.address:'未能获取地址'}</span>
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
                {this.props.hadAddrAuto? this.getIndexInfo() : this.getPosition()}
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

    getIndexInfo() {
        return(
            <div>
                有地址信息了，加载首页信息
            </div>
        )
    }

    componentDidMount() {
        if (this.props.hadAddrAuto) {
            // dosomething such as get data
            this.setState({
                loadingPosition: false
            })
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
        hadAddrAuto: state.getIn(['home', 'hadAddrAuto']),
        address: state.getIn(['home', 'address'])
    }
}

export default connect(
    mapStateToProps, null
)(NoAddr);

