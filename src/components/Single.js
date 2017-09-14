import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { client } from '../services/client';
import marked from 'marked';

import Asset from './Asset';

class Single extends Component {
  constructor() {
    super();

    this.getParsedMarkdown = this.getParsedMarkdown.bind(this);

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    const { params } = this.props.match;
    if (params && params.id) {
      client.getEntry(params.id)
      .then((response) => {
        this.setState({
          post: response
        })
      })
    }
  }

  getParsedMarkdown(content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  render () {
    if (!this.state.post) {
      return <h1>Not Found</h1>
    }

    const post = this.state.post.fields;
    // const thumbnail = post.thumbnail.fields.file;

    return(
      <article className="post container my-5">
        <header className="d-flex justify-content-between mb-4">
          <h1 className="post-title">
            <b>{this.state.post.fields.title}</b>
          </h1>
          <div>
            <a href={post.url} target="_blank" className="btn btn-secondary btn-rounded">
              View Site &raquo;
            </a>
          </div>
        </header>

        <div className="post-intro"
          dangerouslySetInnerHTML={this.getParsedMarkdown(post.description)} />

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

        <div className="post-content">
          {post.content}
        </div>

        <Asset id={post.fullScreenshot.sys.id} />
      </article>
    )
  }
}

Single.propTypes = {
  post: PropTypes.object
}

export default Single;
