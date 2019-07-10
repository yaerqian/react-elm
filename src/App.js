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
import { Provider } from 'react-redux'


import Home from './components/home';
import Discovery from './components/discovery'
import Order from './components/order'
import Mine from './components/mine'
import store from './store'


function App() {
	// const customHistory = history.createBrowserHistory();
	return (
		<div className="App">
			{/* <Header name="search" /> */}
			{/* learn react */}
			<Provider store={store}>
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
			</Provider>
		</div>
	);
}

export default App;
