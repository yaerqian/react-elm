import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './index.scss'

export default class EleSwapper extends Component {

    constructor(props) {
        super(props);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.state = {
            // 中间显示的容器的起始位置
            showContainer: {
                transform: 'translateX(0)'
            },
            // 另外一个不显示的容器的起始位置 默认在右边
            unShowContainer: {
                transform: 'translateX(3.75rem)',
            },

            // touchStart 事件起始x位置
            touchStartPositionX: 0,
            touchStartPositionY: 0,
            // touch 事件结束添加动画
            isEnd: false,
            // 滑动的方向
            direction: '',
            // 当前显示的是哪一个容器
            currnetDisplay: 'first',
            // 当前显示的卡片
            currentIndex: 0,
            // 
            first: 0,
            //
            second: 1,
            // 是否是第一次滑动 如果是第一次滑动 页数不做处理
            isFirstMove: true,
            // 滑动的时候只设置一次first 和 second
            seted: false
        
        }
    }

    render() {

        const List = this.props.swapperList.reduce((final,item) => {
            let innerItem = item.map((v) => {
                return (
                    <div className="swapper-item" key={v.name}>
                        <img src={v.src} alt="" />
                        <div>{v.name}</div>
                    </div>
                )
            })
            final.push(innerItem);
            return final;
        },[])

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
                                    // onTouchMove={(e) => this.handleTouchMove(e)}
                                    onTouchStart={(e) => this.handleTouchStart(e, item)}
                                    onTouchEnd={(e) => this.handleTouchEnd(e, item)}
                                >
                                    {/* 
                                        这里由之前的函数获取 改为 静态变量获取 防止修改 transtion 这个state的时候render 函数一直刷新 造成 这里的 getSwapperList 函数一直执行
                                    */}
                                    {List[`${this.state[item]}`] }
                                </div>
                            )
                        })
                    }           
                </div>

                <div className="swapper-tip">
                    {
                        this.props.swapperList.map((item, index) => {
                            return (
                                <div key={item.name} className={`swapper-tip-item ${this.state.currentIndex === index ? 'swapper-tip-active' : ''}`}></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }



    handleTouchMove(e) {
        // e.persist();
        // 移动的距离
        const total = this.props.swapperList.length;

        let transLen = (e.targetTouches[0]['pageX'] - this.state.touchStartPositionX) / 100;
        let transLenY = (e.targetTouches[0]['pageY'] - this.state.touchStartPositionY) / 100;
        // 比较横向和纵向的移动距离 判断是要横向滚动还是纵向滚动
        if (Math.abs(transLen) > Math.abs(transLenY)) {
            e.preventDefault()
        }
        this.setState({
            direction: transLen > 0 ? 'right' : 'left'
        })
        console.log(this.state.currnetDisplay)
        if(this.state.currnetDisplay === 'first') {
            if (total > 2 && !this.state.seted) {// 如果只有两页 则不做任何页数处理
                if (this.state.direction === 'left' && !this.state.isFirstMove) {
                    this.setState({
                        second: (this.state.first === total - 1) ? 0 : (this.state.first + 1),
                        seted: true
                    })
                } else if (this.state.direction === 'right'){
                    // 向右滑动
                    this.setState({
                        second: (this.state.first === 0) ? total - 1 : (this.state.first - 1),
                        seted: true                        
                    })
                }
            }
            
            this.setState({
                showContainer: {
                    transform: `translateX(${transLen}rem)`
                },
                unShowContainer: {
                    transform: `translateX(${(this.state.direction === 'left'? 3.75 : -3.75) + transLen}rem)`,
                },
            })
        }
 
        
        if(this.state.currnetDisplay === 'second') {
            if (total > 2 && !this.state.seted) {// 如果只有两页 则不做任何页数处理
                if (this.state.direction === 'left' && !this.state.isFirstMove) {
                    this.setState({
                        first: (this.state.second === total - 1) ? 0 : (this.state.second + 1),
                        seted: true
                    })
                } else if (this.state.direction === 'right'){
                    // 向右滑动
                    this.setState({
                        first: this.state.second === 0 ? total - 1 : (this.state.second - 1),
                        seted: true
                    })
                }
            }
            this.setState({
                showContainer: {
                    transform: `translateX(${(this.state.direction === 'left' ? 3.75 : -3.75) + transLen}rem)`
                },
                unShowContainer: {
                    transform: `translateX(${transLen}rem)`
                }
            })
        }
    }

    handleTouchStart(e, item) {
        e.persist()
        console.log(this.state.currentIndex)
        // 分页总数
        let target = item;
        this.setState({
            isEnd: false,
            currnetDisplay: target,
            touchStartPositionX: e.targetTouches[0]['pageX'],
            touchStartPositionY: e.targetTouches[0]['pageY']
        })
    }


    // 处理 touchEnd 事件 需要使用 changedTouches  属性  targetTouched 属性为空
    handleTouchEnd(e) {
        e.persist();
        this.setState({
            seted: false
        })
        // 滑动的长度
        let moveLen = (e.changedTouches[0]['pageX'] - this.state.touchStartPositionX) / 100;
        if(moveLen === 0) {// 解决点击事件 会引起后续函数的执行
            return;
        }
        this.setState({
            isEnd: true,
        })
        
        // 划过去的容器
        // let target = e.targetTouches[0]['target']['dataset']['type'];
        let toLeft = this.state.direction === 'left';
        if (Math.abs(moveLen) > 1){
            this.setState({
                isFirstMove: false
            })
            if(this.state.currnetDisplay === 'first') {
                this.setState({
                    showContainer: {
                        transform: `translateX(${toLeft ? -3.75 : 3.75}rem)`
                    },
                    unShowContainer: {
                        transform: `translateX(0rem)`,
                    },
                    // currnetDisplay: target
                })
            }else{
                this.setState({
                    showContainer: {
                        transform: `translateX(0rem)`
                    },
                    unShowContainer: {
                        transform: `translateX(${toLeft ? -3.75 : 3.75}rem)`,
                    },
                    // currnetDisplay: target
                })
            }

            let indexOfCurrent = this.state.currentIndex;
            let listLength = this.props.swapperList.length;
           
            if(!toLeft) {
                if (indexOfCurrent === 0) {
                    console.log('listLength', listLength)
                    this.setState({
                        currentIndex: listLength - 1
                    })
                }else{
                    this.setState({
                        currentIndex: indexOfCurrent - 1
                    })
                }
            }else{
                if (indexOfCurrent === listLength - 1) {
                    this.setState({
                        currentIndex: 0
                    })
                }else{
                    this.setState({
                        currentIndex: indexOfCurrent + 1
                    })
                }
            }
            
            
        }else{
            if(this.state.currnetDisplay === 'first') {
                this.setState({
                    showContainer: {
                        transform: `translateX(0rem)`
                    },
                    unShowContainer: {
                        transform: `translateX(${toLeft ? 3.75 : -3.75}rem)`,
                    },
                })
            }else{
                this.setState({
                    showContainer: {
                        transform: `translateX(${toLeft ? 3.75 : -3.75}rem)`
                    },
                    unShowContainer: {
                        transform: `translateX(0rem)`,
                    },
                })
            }
            
        }
    }

    componentDidMount() {
        console.log(this.props);
        let swapperItem = document.getElementsByClassName('swapper-content');
        // 给元素添加事件监听 并设置 passive 为false
        // touchmove 阻止默认事件 防止横向滚动的时候 页面纵向滚动
        for (let i = 0; i < swapperItem.length;i++ ) {
            swapperItem[i].addEventListener('touchmove', (e) => {
                this.handleTouchMove(e);
            }, {
                passive: false // 禁止 passive 效果
            })
            // 设置 passive 为 true 的时候 listener 永远不会调用 preventDefault（）
            // 反之 可以调用 preventDefault()
        }
    }
}


