import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './css/icons.css';
import "./css/ui.css";
import "./css/style.css";
import "./bootstrap/css/bootstrap.min.css";
import Login from './components/layout/Login';
import Exchange from './components/layout/exchange'
import ExchangeUserless from './components/layout/exchange'
import MarketOverview from './components/layout/marketoverview'

const App = () =>
		<Router>
			<Fragment>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/exchange" component={Exchange} />
						<Route exact path="/exchangeuserless" component={ExchangeUserless} />
						<Route exact path="/market-overview" component={MarketOverview} />
					</Switch>
			</Fragment>
		</Router>

export default App;
