import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PortfolioListItem from './PortfolioListItem';
import { client } from '../services/client';
import { portfolioTypeId } from '../config';

class PortfolioList extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		client
			.getEntries({
				content_type: portfolioTypeId,
				limit: this.props.limit,
				order: '-fields.date'
			})
			.then(response => {
				this.setState({ posts: response.items });
			});
	}

	render() {
		const { posts } = this.state;

		return (
			<div className="row posts">
				{posts.map((post, i) => (
					<PortfolioListItem id={post.sys.id} key={i} post={post} />
				))}
			</div>
		);
	}
}

PortfolioList.propTypes = {
	limit: PropTypes.number
};

export default PortfolioList;
