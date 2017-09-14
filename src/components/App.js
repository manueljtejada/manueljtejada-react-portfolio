import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './Menu';
import Home from './Home';
import Portfolio from './Portfolio';
import Single from './Single';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <main className="container">
        <BrowserRouter>
          <div>
            <Menu />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/work" component={Portfolio}></Route>
            <Route exact path="/work/:id" component={Single}></Route>
          </div>
        </BrowserRouter>
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default App;
