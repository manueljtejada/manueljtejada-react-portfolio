import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { fetchPost } from '../actions/actionCreators';

const BrowserMockup = styled.div`
	border-radius: 3px 3px 0 0;
	border-top: 2em solid rgba(230, 230, 230, .25);
	box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
	position: relative;
	&::before {
		background-color: #f44;
		border-radius: 50%;
		box-shadow: 0 0 0 2px #ff6057, 1.5em 0 0 2px #ffc12e, 3em 0 0 2px #28ca40;
		content: '';
		display: block;
		height: .5em;
		left: 1em;
		position: absolute;
		top: -1.25em;
		width: .5em;
	}
`;

class PortfolioListItem extends Component {
	constructor() {
		super();

		this.stripUrl = this.stripUrl.bind(this);
	}

	componentDidMount() {
    if (!this.props.fields.title) {
      this.props.dispatch(fetchPost(this.props.id));
    }
  }

	stripUrl(url) {
		return url.replace(/(^\w+:|^)\/\//, '');
	}

	render() {
		const post = this.props.post.fields;
		const thumbnail = post.thumbnail.fields.file;

		return (
			<article className="col-sm-4 mb-5">
				<BrowserMockup className="mb-4">
					<Link to={`/work/${this.props.id}`}>
						<img
							src={`${thumbnail.url}?w=450`}
							alt={post.title}
							className="img-fluid"
						/>
					</Link>
				</BrowserMockup>
				<h5>
					<Link className="post-link" to={post.url}>
						<b>{post.title}</b>
					</Link>
				</h5>
				<div className="text-sm text-muted">
					<Link to={post.url} target="_blank">
						{this.stripUrl(post.url)}
					</Link>
				</div>
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  const postData = state.post[ownProps.id]
    ? state.post[ownProps.id]
    : {};
  return {
    fields: postData,
  };
};

PortfolioListItem.propTypes = {
	post: PropTypes.object
};

export default connect(mapStateToProps)(PortfolioListItem);
