import React from 'react';
import './style/common.scss'
// import Header from './common/header/index'
import './static/iconfont/iconfont.css'

// import history from 'history';
import { Provider } from 'react-redux'

import store from './store'
import BasicRouter from './router/router.config'

function App() {
	// const customHistory = history.createBrowserHistory();
	return (
		<div className="App">
			{/* <Header name="search" /> */}
			{/* learn react */}
			<Provider store={store}>
				<BasicRouter/>
			</Provider>
		</div>
	);
}

export default App;
