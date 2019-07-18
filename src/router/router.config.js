import React, { Fragment } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from '../components/home';
import Discovery from '../components/discovery'
import Order from '../components/order'
import Mine from '../components/mine'
import Footer from '../common/footer/index'
import NoAddr from '../components/home/components/noAddr'
import GetAddr from '../components/home/components/getAddr'


const BasicRouter = () => (
    <BrowserRouter>
        <Switch>
            <Fragment>
                {/* <IndexRoute component={Home} /> */}
                <Route path="/home" exact component={Home}></Route>
                <Route path="/home/getAddr" exact component={GetAddr}></Route>
                {/* 订单页 */}
                <Route path="/home/noAddr" exact component={NoAddr}></Route>
                {/* 发现页 */}
                <Route path="/discovery" exact component={Discovery}></Route>
                {/* 订单页 */}
                <Route path="/order" exact component={Order}></Route>
                {/* 我的 */}
                <Route path="/mine" exact component={Mine}></Route>
                <Route path="/" exact component={Home}></Route>

                <Footer />
            </Fragment>
        </Switch>
    </BrowserRouter>
)

export default BasicRouter;
