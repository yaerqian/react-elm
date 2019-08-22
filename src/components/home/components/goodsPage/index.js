import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import EleSwapper from '@/common/swapper'
import src from '@/static/image/swapperimage/1iamge.png'
import src1 from '@/static/image/swapperimage/2iamge.png'
import src2 from '@/static/image/swapperimage/3iamge.jpeg'
import src3 from '@/static/image/swapperimage/4iamge.png'
import src4 from '@/static/image/swapperimage/5iamge.png'
import src5 from '@/static/image/swapperimage/6iamge.png'
import src6 from '@/static/image/swapperimage/7iamge.jpeg'
import src7 from '@/static/image/swapperimage/8iamge.png'
import src8 from '@/static/image/swapperimage/9iamge.jpeg'
// import src9 from '@/static/image/swapperimage/10iamge.png'
import src10 from '@/static/image/swapperimage/11iamge.png'
import src11 from '@/static/image/swapperimage/12iamge.png'
import src12 from '@/static/image/swapperimage/13iamge.png'
import src13 from '@/static/image/swapperimage/14iamge.png'
import src14 from '@/static/image/swapperimage/15iamge.png'


class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            swapperList: [
                [
                    { src: src, name: '美食' },
                    { src: src1, name: '夜宵' },
                    { src: src2, name: '商超便利' },
                    { src: src3, name: '水果' },
                    
                ],
                [
                    { src: src6, name: '跑腿代购' },
                    { src: src7, name: '汉堡披萨' },
                    { src: src8, name: '厨房生鲜' },
                    { src: src14, name: '甜品饮品' },
                    { src: src4, name: '医药健康' },
                    { src: src5, name: '浪漫鲜花' },
                    { src: src12, name: '大牌惠吃' },
                    { src: src13, name: '素食' },
                ],
                [
                    { src: src10, name: '素食简餐' },
                    { src: src11, name: '地方小吃' },
                    
                ]
            ]
        }
    }

    render() {
        return (
            <div>
                <EleSwapper
                    swapperList={ this.state.swapperList }
                ></EleSwapper>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        hadAddr: state.getIn(['home', 'hadAddrAuto'])
    }
}


export default  connect(
    mapStateToProps, null
)(HomePage)