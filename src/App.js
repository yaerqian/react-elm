import React, { Fragment} from 'react';
import './style/common.scss'
// import Header from './common/header/index'
import Footer from './common/footer/index'
import './static/iconfont/iconfont.css'
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom'
// import history from 'history';



import Home from './components/home';
import Discovery from './components/discovery'
import Order from './components/order'
import Mine from './components/mine'


function App() {
	// const customHistory = history.createBrowserHistory();
	return (
		<div className="App">
			{/* <Header name="search" /> */}
			{/* learn react */}
			<BrowserRouter>
				<Switch>
					<Fragment>
						{/* <IndexRoute component={Home} /> */}
						{/* <Route path="/home" exact component={Home}></Route> */}
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
			
		</div>
	);
}

export default App;
