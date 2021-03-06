import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store';

import Menu from './Menu';
import Home from './Home';
import PortfolioList from './PortfolioList';
import Single from './Single';
import About from './About';
import Footer from './Footer';

// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-98482386-1');

const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
	return null;
};

class App extends Component {
	render() {
		return (
			<main className="container">
				<BrowserRouter>
					<Provider store={store}>
						<div>
							<Menu />
							<Route component={logPageView} />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/work" component={PortfolioList} />
								<Route exact path="/work/:id" component={Single} />
								<Route exact path="/about" component={About} />
								<Redirect to="/" />
							</Switch>
						</div>
					</Provider>
				</BrowserRouter>
				{this.props.children}
        <Footer />
			</main>
		);
	}
}

export default App;
