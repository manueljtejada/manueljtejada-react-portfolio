import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class PortfolioListItem extends Component {
  constructor() {
    super();

    this.stripUrl = this.stripUrl.bind(this);
  }

  stripUrl(url) {
    return url.replace(/(^\w+:|^)\/\//, '');
  }

  render () {
    const post = this.props.post.fields;
    const thumbnail = post.thumbnail.fields.file;

    return(
      <article className="col-sm-4 mb-5">
        <div className="browser-mockup mb-4">
          <Link to={`/work/${this.props.id}`}>
            <img src={`${thumbnail.url}?w=450`} alt={post.title} className="img-fluid" />
          </Link>
        </div>
        <h5>
          <Link className="post-link" to={post.url}>
            <b>{post.title}</b>
          </Link>
        </h5>
        <div className="text-sm text-muted">
          <Link to={post.url} target="_blank">{this.stripUrl(post.url)}</Link>
        </div>
      </article>
    )
  }
}

PortfolioListItem.propTypes = {
  post: PropTypes.object
}

export default PortfolioListItem;
