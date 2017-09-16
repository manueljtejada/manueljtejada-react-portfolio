import React from 'react';
import Jumbotron from './Jumbotron';
import PortfolioList from './PortfolioList';

const Home = () => {
  return (
  	<div className="text-center">
  		<Jumbotron />
  		<h6 className="page-subheading mt-5">Recent</h6>
  		<h2 className="mb-5">Latest Work</h2>
  		<PortfolioList limit={3} />
  	</div>
);

}

export default Home;
