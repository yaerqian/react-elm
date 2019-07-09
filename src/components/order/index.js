import React, { Component } from 'react'
import img from '../../static/image/download.png'
import './index.scss'
class Order extends Component {

    render() {
        return(
            <div>
                <div className="order-not-login">
                    <img src={img} alt=""/>
                    <h3>登录后查看外卖订单</h3>
                    <div>
                        立即登录
                    </div>
                </div>
            </div>
        )
    }

}

export default Order;