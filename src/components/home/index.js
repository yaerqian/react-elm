import React, { Component } from 'react'
import { connect } from 'react-redux';
import NoAddr from './components/noAddr'
import GetAddr from './components/getAddr'
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

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             hadAddrAuto: true
    //         })
    //     }, 2000);
    // }
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