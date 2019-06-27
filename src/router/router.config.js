import React from 'react';
import { Router,  Route, IndexRoute, hashHistory } from 'react-router-dom';
import Home from '../common/home';
import Discovery from '../common/discovery'
import Order from '../common/order'
import Mine from '../common/mine'


export default () => (
    // hash 模式路由
    <Router history={hashHistory}>
        <Route>
            {/* 默认路由 */}
            <IndexRoute component={Home} />
            {/* 首页 */}
            <Route path="/home" component={Home}></Route>
            {/* 发现页 */}
            <Route path="/discovery" component={Discovery}></Route>
            {/* 订单页 */}
            <Route path="/order" component={Order}></Route>
            {/* 我的 */}
            <Route path="/mine" component={Mine}></Route>
        </Route>
    </Router>
)
