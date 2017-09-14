import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PortfolioListItem from './PortfolioListItem';
import { client } from '../services/client';
import { portfolioTypeId } from '../config';

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    client.getEntries({
      content_type: portfolioTypeId,
      limit: this.props.limit
    })
      .then((response) => {
        this.setState({posts: response.items})
      })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="row posts">
        {posts.map((post, i) => <PortfolioListItem id={post.sys.id} key={i} post={post} />)}
      </div>
    )
  }
}

Portfolio.propTypes = {
  app: PropTypes.object,
  galleries: PropTypes.object,
  loadPost: PropTypes.func,
  loadPosts: PropTypes.func,
  params: PropTypes.object
}

export default Portfolio;
