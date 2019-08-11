import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import EleSwapper from '@/common/swapper'
import src from '../../../../static/image/swapperimage/1iamge.png'
import src1 from '../../../../static/image/swapperimage/2iamge.png'


class HomePage extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div>
                <EleSwapper
                    swapperList={[{ src: src, name: '美食' }, { src: src1,name:'特惠'}]}
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