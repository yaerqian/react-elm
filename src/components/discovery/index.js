import React, { Component } from 'react'
import './index.scss'
class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList:[
                {
                    "corner_marker": "限时优惠",
                    "image_hash": "7ecadf8ae0fd52a0eb56f4332fb61ac2jpeg",
                    "original_price": 3,
                    "points_required": 90,
                    "title": "3元品质联盟红包",
                    "url": "https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/"
                },
                {
                    "corner_marker": "特价换购",
                    "image_hash": "eb5605a11eae79849240113271dd1b94jpeg",
                    "original_price": 239,
                    "points_required": 9,
                    "title": "数码经络按摩仪",
                    "url": "https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/"
                },
                {
                    "corner_marker": "热门商品",
                    "image_hash": "5785c1ca7ceca079926933ca418c9eb7jpeg",
                    "original_price": 99,
                    "points_required": 9,
                    "title": "扫地机器人",
                    "url": "https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/"
                },
            ]
        }
    }

    render() {
        return(
            <div className="discover">
                <div className="container">
                    <div className="title">
                        限时好礼
                    </div>
                    <div className="sub-title">
                        金币换好礼
                    </div>
                    <div className="activelist">
                        {
                            this.state.activeList.map(i => {
                                return (
                                    <div className="item" key={i.corner_marker}>
                                        <span className="itemTitle">
                                            {i.corner_marker}
                                        </span>
                                        <img src={i.url} alt="" />
                                        <div className="itemName">{i.name}</div>
                                        <div className="itemCoin">
                                            <span className="coin">{i.points_required}金币</span>
                                            <span className="noCost">￥{i.original_price}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showMore">
                         查看更多 >
                    </div>
                </div>
            </div>
        )
    }

}

export default Discovery;