import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './index.scss'

export default class EleSwapper extends Component {

    constructor(props) {
        super(props);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.state = {
            // 中间显示的容器的起始位置
            showContainer: {
                transform: 'translateX(0)'
            },
            // 另外一个不显示的容器的起始位置 默认在右边
            unShowContainer: {
                transform: 'translateX(3.75rem)',
            },

            // touchStart 事件起始位置
            touchStartPosition: 0,
            // touch 事件结束添加动画
            isEnd: false,
            // 滑动的方向
            direction: '',
            // 当前显示的是哪一个容器
            currnetDisplay: 'first'
        }
    }

    render() {

        const swapperList = this.props.swapperList.map(item => {
            return (
                <div className="swapper-item" key={item.name}>
                    <img src={item.src} alt="" />
                    <div>{item.name}</div>
                </div>
            )
        })

        return(
            <div className="swapper">
                <div className="swapper-list">
                    {
                        ['first','second'].map(item => {
                            return(
                                <div
                                    key={item}
                                    data-type={item}
                                    className={`${this.state.isEnd ? 'end-transtion swapper-content' : 'swapper-content'} ${item === 'first'? '':'test'}`}
                                    style={this.state[item === 'first' ? 'showContainer' :'unShowContainer']}
                                    onTouchMove={(e) => this.handleTouchMove(e)}
                                    onTouchStart={(e) => this.handleTouchStart(e)}
                                    onTouchEnd={(e) => this.handleTouchEnd(e)}
                                >
                                    {swapperList}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )

        
    }

    handleTouchMove(e) {
        e.persist()
        // 移动的距离
        let transLen = (e.targetTouches[0]['pageX'] - this.state.touchStartPosition) / 100;
        this.setState({
            direction: transLen > 0 ? 'right' : 'left'
        })
        console.log(this.state.currnetDisplay,this.state.direction)
        if(this.state.currnetDisplay === 'first' && this.state.direction === 'left') {
            this.setState({
                showContainer: {
                    transform: `translateX(${transLen}rem)`
                },
                unShowContainer: {
                    transform: `translateX(${transLen > 0 ? (-3.75 + transLen) : (3.75 + transLen)}rem)`,
                },
            })
        }
        if (this.state.currnetDisplay === 'second' && this.state.direction === 'right') {
            this.setState({
                showContainer: {
                    transform: `translateX(${-3.75+transLen}rem)`
                },
                unShowContainer: {
                    transform: `translateX(${transLen}rem)`,
                },
            })
        }
        
    }

    handleTouchStart(e) {
        e.persist()
        let target = e.targetTouches[0]['target']['dataset']['type'];
        console.log(target)
        this.setState({
            isEnd: false,
            currnetDisplay: target,
            touchStartPosition: e.targetTouches[0]['pageX']
        })
    }


    // 处理 touchEnd 事件 需要使用 changedTouches  属性  targetTouched 属性为空
    handleTouchEnd(e) {
        e.persist();
        this.setState({
            isEnd: true,
        })
        // 滑动的长度
        let moveLen = (e.changedTouches[0]['pageX'] - this.state.touchStartPosition) / 100;
        // 划过去的容器
        // let target = e.targetTouches[0]['target']['dataset']['type'];
        console.log(this.state.direction)
        let toLeft = this.state.direction === 'left';
        if (Math.abs(moveLen) > 1.85){
            this.setState({
                showContainer: {
                    transform: `translateX(${toLeft ? -3.75 : 0}rem)`
                },
                unShowContainer: {
                    transform: `translateX(${toLeft ? 0 : 3.75}rem)`,
                },
                // currnetDisplay: target
            })
        }else{
            this.setState({
                showContainer: {
                    transform: `translateX(0rem)`
                },
                unShowContainer: {
                    transform: `translateX(3.75rem)`,
                },
            })
        }
    }

    componentDidMount() {
        console.log(this.props)
    }
}


