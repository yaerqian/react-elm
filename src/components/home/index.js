import React, { Component } from 'react'
import { connect } from 'react-redux';
import NoAddr from './components/noAddr'
import GetAddr from './components/getAddr'

import { actionCreator } from './store' 

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hadAddrAuto : false
    //     }
    // }


    render() {
        const { hadAddrAuto } = this.props

        return(
            <div style={{height: '100%'}}>
                {
                    this.tabAddr(hadAddrAuto)
                }
            </div>
        )
    }

    tabAddr(hadAddrAuto) {
        if (hadAddrAuto) {
            return (
                <GetAddr></GetAddr>
            )
        } else {
            return (
                <NoAddr></NoAddr>
            )
        }
    }

    componentDidMount() {
        // console.log(store)
        setTimeout(() => {
            this.props.handleAddrStatus(true)            
        }, 2000);
    }
}
const mapStateToProps = (state) => {
    return {
        hadAddrAuto: state.getIn(['home', 'hadAddrAuto'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddrStatus(status) {
            dispatch(actionCreator.toggleAddrStatus(status))
        }
    }
}
// export default ;
export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);