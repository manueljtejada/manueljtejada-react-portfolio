import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import marked from 'marked';

import { connect } from 'react-redux';
import { fetchPost } from '../actions/actionCreators';

import Asset from './Asset';

class Single extends Component {
	componentDidMount() {
    if (!this.props.fields.title) {
      this.props.dispatch(fetchPost(this.props.id));
    }
  }

	getParsedMarkdown(content) {
		return {
			__html: marked(content, { sanitize: true })
		};
	}

	render() {
    const post = this.props.fields;

		if (!post.title) {
			return <h1>Not Found</h1>;
		}

		return (
			<article className="post container my-5">
				<header className="d-flex justify-content-between mb-4">
					<h1 className="post-title">
						<b>{post.title}</b>
					</h1>
					<div>
						<a
							href={post.url}
							target="_blank"
							className="btn btn-secondary btn-rounded"
						>
							View Site &raquo;
						</a>
					</div>
				</header>

				<div
					className="post-intro"
					dangerouslySetInnerHTML={this.getParsedMarkdown(post.description)}
				/>

				<aside className="byline row my-5">
					<div className="col">
						<h6>Services</h6>
						{post.services.join(', ')}
					</div>
					<div className="col">
						<h6>Built with</h6>
						{post.builtWith.join(', ')}
					</div>
					<div className="col">
						<h6>Date</h6>
						{post.date}
					</div>
				</aside>

				<Asset id={post.fullScreenshot.sys.id} />
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

Single.propTypes = {
	post: PropTypes.object
};

export default connect(mapStateToProps)(Single);
