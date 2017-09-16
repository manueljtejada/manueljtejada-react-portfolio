import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { fetchPost } from '../actions/actionCreators';

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
				<div className="browser-mockup mb-4">
					<Link to={`/work/${this.props.id}`}>
						<img
							src={`${thumbnail.url}?w=450`}
							alt={post.title}
							className="img-fluid"
						/>
					</Link>
				</div>
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
