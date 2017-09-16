import React, { Component } from 'react';
import { client } from '../utils/contentful';
import marked from 'marked';

class About extends Component {
	constructor() {
		super();

		this.getParsedMarkdown = this.getParsedMarkdown.bind(this);

		this.state = {
			content: null
		};
	}

	componentDidMount() {
		client.getEntry('1gqW2X8iamOWI0ayuWUWcq').then(response => {
			this.setState({ content: response });
		});
	}

	getParsedMarkdown(content) {
		return {
			__html: marked(content, { sanitize: true })
		};
	}

	render() {
		if (!this.state.content) {
			return <h1>Loading...</h1>;
		}

		const content = this.state.content.fields;

		return (
			<div className="p-3">
				<h1 className="mb-4">{content.title}</h1>
				<div
					dangerouslySetInnerHTML={this.getParsedMarkdown(content.content)}
				/>
				<div className="row mt-4">
					<div className="col-sm-3">
						<h5>Skills</h5>
						<ul className="list-unstyled">
							{content.skills.map((item, i) => <li key={i}>{item}</li>)}
						</ul>
					</div>
					<div className="col-sm-3">
						<h5>Favorite Tools</h5>
						<ul className="list-unstyled">
							{content.favoriteTools.map((item, i) => <li key={i}>{item}</li>)}
						</ul>
					</div>
					<div className="col-sm-3">
						<h5>Hobbies</h5>
						<ul className="list-unstyled">
							{content.hobbies.map((item, i) => <li key={i}>{item}</li>)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
