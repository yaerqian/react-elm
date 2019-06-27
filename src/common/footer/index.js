import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom'
import './index.scss'

class Footer extends Component {


    handleClick() {
        var e = window.event;
        
        // if()
    }

    render() {
        return (
            // <Router>
            <div className="ele-footer" onClick={() => this.handleClick()}>
                <div className="item">
                    {/* <Link to="/home"> */}
                        <i className="iconfont">&#58883;</i>
                        <span>首页</span> 
                    {/* </Link> */}
                </div>
                <div className="item">
                    {/* <Link to="/discovery"> */}
                        <i className="iconfont">&#59070;</i>
                        <span>发现</span>
                    {/* </Link> */}
                </div>
                <div className="item">
                    {/* <Link to="/order"> */}
                        <i className="iconfont">&#58904;</i>
                        <span>订单</span>
                    {/* </Link> */}
                </div>
                <div className="item">
                    {/* <Link to="/mine"> */}
                        <i className="iconfont">&#58880;</i>
                        <span>我的</span>
                    {/* </Link> */}
                </div>
            </div>
            // </Router>
        )
    }

}

export default Footer