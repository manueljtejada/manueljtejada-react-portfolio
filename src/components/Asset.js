import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { fetchAsset } from '../actions/actionCreators';

class Asset extends Component {
	componentDidMount() {
    if (!this.props.fields.title) {
      this.props.dispatch(fetchAsset(this.props.id));
    }
  }

	render() {
		const asset = this.props.fields;

		if (!asset.title) {
			return <h6>Loading</h6>;
		}

		return <img src={asset.file.url} alt={asset.file.title} className="img-fluid" />;
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

Asset.propTypes = {
	id: PropTypes.string
};

export default connect(mapStateToProps)(Asset);
