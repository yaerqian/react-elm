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
                <EleSwapper></EleSwapper>
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