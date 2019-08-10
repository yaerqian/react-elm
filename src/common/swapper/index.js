import React, { Component } from 'react';
// import { connect } from 'react-redux';
import src from '../../static/image/swapperimage/1iamge.png'
import './index.scss'

export default class EleSwapper extends Component {

    constructor(props) {
        super(props);
        this.handleTouchMove = this.handleTouchMove.bind(this);
    }

    render() {

        const swapperList = this.props.swapperList.map(item => {
            return (
                <div className="swapper-item" key={item.name}>
                    <img src={src} alt="" />
                    <div>{item.name}</div>
                </div>
            )
        })

        return(
            <div className="swapper">
                <div className="swapper-list">
                    <div className="swapper-content" 
                        onTouchMove={(e) => this.handleTouchMove(e)}>
                        {swapperList}

                    </div>
                    <div className="swapper-content">
                        {swapperList}

                    </div>
                </div>
            </div>
        )

        
    }

    handleTouchMove(e) {
        e.persist()
        console.log(e)
        // console.log('123')
    }

    componentDidMount() {
        console.log(this.props)
    }
}


