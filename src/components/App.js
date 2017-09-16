import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Menu from './Menu';
import Home from './Home';
import PortfolioList from './PortfolioList';
import Single from './Single';
import About from './About';
import Contact from './Contact';
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
          <div>
            <Menu />
            <Route component={logPageView} />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/work" component={PortfolioList}></Route>
              <Route exact path="/work/:id" component={Single}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default App;
