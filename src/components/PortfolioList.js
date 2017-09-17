import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PortfolioListItem from './PortfolioListItem';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actionCreators';

class PortfolioList extends Component {
	componentDidMount() {
    if (this.props.posts.length < 1) {
      this.props.dispatch(fetchPosts());
    }
  }

	render() {
		const { posts } = this.props;

		return (
			<div className="row posts">
				{posts.slice(0, this.props.limit).map((post, i) => (
					<PortfolioListItem id={post.sys.id} key={i} post={post} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

PortfolioList.propTypes = {
	limit: PropTypes.number
};

export default connect(mapStateToProps)(PortfolioList);
