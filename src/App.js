import React from 'react';
import './style/common.scss'
// import Header from './common/header/index'
import Footer from './common/footer/index'
import './static/iconfont/iconfont.css'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'


import Home from './common/home';
import Discovery from './common/discovery'
import Order from './common/order'
import Mine from './common/mine'


function App() {
  return (
    <div className="App">
        {/* <Header name="search" /> */}
        {/* learn react */}
        <BrowserRouter>
			<div>
				  {/* <IndexRoute component={Home} /> */}
				  <Route path="/home"  exact component={Home}></Route>
				  {/* 发现页 */}
				  <Route path="/discovery" exact component={Discovery}></Route>
				  {/* 订单页 */}
				  <Route path="/order" exact component={Order}></Route>
				  {/* 我的 */}
				  <Route path="/mine" exact component={Mine}></Route>
			</div>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
