import React, { Component } from 'react'

import NoAddr from './noAddr'
import GetAddr from './getAddr'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hadAddrAuto : false
        }
    }

    render() {
        return(
            <div Style="height: 100%;">
                {/* <NoAddr></NoAddr> */}
                {
                    // (() => {
                    //     if(this.state.hadAddr) {
                    //         return (
                    //             <GetAddr></GetAddr>
                    //         )
                    //     }else {
                    //         return (
                    //             <NoAddr></NoAddr>
                    //         )
                    //     }
                    // })()
                    this.tabAddr()
                }
            </div>
        )
    }

    tabAddr() {
        if (this.state.hadAddrAuto) {
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
        setTimeout(() => {
            this.setState({
                hadAddrAuto: true
            })
        }, 2000);
    }
}

export default Home;