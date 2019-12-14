import React from 'react';

const Greet = ({ name, nickname, children }) => {
	return (
		<div>
			<h3>
				Hello {name} a.k.a {nickname}
			</h3>
			{children}
		</div>
	);
};

export default Greet;
