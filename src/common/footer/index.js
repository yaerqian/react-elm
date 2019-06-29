import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './index.scss'


@withRouter
class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemList: [
                { name: '首页', path: '/home', icon: '&#58883' },
                { name: '发现', path: '/discovery', icon: '&#59070;' },
                { name: '订单', path: '/order', icon: '&#58904;' },
                { name: '我的', path: '/mine', icon: '&#58880;' },
            ],
            currentIndex: 0
        }
    }

    handleClick(item, index) {
        this.props.history.push(item)
        this.setState({
            currentIndex: index
        })
    }

    render() {


        const { itemList, currentIndex } = this.state;

        return (
            <div className="ele-footer">
                    {
                        itemList.map((v, i) => {
                            return (
                                <div key={v.name} className={currentIndex === i ? "item actived": "item"} onClick={() => this.handleClick(v.path, i)}>
                                    <i className="iconfont" dangerouslySetInnerHTML={{__html: v.icon}}></i>
                                    <span>{v.name}</span>
                                </div>
                            )
                        })
                    }
            </div> 
        )
    }

}

export default Footer