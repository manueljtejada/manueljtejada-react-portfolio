import React from 'react';

import SinglePost from './SinglePost';

const Single = ({ match }) => {
	return (
		<div>
			<SinglePost id={match.params.id} />
		</div>
	)
}

export default Single;
