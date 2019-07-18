import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    withRouter,
} from 'react-router-dom'
import { actionCreator } from './store' 
@withRouter
class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hadAddrAuto : false
    //     }
    // }


    render() {
        return(
            <div style={{height: '100%'}}>
                首页商品页
            </div>
        )
    }

    componentDidMount() {

        // console.log(store)
        setTimeout(() => {
            if (!this.props.hadAddrAuto) {
                this.props.history.push('/home/getAddr')
            }           
        }, 2000);
    }
}
const mapStateToProps = (state) => {
    return {
        hadAddrAuto: state.getIn(['home', 'hadAddrAuto'])
    }
}

// export default ;
export default connect(
    mapStateToProps, null
)(Home);