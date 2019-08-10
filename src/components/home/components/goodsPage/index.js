import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import EleSwapper from '@/common/swapper'

class HomePage extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div>
                <EleSwapper
                    swapperList={[{ src: '23', name: '美食' },{src:'23',name:'特惠'}]}
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