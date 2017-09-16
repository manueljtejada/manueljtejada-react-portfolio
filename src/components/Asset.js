import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { client } from '../utils/contentful';

class Asset extends Component {
	constructor() {
		super();

		this.state = {
			asset: null
		};
	}
	componentDidMount() {
		const { id } = this.props;

		if (id) {
			client.getAsset(id).then(response => {
				this.setState({
					asset: response
				});
			});
		}
	}
	render() {
		if (!this.state.asset) {
			return <h6>Loading</h6>;
		}

		const asset = this.state.asset.fields.file;

		return <img src={asset.url} alt={asset.title} className="img-fluid" />;
	}
}

Asset.propTypes = {
	id: PropTypes.string
};

export default Asset;
