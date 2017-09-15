import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Menu from './Menu';
import Home from './Home';
import Portfolio from './Portfolio';
import Single from './Single';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <main className="container">
        <BrowserRouter>
          <div>
            <Menu />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/work" component={Portfolio}></Route>
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
