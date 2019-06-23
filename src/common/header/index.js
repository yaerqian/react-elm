import React, { Component } from 'react'
import './index.scss'

class Header extends Component {

    // constructor(props) {
    //     super(props)
    // };

    render() {
        const { name } = this.props;
        return (
                <header id="head_top">
                    <i class="iconfont head_logo">&#59170;</i>
                    {name === "login" && <h1>login</h1>}
                    {/* {name === "search" && <div>search</div>} */}
                </header> 
        )
    }
}

export default Header